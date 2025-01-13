<!--
* @description 模态框
* @filename RoyModal.vue
* @author ROYIANS
* @date 2022/10/20 10:12
!-->
<template>
  <vxe-modal
    v-model="visibleIn"
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
    <template v-slot:footer>
      <slot name="footer"></slot>
    </template>
  </vxe-modal>
</template>

<script>
import { ref, watch, onMounted } from 'vue'
export default {
  name: 'RoyModal',
  components: {},
  props: {
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
  },
  setup(props, { emit }) {
    const visibleIn = ref(props.show)

    const close = () => {
      emit('close')
      emit('update:show', false)
    }

    watch(
      () => props.show,
      (newVal) => {
        visibleIn.value = newVal
      }
    )

    onMounted(() => {
      // 如果有需要初始化的操作，可以放在这里
    })

    return {
      visibleIn,
      close
    }
  }
}
</script>

<style lang="scss"></style>
