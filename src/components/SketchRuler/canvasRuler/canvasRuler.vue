<template>
  <canvas
    ref="$canvas"
    class="ruler"
    @click="handleClick"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
    @mousemove="handleMove"
  />
</template>
<script setup>
import { drawHorizontalRuler, drawVerticalRuler } from './utils'
import { onMounted, ref, watch } from 'vue'
const  $canvas = ref();
const canvasContext = ref();
const getValueByOffset = (offset, start, scale) => Math.round(start + offset / scale)

// eslint-disable-next-line no-undef
const props= defineProps({
  vertical: Boolean,
  start: Number,
  scale: Number,
  width: Number,
  height: Number,
  canvasConfigs: Object,
  selectStart: Number,
  selectLength: Number
})
// eslint-disable-next-line no-undef
const emit = defineEmits(['onAddLine', 'onIndicatorShow', 'onIndicatorMove', 'onIndicatorHide'])

watch(() => props.start, () => {
  drawRuler()
})

watch(() => props.width, () => {
  updateCanvasContext()
  drawRuler()
})

watch(() => props.height, () => {
  updateCanvasContext()
  drawRuler()
})

function initCanvasRef() {
  //$canvas.value = $refs.$canvas
  canvasContext.value = $canvas.value?.getContext('2d')
}

function updateCanvasContext() {
  const { ratio } = props.canvasConfigs
  if (!$canvas.value) {
    return
  }
  // 比例宽高
  $canvas.value.width = props.width * ratio
  $canvas.value.height = props.height * ratio

  const ctx = $canvas.value.getContext('2d')
  ctx.font = `${12 * ratio}px -apple-system,
                "Helvetica Neue", ".SFNSText-Regular",
                "SF UI Text", Arial, "PingFang SC", "Hiragino Sans GB",
                "Microsoft YaHei", "WenQuanYi Zen Hei", sans-serif`
  ctx.lineWidth = 1
  ctx.textBaseline = 'middle'
}

function drawRuler() {
  const options = {
    scale: props.scale,
    width: props.width,
    height: props.height,
    canvasConfigs: props.canvasConfigs
  }

  if (props.vertical) {
    drawVerticalRuler(
      canvasContext.value,
      props.start,
      { y: props.selectStart, height: props.selectLength },
      options
    )
  } else {
    drawHorizontalRuler(
      canvasContext.value,
      props.start,
      { x: props.selectStart, width: props.selectLength },
      options
    )
  }
}

function handleClick(e) {
  const offset = props.vertical ? e.offsetY : e.offsetX
  const value = getValueByOffset(offset, props.start, props.scale)
  emit('onAddLine', value)
}

function handleEnter(e) {
  const offset = props.vertical ? e.offsetY : e.offsetX
  const value = getValueByOffset(offset, props.start, props.scale)
  emit('onIndicatorShow', value)
}

function handleMove(e) {
  const offset = props.vertical ? e.offsetY : e.offsetX
  const value = getValueByOffset(offset, props.start, props.scale)
  emit('onIndicatorMove', value)
}

function handleLeave() {
  emit('onIndicatorHide')
}

onMounted(() => {
  initCanvasRef()
  updateCanvasContext()
  drawRuler()
})
</script>
