import { createApp, createVNode, defineComponent, render } from 'vue'
import toast from './toast.vue'

let ToastConstructor = defineComponent(toast)
//let instance
let instances = []
let seed = 1

const Toast = function (options = {}) {
  return new Promise((resolve) => {
    let userOnClose = options.onClose
    let id = 'roy_toast_' + seed++
    options.onClose = function (id) {
      console.log('onClose',id);
      Toast.close(id, userOnClose)
      resolve()
    }
    options.visible = true;
    options.id = id;
    options.verticalOffset = 0;
    // createVNode创建实例
    const instance =createVNode(toast,options);
    //instance.id = id;
    let verticalOffset = options.offset || 0
    // 使用render将instance挂载到body上面
    render(instance, document.querySelector("body"));
    document.body.appendChild(instance.el);
    instances.forEach((item) => {
      verticalOffset += item.el.offsetHeight
    })
    //instance.el.style.top = verticalOffset?verticalOffset+'px':'0px';
    instance.visible = true;
    instances.push(instance)
  })
}

Toast.close = function (seed, userOnClose) {
  let len = instances.length
  let index = -1
  let removedHeight
  for (let i = 0; i < len; i++) {
    if (seed === instances[i].el.id) {
      removedHeight = instances[i].el.offsetHeight
      index = i
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
  if (len <= 1 || index === -1 || index > instances.length - 1) {
    return
  }
  for (let i = index; i < len - 1; i++) {
    let dom = instances[i].el
    dom.style['top'] = parseInt(dom.style['top'], 10) - removedHeight + 'px'
  }
}

export default Toast
