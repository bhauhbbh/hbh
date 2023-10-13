import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { registerPlugins } from '@/plugins'


const vuetify = createVuetify({
    components,
    directives,
})

const app = createApp(App)

registerPlugins(app)
app.use(createPinia())
app.use(router)

app.use(vuetify)
app.mount('#app')

// createApp(App).use(vuetify).mount('#app')
// app.mount('#app')
