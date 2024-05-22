<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180"
      >
      <template slot-scope="scope">
        <span >{{ scope.row.name }}</span>
      </template>
    </el-table-column>
     <el-table-column
      label="审核内容"
      width="180"
      >
      <template slot-scope="scope">
        <span >{{ scope.row.content }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handlePass(scope.$index, scope.row)">通过</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleRefuse(scope.$index, scope.row)">驳回</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2022-04-01',
          name: '张三',
          content: '申请加入该班级'
        }, {
          date: '2022-04-04',
          name: '李四',
          content: '申请离开该班级'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>

