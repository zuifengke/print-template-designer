// import Vue from 'vue'
// // 用于监听、触发事件
// export default new Vue()

// eventBus.js
import mitt from 'mitt';

// 创建一个事件总线实例
const eventBus = mitt();
export default eventBus;
