<template>
  <div class="container">
    <aside class="left-container">
      <el-tree :data="data" :props="defaultProps" accordion>
      </el-tree>
    </aside>
    <section class="post-container">
      <el-form class="post-meta">
        <el-form-item>
          <el-input placeholder="文章标题" style="width: 720px"></el-input>
          <el-cascader v-model="value" :options="data"></el-cascader>
          <el-button type="primary" icon="el-icon-position" >发布</el-button>
        </el-form-item>
      </el-form>
      <mavon-editor v-model="content" class="editor"></mavon-editor>
    </section>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "card",
  data() {
    return {
      content: '',
      value: [],
      data: [{
        value: 'frontend',
        label: '前端开发',
        children: [{
          value: 'design-pattern',
          label: '设计模式',
          children: [{
            value: 'factory',
            label: '工厂模式'
          }]
        }]
      }, {
        value: 'backend',
        label: '后端开发',
        children: [{
          value: 'java',
          label: 'Java',
          children: [{
            value: 'spring',
            label: 'Spring boot'
          }]
        }, {
          value: 'php',
          label: 'Php',
          children: [{
            value: 'laravel',
            label: 'Laravel'
          }]
        }]
      }, {
        value: 'daily',
        label: '日常随笔',
        children: [{
          value: 'life',
          label: '生活日记',
        }, {
          value: 'feeling',
          label: '日常感想',
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  components: {
    mavonEditor
  },
  methods: {
  }
}
</script>

<style>
  .el-tree-node__content {
    height: 40px;
  }
</style>
<style lang="scss" scoped>
  .container {
    height: 100%;
    display: grid;
    grid-template-columns: 220px 1fr;
  }
  .left-container {
    height: 100%;
    flex: 0 0 220px;
    margin-right: 20px;
    background: #fff;
    border-radius: 4px;
  }
  .post-list {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .post-item {
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    margin-bottom: 4px;
    background: #fff;
    font-size: 14px;
    cursor: pointer;
  }
  .post-item:hover {
    background: rgb(198, 226, 255);
  }
  .post-folder {
    color: #e7a44e;
  }
  .post-time {
    float: right;
    color: #ccc;
    font-size: 12px;
  }
  .editor {
    flex-basis: auto;
    height: calc(100% - 60px);
    width: 100%;
  }
</style>