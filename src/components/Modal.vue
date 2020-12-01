<template>
  <div>
    <div
      @click="close"
      class="bg-gray-500 fixed inset-0 opacity-50 z-20"
    ></div>
    <div class="absolute inset-0">
      <div class="flex h-full">
        <div class="m-auto bg-white p-2 rounded shadow w-1/3 z-30">
          <div class="p-2 border">
            <header>
              <slot name="title">Provide a title</slot>
            </header>
            <main>
              <slot></slot>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup(_, { emit }) {
    function close() {
      emit('close')
    }

    return {
      close,
    }
  }
}
</script>
