import { createApp } from 'vue'
import App from './App.vue'
import VueQrcode from '@chenfengyuan/vue-qrcode';


// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import router from './router'

const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
      },
  components,
  directives,
})

const app = createApp(App).use(router).use(vuetify)

app.component(VueQrcode.name, VueQrcode);
app.mount('#app') 
