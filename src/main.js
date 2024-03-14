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
        key: 'AIzaSyCAqdwRPpTtDGc6lWZKlSO0EPgkAKRo-8o',
        libraries: 'places'
    }
})

app.mount('#app')


// test API key : AIzaSyCAqdwRPpTtDGc6lWZKlSO0EPgkAKRo-8o
// my API key : AIzaSyBfV4WyOGW7v79likTLWas_bAHyG5ddymk