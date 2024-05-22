<template>
  <el-container>
    <el-header style="height: auto">
      <div class="header">
        <div class="info">
          <div class="name">班级空间</div>
          <div class="icon" @click="jumpToManage" style="cursor: pointer">
            <i class="el-icon-user"></i>
          </div>
        </div>
      </div>
    </el-header>
    <el-main style="padding: 0">
      <el-header>
        <div class="search">
          <el-input
            placeholder="搜索班级"
            prefix-icon="el-icon-search"
            v-model="input1"
            style="width: 80%; margin: 0 auto"
          >
          </el-input>
        </div>
      </el-header>
      <div class="background">
        <el-main style="padding: 0">
          <el-header style="height: auto">
            <div class="yxclass">
              <img :src="classImg" style="max-height: 400px" />
            </div>
            <div style="width: 700px">
              <el-carousel height="400px">
                <el-carousel-item v-for="item in banner" :key="item">
                  <h3 class="small">
                    <img
                      :src="item.url"
                      alt="无图片"
                      style="max-width: 700px"
                    />
                  </h3>
                </el-carousel-item>
              </el-carousel>
            </div>
          </el-header>
          <div class="latestact">
            <ul class="list2">
              <div>
                <div style="float: left">
                  <img
                    :src="act1"
                    style="
                      max-height: 140px;
                      max-width: 180px;
                      margin-top: 15px;
                    "
                  />
                  <div>
                    <img
                      :src="act2"
                      style="
                        max-height: 140px;
                        max-width: 180px;
                        margin-top: 15px;
                      "
                    />
                  </div>
                </div>
                <div style="float: left; margin-left: 50px">
                  <div>
                    <h2>最新活动</h2>
                  </div>
                  <div>
                    <li v-for="activity in AcList" :key="activity">
                      {{ activity }}
                    </li>
                  </div>
                </div>
                <div>
                  <div
                    style="
                      color: red;
                      font-size: 12px;
                      text-align: right;
                      margin-right: 10px;
                    "
                  >
                    更多&nbsp;〉〉
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <el-aside style="background-color: white; height: auto; width: 400px">
            <ul class="list">
              <h2>班级列表</h2>
              <li v-for="classname in ClList" :key="classname">
                {{ classname }}
              </li>
              <div
                style="
                  color: red;
                  font-size: 12px;
                  margin: 50px 20px auto auto;
                  text-align: right;
                "
              >
                点击查看更多&nbsp;〉〉
              </div>
            </ul>
          </el-aside>
        </el-main>
      </div>
    </el-main>
    <el-footer style="text-align: left; padding: 0">
      <div
        style="background-color: rgb(231, 229, 229); width: 100%; height: 20px"
      ></div>
      <el-divider></el-divider>
      <div>
        <div class="footerbox">
          <img :src="cal" class="FooterImage" />
        </div>
        <div class="footerbox">
          <img :src="gui" class="FooterImage" />
          <p>&lt;-明星导师</p>
        </div>
        <div class="footerbox">
          <img :src="stu" class="FooterImage" />
          <p>&lt;-活跃学生</p>
        </div>
        <div class="footerbox">
          <img :src="pro" class="FooterImage" />
          <p>&lt;-项目进展</p>
        </div>
      </div>
    </el-footer>
  </el-container>
</template>

<style scoped>
.header {
  background: #2abc9d;
  width: 100%;
  padding: 0;
  height: 85px;
  display: flex;
  align-items: center;
}
.info {
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  justify-self: space-between;
  align-items: center;
}
.name {
  margin-left: 50px;
  display: flex;
  align-items: center;
  margin-right: auto;
  color: whitesmoke;
  font-size: 30px;
}
.icon {
  display: flex;
  margin-right: 37px;
  color: whitesmoke;
  font-size: 30px;
}
.search {
  background: #1f967c;
  width: 100%;
  padding: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.background {
  background-color: rgb(231, 229, 229);
  height: auto;
  padding-left: 100px;
  padding-right: 100px;
}
.yxclass {
  float: right;
  height: 400px;
  background-color: white;
  width: calc(100% - 700px);
}
.text {
  font-size: 14px;
  color: #1f967c;
}
.item {
  margin-bottom: 10px;
}
.list {
  margin-left: 23px;
  margin-top: 16px;
  width: 290px;
  height: 328px;
  line-height: 25px;
  color: #1f967c;
  font-size: 17px;
  text-align: left;
  font-family: Roboto;
  border: 3px dotted #2abc9d;
}
.list2 {
  margin-top: 16px;
  width: 90%;
  height: 332px;
  line-height: 25px;
  color: #1f967c;
  font-size: 17px;
  text-align: left;
  font-family: Roboto;
  border: 1px solid #1f967c;
  background-color: #b5ede1;
}
.latestact {
  float: right;
  background-color: white;
  height: 367px;
  width: calc(100% - 400px);
}
.FooterImage {
  max-width: 300px;
  max-height: 300px;
}
.footerbox {
  margin: 20px;
  width: 300px;
  height: 300px;
  float: left;
  position: relative;
}
.footerbox p{
  font-size: 15px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  color: #1f967c;
  font-weight: 800;
}

</style>

<script>
export default {
  data() {
    return {
      input1: "",
      classImg: require("@/assets/yxclass.png"),
      act1: require("@/assets/activity/act1.jpeg"),
      act2: require("@/assets/activity/act2.jpeg"),
      cal: require("@/assets/footer/cal.png"),
      gui: require("@/assets/footer/gui.jpeg"),
      stu: require("@/assets/footer/stu.jpeg"),
      pro: require("@/assets/footer/pro.jpeg"),
      banner: [
        { url: require("@/assets/banner/class1.jpeg") },
        { url: require("@/assets/banner/class2.jpeg") },
        { url: require("@/assets/banner/class3.jpeg") },
        { url: require("@/assets/banner/class4.jpeg") },
      ],
      ClList: [
        "20052316",
        "20052317",
        "20052318",
        "20052319",
        "20052320",
        "20052321",
        "20052322",
      ],
      AcList: [
        "班级20052316项目2圆满成功。",
        "班级20052317开设新项目:xxxx。",
        '班级20052318导师xxx老师被评为"中国十佳杰出青年"。',
        "班级xxxxxxx的xxx同学获得微信小程序开发大赛的一等奖。",
      ],
    };
  },
  methods: {
    jumpToManage() {
      this.$router.push({ path: "index" });
    },
  },
};
</script>