<template>
<div>
  <div>
    <el-button size="mini" @click="fanhui()" type="primary" style="float:right">返回</el-button>
  </div>
  <div>
    <el-card>
      <el-form  label-width="80px" :model="tableDate">
        <el-row>
          <el-col :span="11">
          </el-col>
          <el-col :span="11">
              <el-form-item label="name:" style="width : 80%">
                <el-input size="mini" v-model="tableDate.name"></el-input>
              </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <!-- <el-col :span="11">
            <el-form-item label="密码:" style="width : 80%">
              <el-input size="mini" v-model="tableDate.password"></el-input>
            </el-form-item>
          </el-col> -->
          <!-- <el-col :span="11">
              <el-form-item label="学历:" style="width : 80%">
                <el-input size="mini" v-model="tableDate.xueLi"></el-input>
              </el-form-item>
          </el-col> -->
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item label="年龄:" style="width : 80%">
              <el-input size="mini" v-model="tableDate.age"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
              <el-form-item label="用户名:" style="width : 80%">
                <el-input size="mini" v-model="tableDate.userName"></el-input>
              </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="11">
            <el-form-item label="email地址:" style="width : 80%">
              <el-input size="mini" v-model="tableDate.email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="11">
              <el-form-item label="密码:" style="width : 80%">
                <el-input size="mini" v-model="tableDate.passWord"></el-input>
              </el-form-item>
          </el-col>
        </el-row>
         <!-- <el-form-item label="备注信息:" style="width : 80%">
            <el-input size="mini" v-model="tableDate.mark"></el-input>
          </el-form-item> -->
      </el-form>
    </el-card>
    <el-button size="mini" @click="add" type="primary" style="float:right">提交</el-button>
  </div>
</div>
</template>

<script>
import {addUser} from '@/api/user'
export default {
   data() {
      return {
        tableDate:{
            id:undefined,
            name:undefined,
            age:undefined,
            email:undefined,
            age:undefined,
            userName:undefined,
            passWord:undefined
        }
      }
    },
  created(){
    // console.log(this.$route.query.row);
    // console.log(JSON.parse(this.$route.query.row))
  },
  methods:{
    fanhui(){
      this.$router.go(-1)
    },
    add(){
     console.log(this.tableDate)
     addUser(this.tableDate)
    //  axios.post('api/user/add', this.tableDate).then(res => {
    //      alert('seccess')
    //  })
    }
  }
}
</script>

<style>

</style>