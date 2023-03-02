import type { App } from 'vue'
import { createApp } from 'vue'
import 'virtual:svg-icons-register'
import { useMock } from '../mock'
import Index from './layout/index.vue'

import { useElementPlus, useElementPlusIcons } from './plugins/element-plus'
import { useVueDomPurifyHTML } from './plugins/vue-dompurify-html'
import { useRouter } from './plugins/vue-router'
import { useI18n } from './plugins/vue-i18n'
import { usePinia } from './plugins/pinia'

import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/notification.scss'
import './assets/theme/index.scss'
import './assets/style/index.scss'
import 'uno.css'

const app: App<Element> = createApp(Index)

useI18n(app)
usePinia(app)
useElementPlus(app)
useElementPlusIcons(app)
useVueDomPurifyHTML(app)
useRouter(app)
useMock()

app.mount('#app', true)
