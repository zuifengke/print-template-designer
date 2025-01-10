<template>
  <section :class="{ 'is-vertical': isVertical }" class="roy-container">
    <slot></slot>
  </section>
</template>

<script setup>import { computed, useSlots } from 'vue'

/**
 * 容器组件
 */
const slots = useSlots()

// eslint-disable-next-line no-undef
const props = defineProps({
  direction: {
    type: String,
    default: ''
  }
})

const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if (props.direction === 'horizontal') {
    return false
  }

  // 检查是否有特定的子组件存在
  return slots.default?.()
    ? slots.default().some((vnode) => {
      const tag = vnode.type.name
      return tag === 'RoyHeader' || tag === 'RoyFooter'
    })
    : false
})

</script>
