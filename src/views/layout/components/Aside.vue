<template>
  <el-menu
    class="menu"
    @open="handleOpen"
    @close="handleClose"
    background-color="#2abc9d"
    text-color="#fff"
    active-text-color="#ffd04b"
    router
    :default-active="$route.path"
  >
    <el-menu-item index="/">
      <span slot="title"
        ><i class="el-icon-house"></i>班级主页</span
      >
    </el-menu-item>
    <el-submenu index="/course">
      <template slot="title">
        <i class="el-icon-set-up"></i>
        <span>课程管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="/announce">发布公告</el-menu-item>
        <el-menu-item index="/modifyinfo">修改班级信息</el-menu-item>
        <el-menu-item index="/pendapply">申请审批</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/student">
      <i class="el-icon-tickets"></i>
      <span slot="title">学生列表</span>
    </el-menu-item>
    <el-menu-item index="/project">
      <i class="el-icon-menu"></i>
      <span slot="title">项目列表</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.tac {
  height: 100%;
}
i{
  color:white;
}
</style>