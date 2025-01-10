// export default {
//   name: 'RoyRow',
//
//   componentName: 'RoyRow',
//
//   props: {
//     tag: {
//       type: String,
//       default: 'div'
//     },
//     gutter: Number,
//     type: String,
//     justify: {
//       type: String,
//       default: 'start'
//     },
//     align: String
//   },
//
//   computed: {
//     style() {
//       const ret = {}
//
//       if (this.gutter) {
//         ret.marginLeft = `-${this.gutter / 2}px`
//         ret.marginRight = ret.marginLeft
//       }
//
//       return ret
//     }
//   },
//
//   render(h) {
//     return h(
//       this.tag,
//       {
//         class: [
//           'roy-row',
//           this.justify !== 'start' ? `is-justify-${this.justify}` : '',
//           this.align ? `is-align-${this.align}` : '',
//           { 'roy-row--flex': this.type === 'flex' }
//         ],
//         style: this.style
//       },
//       this.$slots.default
//     )
//   }
// }
import { defineComponent, h, renderSlot,computed } from 'vue'

export default defineComponent({
  name: 'RoyRow',
  componentName: 'RoyRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    type: String,
    justify: {
      type: String,
      default: 'start'
    },
    align: String
  },
  setup(props, { slots }) {
    const style= computed(()=> {
      const ret = {}

      if (props.gutter) {
        ret.marginLeft = `-${props.gutter / 2}px`
        ret.marginRight = ret.marginLeft
      }

      return ret
    })
    return () =>
      h(
        props.tag,
        {
          class: [
            'roy-row',
            props.justify !== 'start' ? `is-justify-${props.justify}` : '',
            props.align ? `is-align-${props.align}` : '',
            { 'roy-row--flex': props.type === 'flex' }
          ],
          style: style.value
        },
        slots.default()
      )
  }
})
