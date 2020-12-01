import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import '@/assets/css/main.css'
import router from './router'

const app = createApp(App)
  .use(router)
  .use(store)

app.mount('#app')
