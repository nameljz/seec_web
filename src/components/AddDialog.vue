<template>
  <div>
    <el-dialog title="添加新用户" :visible.sync="incrementform">
      <el-form :model="addform">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="addform.date"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="addform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="addform.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addcancelfn">取 消</el-button>
        <el-button type="primary" @click="addconfirmfn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  props:[
    "addform",
    "formLabelWidth",
    "incrementform"
  ],
  methods: {
    addcancelfn() {
      this.$emit("my_addcancel");
    },
    addconfirmfn() {
      this.$emit("my_addconfirm");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>