<template>
  <div id="background">
    <div style="margin-right: 0px; margin-left: 0px; position: absolute">
      <div
        style="display: inline-block; margin-left: 30px"
        align="left"
        class="font"
      >
        发布公告
      </div>
      <div style="display: inline-block; margin-left: 520px">
        设为置顶
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        >
        </el-switch>
      </div>
      <div style="display: inline-block; margin-left: 50px">
        <el-button type="primary" icon="el-icon-s-promotion">
          立即发布
        </el-button>
      </div>
    </div>
    <div style="margin-top: 60px">
      <el-divider></el-divider>
    </div>
    <el-form ref="form" :model="form" label-width="50px">
      <el-form-item label="标题:">
        <el-input v-model="form.title" placeholder="请输入标题"></el-input>
      </el-form-item>
    </el-form>
    <el-form>
      <el-form-item prop="desc" id="text">
        <el-input
          type="textarea"
          v-model="form.content"
          placeholder="请输入公告内容"
          :rows="19"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        content:"",
      },
      value: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style>
#background {
  position: relative;
  height: 100%;
  background-color: white;
  margin-right: 120px;
  margin-left: 110px;
  padding-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}
.font {
  font-weight: bold;
  font-size: 22px;
}
#text{
  margin-top: 20px;
  margin-right: 0px;
  margin-left: 50px;
  padding-bottom: 0px;
}
</style>