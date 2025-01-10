import Vue from 'vue'

export default {
  mutations: {
    lock({ curComponent }) {
      //Vue.set(curComponent, 'isLock', true)
      curComponent.isLock = true
    },

    unlock({ curComponent }) {
      //Vue.set(curComponent, 'isLock', false)
      curComponent.isLock = false
    }
  }
}
