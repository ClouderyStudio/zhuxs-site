import type { VNode } from 'vue'
import type { ComponentRenderProxy } from '@vue/composition-api'

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {}
    }
    interface ElementAttributesProperty {
      $props: {}
    }
    
    // 定义 HTML 元素
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}