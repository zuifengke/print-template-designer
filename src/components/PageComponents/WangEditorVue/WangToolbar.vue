<script>
import { createToolbar, DomEditor } from '@wangeditor/editor'
import { h, ref, watch, onMounted } from 'vue'
export default {
  name: 'WangToolbar',
  render() {
    return h('div', { ref: 'box' })
  },
  props: ['editor', 'defaultConfig', 'mode'],
  setup(props) {
    const box = ref(null)

    const create = (editor) => {
      if (!box.value || !editor) return
      if (DomEditor.getToolbar(editor)) return // 不重复创建
      createToolbar({
        editor,
        selector: box.value,
        config: props.defaultConfig || {},
        mode: props.mode || 'default'
      })
    }

    watch(() => props.editor, (newEditor) => {
      if (newEditor) {
        create(newEditor)
      }
    }, { immediate: true })

    onMounted(() => {
      if (props.editor) {
        create(props.editor)
      }
    })

    return {
      box
    }
  }
}
</script>
