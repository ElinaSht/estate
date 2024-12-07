import router from '@/router'
import { createHead } from '@unhead/vue'
import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'

const head = createHead()
const app = createApp(App)

app.use(router)
app.use(head)

app.mount('#app')
