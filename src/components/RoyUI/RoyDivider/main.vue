<template >
  <div
    :class="[props?.staticClass, 'roy-divider', `roy-divider--${props.direction}`]"
    v-bind="props?.attrs"
    v-on="props?.listeners"
  >
    <div
      v-if="slots.default && props.direction !== 'vertical'"
      :class="['roy-divider__text', `is-${props.contentPosition}`]"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, useSlots } from 'vue'

const slots = useSlots()
const props = defineProps({
  direction: {
    type: String,
    default: 'horizontal',
    validator(val) {
      return ['horizontal', 'vertical'].indexOf(val) !== -1
    }
  },
  contentPosition: {
    type: String,
    default: 'center',
    validator(val) {
      return ['left', 'center', 'right'].indexOf(val) !== -1
    }
  }
})
</script>
