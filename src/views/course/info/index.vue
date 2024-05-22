<template>
  <div>
    <el-descriptions
      class="margin-top"
      title="班级详细信息"
      :column="3"
      :size="size"
      border
    >
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-school"></i>
          课程名
        </template>
        创新实践
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-medal-1"></i>
          学分
        </template>
        0.5
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          教师
        </template>
        舒亚非
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-time"></i>
          上课时间
        </template>
        每周1~3节
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          上课教室
        </template>
        四教北407北409
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          其他信息
        </template>
        班级群号:1045450132<br />
        班级语雀网址:<a href="https://openxy.yuque.com/fkucsz"
          >https://openxy.yuque.com/fkucsz</a
        >
      </el-descriptions-item>
    </el-descriptions>
    <div id="button" align="right">
      <el-row>
        <el-button type="primary" icon="el-icon-edit" @click="jumpToModify"> 修改信息 </el-button>
      </el-row>
    </div>
    <div>
      <el-descriptions title="班级公告"> </el-descriptions>
      <div>
        <el-card class="box-card" shadow="hover">
          <div align="left" class="text">
            <el-tag>置顶</el-tag> 有对舒老师创新实践班的任何问题，请在群中提问
            事关未来四个学期的相处，请大胆提问个人简历不必发了，我在学院的系统上看到了，如有补充的，可私信我。
            <div id="inscription">
              【教&nbsp;&nbsp;&nbsp;师】舒亚非 发表于 2020-04-27 13:33
              <el-button-group id="button-group">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                ></el-button>
                <el-button
                  type="primary"
                  icon="el-icon-delete"
                  size="mini"
                ></el-button>
              </el-button-group>
            </div>
          </div>
        </el-card>
      </div>
      <div id="announcement">
        <el-card class="box-card" shadow="hover">
          <div align="left" class="text">
            公告测试:<br />
            test1<br />
            test2<br />
            test3<br />
            <div id="inscription">
              【管理员】蔡定非 发表于 2022-04-17 15:32
              <el-button-group id="button-group">
                <el-button
                  type="primary"
                  icon="el-icon-edit"
                  size="mini"
                ></el-button>
                <el-button
                  type="primary"
                  icon="el-icon-delete"
                  size="mini"
                ></el-button>
              </el-button-group>
            </div>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style>
#button {
  padding-top: 17px;
  padding-right: 30px;
}
#inscription {
  padding-top: 10px;
  font-size: 12px;
}
#button-group {
  padding-left: 800px;
}
#announcement {
  padding-top: 10px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 1200px;
}
</style>

<script>
export default {
  data() {
    return {
      size: "",
    };
  },
  methods:{
    jumpToModify(){
      this.$router.push({path:'\modifyinfo'})
    }
  }
};

</script>