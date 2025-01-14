# Uploader 上传

### 介绍

用于将本地的图片或文件上传至服务器。

### 安装

``` javascript
import { createApp } from 'vue';
import { Uploader } from '@nutui/nutui';

const app = createApp();
app.use(Uploader);

```

## 代码示例

### 基本用法

``` html
<nut-uploader url="http://服务器地址"></nut-uploader>
```
### 限制上传数量5个

``` html
<nut-uploader url="http://服务器地址" multiple max-count="5"></nut-uploader>
```
### 限制上传大小（每个文件最大不超过 50kb）

``` html
<nut-uploader url="http://服务器地址" multiple :max-size="1024 * 50" @oversize="onOversize"></nut-uploader>
```

``` javascript
setup() {
    const formData = {
      custom: 'test'
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
   
    return {
      onOversize,
      formData
    };
}
```

### 自定义 FormData headers

``` html
<nut-uploader url="http://服务器地址" :form-data="formData" :headers="formData" :with-Credentials="true"></nut-uploader>
```

``` javascript
setup() {
    const formData = {
      custom: 'test'
    };
    const onOversize = (files: File[]) => {
      console.log('oversize 触发 文件大小不能超过 50kb', files);
    };
   
    return {
      onOversize,
      formData
    };
}
```

### 禁用状态

``` html
<nut-uploader disabled></nut-uploader>
```

## API

### Prop

| 字段              | 说明                                                                                                                                                                                   | 类型                              | 默认值      |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|-------------|
| name              | `input` 标签 `name` 的名称，发到后台的文件参数名                                                                                                                                       | String                            | "file"      |
| url               | 上传服务器的接口地址                                                                                                                                                                   | String                            | -           |
| default-file-list | 默认已经上传的文件列表                                                                                                                                                                 | object[]                          | -           |
| file-list         | 默认已经上传的文件列表                                                                                                                                                                 | object[]                          | -           |
| custom-request    | 通过覆盖默认的上传行为，可以自定义自己的上传实现                                                                                                                                       | Function                          | -           |
| is-preview        | 是否上传成功后展示预览图                                                                                                                                                               | Boolean                           | true        |
| is-deletable      | 是否展示删除按钮                                                                                                                                                                       | Boolean                           | true        |
| method            | 上传请求的 http method                                                                                                                                                                 | String                            | "post"      |
| capture           | 图片[选取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，可选值为 camera (直接调起摄像头)                                                   | String                            | "camera"    |
| max-size          | 可以设定最大上传文件的大小（字节）                                                                                                                                                     | Number丨String                    | -           |
| max-count         | 文件上传数量限制                                                                                                                                                                       | Number丨String                    | 1           |
| clear-input       | 是否需要清空`input`内容，设为`true`支持重复选择上传同一个文件                                                                                                                          | Boolean                           | false       |
| accept-type       | 允许上传的文件类型，[详细说明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String                            | *           |
| headers           | 设置上传的请求头部                                                                                                                                                                     | Object                            | {}          |
| form-data         | 附加上传的信息 formData                                                                                                                                                                | Object                            | {}          |
| upload-icon       | 上传区域[图标名称](#/zh-CN/icon)或图片链接                                                                                                                                             | String                            | photograph  |
| xhr-state         | 接口响应的成功状态（status）值                                                                                                                                                         | Number                            | 200         |
| with-credentials  | 支持发送 cookie 凭证信息                                                                                                                                                               | Boolean                           | fasle       |
| multiple          | 是否支持文件多选                                                                                                                                                                       | Boolean                           | fasle       |
| disabled          | 是否禁用文件上传                                                                                                                                                                       | Boolean                           | fasle       |
| before-upload     | 上传前的函数需要返回一个对象                                                                                                                                                           | Function                          | input files |
| before-delete     | 除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除                                                                     | Function(file): boolean 丨Promise | -           |
| change         | 上传文件改变时的状态，详见                                                                                                                                                             | Function(fileList) 丨 Promise     | -           |
| custom-request    | 通过覆盖默认的上传行为，可以自定义自己的上传实现                                                                                                                                       | Function                          | -           |

### Event

| 名称     | 说明                   | 回调参数                         |
|----------|------------------------|----------------------------------|
| start    | 文件上传开始           | -                                |
| progress | 文件上传的进度         | 上传文件、已上传数据量、总数据量 |
| oversize | 文件大小超过限制时触发 | files                            |
| success  | 上传成功               | fileList                         |
| failure  | 上传失败               | fileList                         |

