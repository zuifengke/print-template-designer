// import Vue from 'vue'
// import Vuex from 'vuex'
//
// import printTemplateModule from './modules/index.js'
//
// Vue.use(Vuex)
// const debug = process.env.NODE_ENV !== 'production'
//
// export default new Vuex.Store({
//   strict: debug,
//   modules: {
//     printTemplateModule
//   }
// })
import { createStore} from 'vuex'

import printTemplateModule from './modules/index.js'

const debug = process.env.NODE_ENV !== 'production'

const store = createStore({
  strict: false,
  modules: {
    printTemplateModule
  }
})
export default store
