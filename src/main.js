import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style.scss'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// AOS (Animate on Scroll)
import AOS from 'aos'
import 'aos/dist/aos.css'

const lrhTheme = {
  dark: false,
  colors: {
    primary: '#0076a8',
    secondary: '#79b243',
    accent: '#f8f8f8',
    error: '#b71c1c',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'lrhTheme',
    themes: {
      lrhTheme,
    }
  }
})

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  offset: 100
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app.mount('#app')