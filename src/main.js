import { createApp } from 'vue'
import store from './stores/index.js'

import App from './App.vue'
import router from './router'
import PrintDesigner from './components/index.js'

import 'remixicon/fonts/remixicon.css'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

import '@/assets/vxevarible.scss'
import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

const app = createApp(App);
app.use(VXETable)
app.use(VxeUI)
app.use(PrintDesigner, {
  store
})
app.config.globalProperties.$VXETable = VXETable
app.config.globalProperties.$XModal = VXETable.modal
app.config.productionTip = false
app.use(router)
app.use(store);
app.mount('#roy-app')

