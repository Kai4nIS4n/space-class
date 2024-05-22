<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :default-sort="{ prop: 'num', order: 'descending' }"
  >
    <el-table-column prop="num" label="学号" sortable width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" sortable width="180">
    </el-table-column>
    <el-table-column prop="email" label="邮箱">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          num: "20051607",
          name: "蔡定非",
          email: "3091862265@qq.com",
        },
        {
          num: "11111",
          name: "张三",
          email: "123@168.com",
        },
        {
          num: "22222",
          name: "李四",
          email: "111@hdu.edu.cn",
        },
      ],
    };
  },
  methods: {
    formatter(row, column) {
      return row.email;
    },
  },
};
</script>