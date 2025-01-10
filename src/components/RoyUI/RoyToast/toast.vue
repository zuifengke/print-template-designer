<!--
* @description 提示
* @filename toast.vue
* @author ROYIANS
* @date 2022/4/21 10:57
!-->
<template>
  <div
    v-if="visible"
    :class="`roy-toast__status--${status} ${isPaused ? 'roy-toast--hover-tab' : ''}`"
    :style="positionStyle"
    class="roy-toast roy-toast--center"
    style="width: auto; opacity: 1"
    @mouseenter="doPause"
    @mouseleave="doContinue"
  >
    <div></div>
    <div class="roy-toast__main">
      <i :class="icon"></i>
      <span v-if="dangerouslyUseHTMLString" class="roy-toast__message" v-html="message"></span>
      <span v-else class="roy-toast__message">{{ message }}</span>
    </div>
    <i class="roy-toast__close ri-close-fill" @click="close"></i>
  </div>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
  nextTick,
  defineProps,
  getCurrentInstance,

} from 'vue'

let copiedDuration = 0;
let timer = null
let pauseTimer = null
const isPaused = ref(false)
let tikDownInterval =null
let { proxy } = getCurrentInstance();
let {
  status,
  duration,
  message,
  dangerouslyUseHTMLString,
  verticalOffset,
  onClose,
  visible
} = defineProps({
  visible: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    default: ''
  },
  status: {
    type: String,
    default: 'info'
  },
  duration: {
    type: Number,
    default: 5000
  },
  dangerouslyUseHTMLString: {
    type: Boolean,
    default: false
  },
  onClose: {
    type: Function,
    default: null
  },
  verticalOffset: {
    type: Number,
    default: 0
  }
})
const icon = computed(() => {
  switch (status) {
    case 'info':
      return 'ri-information-line'
    case 'success':
      return 'ri-checkbox-circle-line'
    case 'warning':
      return 'ri-error-warning-line'
    case 'error':
      return 'ri-close-circle-line'
    default:
      return ''
  }
})

const positionStyle = computed(() => {
  return {
    top: `${verticalOffset}px`,
    '--duration': `${Math.floor(duration / 1000)}s`
  }
})

function close() {
  visible = false
  onClose(proxy.$el.id);
  if (proxy.$el?.parentNode) {
    proxy.$el.parentNode.removeChild(proxy.$el)
  }
}

function clearTimer() {
  if (timer !== null) {
    clearTimeout(timer)
  }
  if (pauseTimer !== null) {
    clearTimeout(pauseTimer)
  }
  if (tikDownInterval !== null) {
    clearInterval(tikDownInterval)
  }
}

function doPause() {
  pauseTimer = setTimeout(() => {
    doRestart(true)
  }, 2000)
}

function doContinue() {
  if (timer !== null) {
    clearTimeout(pauseTimer)
  }
  doRestart(false)
  pauseTimer = null
}

function doRestart(isIn) {
  if (isIn) {
    clearTimer()
    isPaused.value = true
  } else {
    if (isPaused.value) {
      startTimer()
      isPaused.value = false
    }
  }
}

function startTimer() {
  if (copiedDuration === 0) {
    copiedDuration = duration
  }
  if (duration > 0) {
    timer = setTimeout(() => {
      close()
    }, copiedDuration)
    tikDownInterval = setInterval(() => {
      if (copiedDuration >= 1000) {
        copiedDuration -= 1000
      }
    }, 1000)
  }
}

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  clearTimer()
  timer.value = null
  pauseTimer.value = null
})
</script>

<style lang="scss">
.roy-toast {
  background: #4579e1;
  color: #fff;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
  max-width: none;
  min-width: 100%;
  margin: 0;
  left: 0;
  transform: none;
  transition: all 0.5s ease;
  transition-property: top, right, bottom, left, opacity;
  font-size: 14px;
  min-height: 30px;
  max-height: 100px;
  position: fixed;
  align-items: center;
  padding: 5px 24px;
  bottom: -100px;
  top: -100px;
  opacity: 0;
  z-index: 9999;

  &.roy-toast--center {
    left: 50%;
    transform: translate(-50%, 0);
    bottom: auto;
    top: 0;
  }

  &.roy-toast__status--warning {
    color: #ffffff;
    background: #ffa522;
  }

  &.roy-toast__status--error {
    color: #fff;
    background: #ff4843;
  }

  &.roy-toast__status--success {
    color: #fff;
    background: #009688;
  }

  .roy-toast__main {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .roy-toast__message {
    max-height: 80px;
    max-width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    word-break: break-all;
    height: 100%;
    line-height: 30px;
    padding: 0;
  }

  span {
    margin: 0;
    padding: 0;
    line-height: 1em;
  }

  i {
    padding-right: 8px;
  }

  &::after {
    position: absolute;
    width: 0;
    height: 100%;
    left: 0;
    top: 0;
    background: #fff;
    opacity: 0.1;
    content: '';
    animation: roy-toast__snackbar-progress var(--duration) linear forwards;
    pointer-events: none;
  }

  &.roy-toast--hover-tab {
    &::after {
      animation-play-state: paused;
    }
  }

  .roy-toast__close {
    font-weight: bold;
    border-radius: 2px;
    padding: 0 5px;
    margin-right: 15px;
    cursor: pointer;

    &:hover {
      background: rgba(#fff, 0.4);
    }
  }

  @keyframes roy-toast__snackbar-progress {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }
}
</style>
