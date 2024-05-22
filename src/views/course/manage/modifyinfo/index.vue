<template>
  <div id="background">
  <el-form ref="form" :model="form" label-width="100px">
    <el-form-item label="课程名称">
      <el-input
        placeholder="创新实践"
        v-model="input"
        :disabled="true"
      ></el-input>
    </el-form-item>
    <el-form-item label="学分">
      <el-input placeholder="0.5" v-model="input" :disabled="true"> </el-input>
    </el-form-item>
    <el-form-item label="任课教师">
      <el-input
        placeholder="舒亚非"
        v-model="input"
        :disabled="true"
      ></el-input>
    </el-form-item>
    <el-form-item label="上课时间">
      <el-input placeholder="请输入新的上课时间" v-model="form.time"></el-input>
    </el-form-item>
    <el-form-item label="上课教室">
      <el-input
        placeholder="请输入新的上课教室"
        v-model="form.classroom"
      ></el-input>
    </el-form-item>
    <el-form-item label="其他信息">
      <el-input
        type="textarea"
        v-model="form.otherinfo"
        placeholder="班级群号:1045450132
班级语雀网址:https://openxy.yuque.com/fkucsz"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即修改</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>



<script>
export default {
  data() {
    return {
      form: {
        time: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
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
 #background{
   background-color: white;
     position: relative;
  height: 100%;
  background-color: white;
  margin-top: 40px;
  margin-right: 80px;
  margin-left: 80px;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 25px;
  padding-bottom: 60px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
 };
 
</style>