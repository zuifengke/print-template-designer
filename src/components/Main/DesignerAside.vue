<template>
  <section :style="asideStyle" class="roy-designer-aside__main">
    <roy-sidebar-menu
      ref="sideMenu"
      :collapsed="true"
      :menu="menuList"
      :theme="isNightMode ? '' : 'white-theme'"
      width="150px"
      @item-click="onMenuSelect"
    />
    <keep-alive>
      <component
        :is="curActiveComponent"
        :key="curActiveComponentCode"
        v-show="showRight"
        class="roy-designer-aside__right_panel"
      />
    </keep-alive>
  </section>
</template>

<script setup>
import commonMixin from '@/mixin/commonMixin'
import { mapState } from 'vuex'
import { onMounted, ref, watch, computed, reactive } from 'vue'
import PageComponent from '@/components/Main/PageComponent.vue'
import PagePalette from '@/components/Main/PagePalette.vue'
import PageToc from '@/components/Main/PageToc.vue'
import DataSource from '@/components/Main/DataSource.vue'
import GlobalSetting from '@/components/Main/GlobalSetting.vue'

const menuList = [
  {
    title: '组件',
    code: 'component',
    icon: 'ri-drag-drop-line',
    activeIcon: 'ri-drag-drop-fill',
    isActive: true,
    relativeComponent: () => PageComponent
  },
  {
    title: '结构',
    code: 'toc',
    icon: 'ri-building-2-line',
    activeIcon: 'ri-building-2-fill',
    relativeComponent: () =>PageToc
  },
  {
    title: '属性',
    code: 'palette',
    icon: 'ri-palette-line',
    activeIcon: 'ri-palette-fill',
    relativeComponent: () =>PagePalette
  },
  {
    title: '数据源',
    code: 'datasource',
    icon: 'ri-database-2-line',
    activeIcon: 'ri-database-2-fill',
    relativeComponent: () =>DataSource
  },
  {
    title: '全局',
    code: 'setting',
    icon: 'ri-settings-6-line',
    activeIcon: 'ri-settings-6-fill',
    relativeComponent: () =>GlobalSetting
  }
]

const curActiveComponent = ref(null)
const curActiveComponentCode = ref('')

const showRight = ref(true)

const paletteCount = ref(0)
const globalCount = ref(0)
const componentsCount = ref(0)
const isNightMode = ref(false)
const sideMenu = ref(null)
const asideStyle = computed(() => {
  return showRight.value ? 'width: 305px' : 'width: 65px'
})
computed(mapState, () => {
  return {
    paletteCount: (state) => state.printTemplateModule.paletteCount,
    globalCount: (state) => state.printTemplateModule.globalCount,
    componentsCount: (state) => state.printTemplateModule.componentsCount,
    isNightMode: (state) => state.printTemplateModule.nightMode.isNightMode
  }
})

function onMenuSelect(e, item) {
  curActiveComponent.value = item.relativeComponent()
  curActiveComponentCode.value = item.code
  menuList.forEach((mItem) => {
    let isActive = false
    if (item.code === mItem.code) {
      isActive = true
    }
    mItem.isActive = isActive
  })
}

function clickPaletteMenu() {
  sideMenu.value.$refs.menuItems.forEach((item) => {
    if (item.item.code === 'palette' && curActiveComponentCode.value !== 'palette') {
      onMenuSelect(null, item.item)
    }
  })
}

function clickComponentMenu() {
  sideMenu.value.$refs.menuItems.forEach((item) => {
    if (item.item.code === 'component' && curActiveComponentCode.value !== 'component') {
      onMenuSelect(null, item.item)
    }
  })
}

function clickGlobalMenu() {
  sideMenu.value.$refs.menuItems.forEach((item) => {
    if (item.item.code === 'setting' && curActiveComponentCode.value !== 'setting') {
      onMenuSelect(null, item.item)
    }
  })
}

onMounted(() => {
  curActiveComponent.value = menuList[0].relativeComponent()
  curActiveComponentCode.value = menuList[0].code
})

watch(paletteCount, () => {
  clickPaletteMenu()
})

watch(componentsCount, () => {
  clickComponentMenu()
})

watch(globalCount, () => {
  clickGlobalMenu()
})
</script>

<style lang="scss" scoped>
.roy-designer-aside__main {
  height: 100%;
  width: 100%;
  display: flex;
  position: relative;
  background: var(--roy-bg-color-overlay);

  .roy-designer-aside__menu {
    height: 100%;
    z-index: 1;

    .roy-designer-aside__menu__icon {
      display: grid;
      top: -7px;
      position: relative;

      i {
        padding: 0;
        margin: 0;
        font-size: 20px;
      }

      span {
        line-height: 14px;
        visibility: visible;
        height: auto;
        width: auto;
        font-size: 8px;
        top: -14px;
        position: relative;
      }
    }
  }

  .roy-designer-aside__right_panel {
    width: calc(100% - 64px);
    background: var(--roy-bg-color-overlay);
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
