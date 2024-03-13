import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyA29trg0O6CykKZuGy95tq4wWp75pCkNdA',
        libraries: 'places'
    }
})

app.mount('#app')
