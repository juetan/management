<template>
  <layout-card title="编辑文章">
    <el-form class="post-meta">
      <el-form-item>
        <el-input placeholder="文章标题" style="width: 720px"></el-input>
        <el-button type="primary" icon="el-icon-position" class="publish">发布</el-button>
      </el-form-item>
    </el-form>
    <mavon-editor v-model="content" class="editor" :boxShadow='false' :language="$i18n.locale"></mavon-editor>
  </layout-card>
</template>

<script>
import layoutCard from '@/components/layout-card';
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
export default {
  name: "card",
  data() {
    return {
      content: '',
      value: [],
    }
  },
  components: {
    mavonEditor,
    layoutCard
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
    min-height: 700px;
    width: 100%;
    border: 1px solid #EBEEF5;
  }
  .publish {
    margin-left: 16px;
  }
</style>