<template>
  <div class="demo-list">
    <h4>Radio基本用法</h4>
    <div class="show-demo">
      <nut-radio v-model:value="radioVal" :label="2">备选项</nut-radio>
    </div>
    <h4>组合使用Radio</h4>
    <div class="show-demo">
      <nut-radio v-model:value="radioVal1" :label="1">备选项1</nut-radio>
      <nut-radio v-model:value="radioVal1" :label="2">备选项2</nut-radio>
      <span>radioVal1: {{ radioVal1 }} </span>
    </div>

    <p class="p-word">组合使用 Radio 时推荐使用 radiogroup 组件，见下方示例</p>

    <h4>RadioGroup基本用法</h4>
    <div class="show-demo">
      <nut-radiogroup v-model:value="radioGroupVal1">
        <nut-radio label="a">备选项1</nut-radio>
        <nut-radio label="b">备选项2</nut-radio>
      </nut-radiogroup>
      <span>radioGroupVal1: {{ radioGroupVal1 }} </span>
    </div>

    <h4>Radio禁用</h4>
    <div class="show-demo">
      <div>
        <span>未选中时的禁用状态：</span>
        <nut-radio :disabled="true" v-model:value="radioVal2" label="禁用"
          >备选项1</nut-radio
        >
      </div>
      <div>
        <span>已选中时的禁用状态：</span>
        <nut-radio :disabled="true" v-model:value="radioVal2" label="选中且禁用"
          >备选项2</nut-radio
        >
      </div>
    </div>

    <h4>RadioGroup整体禁用</h4>
    <div class="show-demo">
      <nut-radiogroup v-model:value="radioGroupVal2" :disabled="true">
        <nut-radio label="1">备选项1</nut-radio>
        <nut-radio label="2">备选项2</nut-radio>
        <nut-radio label="3">备选项3</nut-radio>
      </nut-radiogroup>
    </div>

    <h4>Radio自定义尺寸</h4>
    <div class="show-demo show-demo-block">
      <nut-radio size="small">小号</nut-radio>
      <nut-radio size="base">默认</nut-radio>
      <nut-radio size="large">大号</nut-radio>
      <p>size可选值：'small', 'base', 'large'</p>
    </div>

    <h4>RadioGroup整体定义尺寸</h4>
    <div class="show-demo">
      <nut-radiogroup v-model:value="radioGroupVal3" size="large">
        <nut-radio label="1">备选项1</nut-radio>
        <nut-radio label="2">备选项2</nut-radio>
        <nut-radio label="3">备选项3</nut-radio>
      </nut-radiogroup>
    </div>

    <h4>Radio禁用动效</h4>
    <div class="show-demo">
      <nut-radio :animated="false" v-model:value="radioVal3" label="a"
        >备选项1</nut-radio
      >
      <nut-radio :animated="false" v-model:value="radioVal3" label="b"
        >备选项2</nut-radio
      >
      <p>animated 属性值为 false 时，禁用自带动效</p>
    </div>

    <h4>RadioGroup禁用动效</h4>
    <div class="show-demo">
      <nut-radiogroup v-model:value="radioGroupVal4" :animated="false">
        <nut-radio label="a">备选项1</nut-radio>
        <nut-radio label="b">备选项2</nut-radio>
        <nut-radio label="c">备选项3</nut-radio>
      </nut-radiogroup>
    </div>

    <h4>自定义Class</h4>
    <div class="show-demo">
      <div>
        <nut-radio class="my-radio" v-model:value="radioVal5" label="a"
          >备选项1</nut-radio
        >
      </div>
      <div>
        <nut-radio class="my-radio" v-model:value="radioVal5" label="b"
          >备选项2</nut-radio
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
import { reactive, toRefs } from 'vue';
const { createDemo } = createComponent('radio');
export default createDemo({
  props: {},
  setup() {
    const data = reactive({
      radioVal: 1,
      radioVal1: 2,
      radioVal2: '选中且禁用',
      radioVal3: 'b',
      radioVal4: 'b',
      radioVal5: 'a',
      radioGroupVal1: 'b',
      radioGroupVal2: '2',
      radioGroupVal3: '2',
      radioGroupVal4: 'c'
    });
    return {
      ...toRefs(data)
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-list {
  margin: 60px 0;
  padding: 17px;
  h4 {
    margin-top: 10px;
    line-height: 20px;
    color: #909ca4;
    font-size: 14px;
  }
  .show-demo {
    margin-top: 10px;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 7px;
    box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
    p,
    span {
      margin-top: 10px;
      font-size: 14px;
      color: #636363;
    }
    span {
      font-size: 12px;
    }
  }
  .p-word {
    margin: 15px 0;
    font-size: 14px;
    color: #636363;
    padding-left: 5px;
    border-left: 8px solid #03a9f4;
  }
  .show-demo-block {
    label {
      display: block;
      margin-bottom: 10px;
    }
  }
  .my-radio::v-deep {
    input:checked {
      background-image: url('https://img13.360buyimg.com/imagetools/jfs/t1/154120/1/10623/372/5fe013e6E4694fbf9/fd38d389b3a3b9c6.png');
      background-size: 100%;
      border: none;
    }
  }
}
</style>
