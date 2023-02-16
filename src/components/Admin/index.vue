<template>
  <el-button  type="primary">主要按钮</el-button>
<div>
  
  <div>标题</div>
  <div>分类</div>
  <div>摘要</div>
    <div class= "wangeditor" style="border: 1px solid #ccc   width: 90%;">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="width:90%; height: 500px; overflow-y: hidden;"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
    </div>
</template>

<script >
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

export default {
  methods: {
    insertText: function(){
      const editor = this.editor // 获取 editor 实例
        if (editor == null) return
        // 调用 editor 属性和 API
        editor.insertText('一段文字')
        console.log(editor.children)
                },
},
  components: { Editor, Toolbar },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p>hello</p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
        setTimeout(() => {
            valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
        }, 1500)
        console.log("valueHtml: ", valueHtml)
    })

    const toolbarConfig = {}
    const editorConfig = { placeholder: '请输入内容...' }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
        const editor = editorRef.value
        if (editor == null) return
        editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated
    };
  }
}
const submitHTML = () => {
  let text = {
    context: editor.txt.html() + ''
  }
  axios.post('http://localhost:8089/fileUpload/uploadHTML', text).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  })
}
</script>    