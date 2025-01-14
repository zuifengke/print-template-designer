<!--
* @description 模态框
* @filename RoyModal.vue
* @author ROYIANS
* @date 2022/10/20 10:12
!-->
<template>
  <vxe-modal
    :modelValue="visibleIn"
    :height="height"
    :show-footer="showFooter"
    :title="title"
    :transfer="appendToBody"
    :width="width"
    remember
    resize
    show-zoom
    @close="close"
  >
    <slot></slot>
    <template v-if="showFooter" #footer>
      <slot name="footer"></slot>
    </template>
  </vxe-modal>
</template>

<script setup>
import { ref, watch, onMounted,defineEmits } from 'vue'

const props = defineProps({
  appendToBody: {
    type: Boolean,
    default: true
  },
  show: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '50%'
  },
  height: {
    type: String,
    default: '50%'
  },
  title: {
    type: String,
    default: '消息'
  },
  showFooter: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['close', 'update:show'])
const close = () => {
  emit('close')
  emit('update:show', false)
}
const visibleIn = ref(props.show)
onMounted(() => {
  // 如果有需要初始化的操作，可以放在这里
})

</script>

<style lang="scss"></style>
