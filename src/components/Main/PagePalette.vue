<template>
  <div v-if="initCompleted" class="roy-page-tools">
    <div v-if="curActiveComponent">
      <roy-divider v-if="settingFormItemConfig.length" content-position="left">
        属性设置
      </roy-divider>
      <vxe-form
        ref="setting-form"
        :align="formGlobalConfigIn.align"
        :data="settingFormData"
        :items="settingFormItemConfig"
        :loading="formGlobalConfigIn.loading"
        :prevent-submit="formGlobalConfigIn.preventSubmit"
        :rules="{}"
        :size="formGlobalConfigIn.size"
        :span="formGlobalConfigIn.span"
        :title-align="formGlobalConfigIn.titleAlign"
        :title-colon="formGlobalConfigIn.titleColon"
        :title-overflow="formGlobalConfigIn.titleOverflow"
        :title-width="formGlobalConfigIn.titleWidth"
        :valid-config="formGlobalConfigIn.validConfig"
        sync-resize
      />
      <roy-divider content-position="left">样式设置</roy-divider>
      <vxe-form
        ref="paletteForm"
        :align="formGlobalConfigIn.align"
        :data="formData"
        :items="formItemConfig"
        :loading="formGlobalConfigIn.loading"
        :prevent-submit="formGlobalConfigIn.preventSubmit"
        :rules="{}"
        :size="formGlobalConfigIn.size"
        :span="formGlobalConfigIn.span"
        :title-align="formGlobalConfigIn.titleAlign"
        :title-colon="formGlobalConfigIn.titleColon"
        :title-overflow="formGlobalConfigIn.titleOverflow"
        :title-width="formGlobalConfigIn.titleWidth"
        :valid-config="formGlobalConfigIn.validConfig"
        sync-resize
      />
    </div>
    <div v-else class="roy-page-tools__empty animate__animated animate__headShake">
      <i class="ri-door-lock-box-line animate__backInUp" style="color: var(--roy-color-warning)" />
      <div>请先选定一个组件，再进行该组件的属性设置</div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch, ref, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'
import commonMixin from '@/mixin/commonMixin'
import { paletteConfigList, settingConfigList } from '@/components/config/paletteConfig'

const store = useStore()
const formItemConfig = computed(() => {
  let curComponentCode = curActiveComponent.value?.component || 'no'
  return formItemConfigs[curComponentCode] || []
})
const settingFormItemConfig = computed(() => {
  let curComponentCode = curActiveComponent.value?.component || 'no'
  return settingFormItemConfigs[curComponentCode] || []
})
const curActiveComponent = computed(() => {
  if (curTableCell.value) {
    return curTableCell.value
  }
  return curComponent.value
})

// 使用 computed 函数来创建响应式的计算属性
const curComponent = computed(() => store.state.printTemplateModule.curComponent)
const curTableCell = computed(() => store.state.printTemplateModule.curTableCell)

const formData = ref({})
const formItemConfigs = paletteConfigList
const settingFormData = ref({})
const settingFormItemConfigs = settingConfigList
const initCompleted = ref(false)
const formGlobalConfigIn = {
  titleOverflow: true,
  span: 8,
  align: 'left',
  size: 'medium',
  titleAlign: 'right',
  titleWidth: '200',
  titleColon: false,
  preventSubmit: false,
  loading: false,
  validConfig: {
    autoPos: true
  }
}
onMounted(() => {
  nextTick(() => {
    initCompleted.value = true
  })
})

watch(
  curActiveComponent,
  (newValue) => {
    if (newValue) {
      formData.value = newValue.style
      settingFormData.value = newValue
    }
  },
  {
    deep: true,
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.roy-page-tools {
  overflow: auto;
  height: calc(100% - 16px);
  padding: 8px;

  .roy-page-tools__empty {
    font-size: 10px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: row wrap;

    i {
      font-size: 28px;
      width: 100%;
      align-self: end;
      text-align: center;
    }

    div {
      text-align: center;
    }
  }
}
</style>

<style lang="scss">
.roy-page-tools {
  .vxe-form.size--medium .vxe-form--item-row .vxe-form--item {
    display: grid;
  }

  .vxe-form--item-title {
    min-height: 16px !important;
    padding: 1px !important;
    font-size: 10px;
    text-align: left !important;
    margin-bottom: 1px;

    .vxe-form--item-title-label:before {
      content: '';
      width: 1px;
      height: 80%;
      margin-right: 5px;
      border-left: var(--roy-color-primary) 3px solid;
    }
  }

  .vxe-form--item {
    float: inherit !important;
  }

  .vxe-input--inner {
    border-radius: unset;
    background: transparent;
    color: var(--roy-text-color-primary);
    border-color: var(--roy-border-color);
  }
}
</style>
