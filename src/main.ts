import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(Antd)
app.mount('#app')
