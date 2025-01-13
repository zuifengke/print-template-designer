<script>
import { createEditor } from '@wangeditor/editor'
import { ref, onMounted, watch, computed,h } from 'vue'

function genErrorInfo(fnName) {
  let info = `请使用 '@${fnName}' 事件，不要放在 props 中`
  info += `\nPlease use '@${fnName}' event instead of props`
  return info
}

export default {
  //【注意】单独写 <template>...</template> 时，rollup 打包完浏览器运行时报错，所以先在这里写 template
  name: 'WangEditor',
  props: ['defaultContent', 'defaultConfig', 'mode', 'defaultHtml', 'value'], // value 用于自定义 v-model
  render() {
    return h('div', { ref: 'box' })
  },
  setup(props, { emit }) {
    const box = ref(null)
    let editor = null
    let curValue = ''

    const setHtml = (newHtml) => {
      if (!editor) return
      editor.setHtml(newHtml)
    }

    const create = () => {
      if (!box.value) return
      const defaultConfig = props.defaultConfig || {}
      const defaultContent = JSON.stringify(
        Array.isArray(props.defaultContent) ? props.defaultContent : []
      )
      createEditor({
        selector: box.value,
        html: props.defaultHtml || props.value || '',
        config: {
          ...defaultConfig,
          onCreated: (editorInstance) => {
            editor = Object.seal(editorInstance)
            emit('onCreated', editor)
            if (defaultConfig.onCreated) {
              const info = genErrorInfo('onCreated')
              throw new Error(info)
            }
          },
          onChange: (editorInstance) => {
            const editorHtml = editorInstance.getHtml()
            curValue = editorHtml
            emit('input', editorHtml)
            emit('onChange', editorInstance)
            if (defaultConfig.onChange) {
              const info = genErrorInfo('onChange')
              throw new Error(info)
            }
          },
          onDestroyed: (editorInstance) => {
            emit('onDestroyed', editorInstance)
            if (defaultConfig.onDestroyed) {
              const info = genErrorInfo('onDestroyed')
              throw new Error(info)
            }
          },
          onMaxLength: (editorInstance) => {
            emit('onMaxLength', editorInstance)
            if (defaultConfig.onMaxLength) {
              const info = genErrorInfo('onMaxLength')
              throw new Error(info)
            }
          },
          onFocus: (editorInstance) => {
            emit('onFocus', editorInstance)
            if (defaultConfig.onFocus) {
              const info = genErrorInfo('onFocus')
              throw new Error(info)
            }
          },
          onBlur: (editorInstance) => {
            emit('onBlur', editorInstance)
            if (defaultConfig.onBlur) {
              const info = genErrorInfo('onBlur')
              throw new Error(info)
            }
          },
          customAlert: (info, type) => {
            emit('customAlert', info, type)
            if (defaultConfig.customAlert) {
              const info = genErrorInfo('customAlert')
              throw new Error(info)
            }
          },
          customPaste: (editorInstance, event) => {
            if (defaultConfig.customPaste) {
              const info = genErrorInfo('customPaste')
              throw new Error(info)
            }
            let res
            emit('customPaste', editorInstance, event, (val) => {
              res = val
            })
            return res
          }
        },
        content: JSON.parse(defaultContent),
        mode: props.mode || 'default'
      })
    }
    watch(() => props.value, (newVal) => {
      const isEqual = newVal === curValue
      if (isEqual) return
      setHtml(newVal)
    }, { immediate: true })
    onMounted(() => {
      create()
    })

    return {
      box,
      curValue,
      editor
    }
  },
}
</script>
