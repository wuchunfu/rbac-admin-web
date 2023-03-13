import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Particles from 'vue3-particles'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { registerMock } from '../mock'
import { i18n } from '@/i18n'
import { router } from '@/router'
import App from '@/components/app/app.vue'
import { installComponents } from '@/utils/common'
import 'virtual:svg-icons-register'
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/notification.scss'
import '@/assets/style/index.scss'
import 'uno.css'

const app = createApp(App)

app
  .use(createPinia())
  .use(router)
  .use(ElementPlus)
  .use(i18n)
  .use(Particles)
  .use(VueDOMPurifyHTML)
  .mount('#app', true)

registerMock()

installComponents(app, ElementPlusIconsVue)
