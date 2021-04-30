<template>
  <div> 
      <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="id值"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
        <el-table-column
            prop="age"
            label="年龄">
        </el-table-column>
        <el-table-column
            prop="email"
            label="邮箱">
        </el-table-column>
        <el-table-column
            prop="userName"
            label="用户名">
        </el-table-column>
        <el-table-column
            prop="passWord"
            label="密码">
        </el-table-column>
        </el-table>
        <el-button @click="add">添加</el-button>
    </div>
</template>


<script>
import {getUserList} from '@/api/user'
 export default {
      data() {
        return {
          tableData: []
        }
      },
    created(){
    this.getDate()
  },
     methods: {
      getDate(){
        //   axios.get('api/user/getlist').then(res => {
        //       this.tableData = res.data
        // })
       
        getUserList().then(res => {
             this.tableData = res.data
        })
      },
      add(){
           this.$router.push({
        path:'addOrUpdate',
        // query:{row: JSON.stringify(row)}
      });
      }
    }
    }
</script>

<style>

</style>