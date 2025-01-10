import { h, computed, defineComponent, getCurrentInstance } from 'vue'

export default defineComponent({
  name: 'RoyCol',

  props: {
    span: {
      type: Number,
      default: 12
    },
    tag: {
      type: String,
      default: 'div'
    },
    gutter: Number,
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  setup(props, { slots }) {
    let classList = []
    let style = {}
    const gutter = computed(() => {
      const instance = getCurrentInstance()
      let parent = instance.parent
      while (parent && parent.type.componentName !== 'RoyRow') {
        parent = parent.parent
      }
      return parent ? parent.props.gutter : 0
    })
    if (gutter.value) {
      style.paddingLeft = gutter.value / 2 + 'px'
      style.paddingRight = style.paddingLeft
    }

    ;['span', 'offset', 'pull', 'push'].forEach((prop) => {
      if (props[prop] || props[prop] === 0) {
        classList.push(
          prop !== 'span' ? `roy-col-${prop}-${props[prop]}` : `roy-col-${props[prop]}`
        )
      }
    })
    ;['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
      if (typeof props[size] === 'number') {
        classList.push(`roy-col-${size}-${props[size]}`)
      } else if (typeof props[size] === 'object') {
        let propArray = props[size]
        Object.keys(propArray).forEach((prop) => {
          classList.push(
            prop !== 'span'
              ? `roy-col-${size}-${prop}-${props[prop]}`
              : `roy-col-${size}-${props[prop]}`
          )
        })
      }
    })

    return () => h(
      props.tag,
      {
        class: ['roy-col', classList],
        style
      },
      slots.default()
    )
  }
})
