import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import { loadFonts } from "./plugins/webfontloader"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "@mdi/font/css/materialdesignicons.css"
import "vuetify/styles"

loadFonts()

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
})

app.use(router)
app.use(vuetify)

app.mount("#app")
