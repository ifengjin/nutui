<template>
  <div
    class="tabbar-item"
    :style="{
      color:
        state.active == state.index ? state.activeColor : state.unactiveColor
    }"
    @click="change(state.index)"
  >
    <view class="icon-box">
      <view class="tips num" v-if="num && num <= 99">
        {{ num }}
      </view>
      <view class="tips nums" v-else-if="num && num > 100">{{ '99+' }}</view>
      <view v-if="icon">
        <nut-icon class="icon" :size="state.size" :name="icon"></nut-icon>
      </view>
      <view :class="['tabbar-nav-word', { 'big-word': !icon }]">{{
        tabTitle
      }}</view>
    </view>
  </div>
</template>
<script lang="ts">
import { createComponent } from '@/utils/create';
import {
  ComponentInternalInstance,
  computed,
  getCurrentInstance,
  inject,
  reactive,
  watch
} from 'vue';
const { create } = createComponent('tabbar-item');
export default create({
  props: {
    tabTitle: {
      // 标签页的标题
      type: String,
      default: ''
    },
    icon: {
      // 标签页显示的icon
      type: String,
      default: ''
    },
    href: {
      // 标签页的跳转链接
      type: String,
      default: ''
    },
    num: {
      // 页签右上角的数字角标
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    const parent: any = inject('parent');
    const state = reactive({
      size: parent.size,
      unactiveColor: parent.unactiveColor, // 未选中的颜色
      activeColor: parent.activeColor, // 选中的颜色
      active: parent.modelValue, // 是否选中
      index: 0
    });
    const relation = (child: ComponentInternalInstance): void => {
      if (child.proxy) {
        let index = parent.children.length;
        state.index = index;
        let obj = Object.assign({}, child.proxy, { index });
        parent.children.push(obj);
      }
    };
    relation(getCurrentInstance() as ComponentInternalInstance);
    function change(index: Number) {
      parent.changeIndex(index);
    }
    const choosed = computed(() => {
      if (parent) {
        return parent.modelValue;
      }
      return null;
    });

    watch(choosed, (value, oldValue) => {
      state.active = value;
      if (parent.children[value].href) {
        window.location.href = parent.children[value].href;
      }
    });
    return {
      state,
      change
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
