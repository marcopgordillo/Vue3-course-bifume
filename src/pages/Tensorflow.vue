<template>
  <section class="flex w-full">
    <div class="mx-auto">
      <div class="mt-10">
        <div class="text-center w-full">
          <h1 class="text-2xl mt-4">Tensorflow Object Detection</h1>
          <small>Try with cell phone only</small>
        </div>
        <div class="flex flex-wrap justify-center my-2">
          <div class="w-full flex justify-center my-2">
            <button 
              v-if="!isStreaming"
              @click="openCamera" 
              class="rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-4 py-2"
            >
              Open Camera
            </button>
            <div v-else class="flex justify-between">
              <button 
                @click="stopStreaming" 
                class="rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-4 py-2"
              >
                Stop Streaming
              </button>
              <button 
                @click="snapshot" 
                class="rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-4 py-2"
              >
                Snapshot
              </button>
            </div>
          </div>
          <video ref="videoRef" class="w-48" autoplay="true" />
        </div>
        <div class="flex flex-wrap justify-center">
          <img 
             ref="imgRef"
            class="w-48" 
            src="@/assets/images/photo-1567581935884-3349723552ca.jpeg" 
            alt="mobile"
            crossorigin="anonymous"
          />
          <div class="w-full text-center my-4">
            <button 
              @click="detect" 
              class="rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white px-4 py-2 mb-2"
            >
              <span v-if="isLoading">Loading...</span>
              <span v-else>Detect Object</span>
            </button>
            <div v-if="result.length">
              <p>{{ result[0].class }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'
require('@tensorflow/tfjs-backend-cpu')
require('@tensorflow/tfjs-backend-webgl')
const cocoSsd = require('@tensorflow-models/coco-ssd')

export default {
  setup() {
    const imgRef = ref('')
    const videoRef = ref('')
    const isLoading = ref(false)
    const isStreaming = ref(false)
    const result =ref([])

    async function detect() {
      isLoading.value = true
      const img = imgRef.value

      const model = await cocoSsd.load()

      // Classify the image
      const predictions = await model.detect(img)

      result.value = predictions
      isLoading.value = false
    }

    async function openCamera() {
      if (navigator.mediaDevices.getUserMedia) {
        const devices = await navigator.mediaDevices.enumerateDevices()

        const cams = devices.filter(device => device.kind === 'videoinput')
        
        const camId = cams[0].deviceId

        navigator.mediaDevices.getUserMedia({ 
          // video: true
          video: { deviceId: { exact: camId } }
        }).then(stream => {
            isStreaming.value = true
            videoRef.value.srcObject = stream
          })
      }
    }

    function stopStreaming() {
      const stream = videoRef.value.srcObject
      const tracks = stream.getTracks()
      tracks.map(track => track.stop())
      isStreaming.value = false
    }

    onBeforeUnmount(() => stopStreaming())

    function snapshot() {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      ctx.drawImage(videoRef.value, 0, 0, 200, 200)
      const data = canvas.toDataURL('image/png')
      imgRef.value.setAttribute('src', data)
    }
    
    return {
      imgRef, 
      videoRef, 
      result, 
      detect, 
      isLoading, 
      isStreaming, 
      openCamera,
      stopStreaming,
      snapshot
    }
  }
}
</script>
