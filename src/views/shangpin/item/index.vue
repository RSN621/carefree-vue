<template>
  <div>
    <!-- query top栏 -->
    <div class="query-top">
      <el-input v-model="queryInput" class="query-input" placeholder="请输入搜索关键词"></el-input>
      <el-button type="primary" @click="handleAdd">新增</el-button>
    </div>
    <!-- 数据表格 -->
    <div>
      <el-table
        ref="multipleTableRef"
        :data="tableData"
        stripe
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="商品id" width="80" />
        <el-table-column prop="name" label="商品名" width="180" />
        <el-table-column prop="price" label="价格" width="80" />
        <el-table-column prop="description" label="内容描述" width="180" />
        <el-table-column prop="seller_id" label="卖家id" width="180" />
        <el-table-column prop="image_url" label="图片">
          <!-- 图片的显示 -->
          <template #default="scope">
            <img :src="/image/ + scope.row.image_url" min-width="360" height="360" />
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- dialog弹窗 -->
    <div>
      <el-dialog v-model="dialogFormVisible" :title="dialogType === 'add' ? '新增' : '编辑'">
        <el-form :model="tableForm">
          <el-form-item label="商品id" :label-width="80">
            <el-input v-model="tableForm.id" autocomplete="off" />
          </el-form-item>
          <el-form-item label="商品名" :label-width="80">
            <el-input v-model="tableForm.name" autocomplete="off" />
          </el-form-item>
          <el-form-item label="价格" :label-width="80">
            <el-input v-model="tableForm.price" autocomplete="off" />
          </el-form-item>
          <el-form-item label="商品介绍" :label-width="80">
            <el-input v-model="tableForm.description" autocomplete="off" />
          </el-form-item>
          <el-form-item label="卖家id" :label-width="80">
            <el-input v-model="tableForm.seller_id" autocomplete="off" />
          </el-form-item>
          <el-form-item label="商品图片" :label-width="80">
            <el-input v-model="tableForm.image_url" autocomplete="off" />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button type="primary" @click="dialogConfirm"> 确认 </el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import axios from 'axios';
const queryInput = ref();
const tableData = ref();
const multipleSelection = ref([]);
const dialogFormVisible = ref(false);
const tableForm = ref({
  id: '',
  name: '商品名',
  price: '价格',
  description: '介绍',
  seller_id: '',
  image_url: ''
});
const dialogType = ref('add');
onMounted(() => {
  axios.get('/api/item/Select').then(resp => {
    tableData.value = resp.data;
  });
});
const handleSelectionChange = val => {
  multipleSelection.value = val;
  console.log(val);
};
const handleAdd = () => {
  dialogFormVisible.value = true;
  tableForm.value = {};
};
const handleEdit = (row: any) => {
  dialogFormVisible.value = true;
  tableForm.value = row;
};
const handleDelete = ({ id }: any) => {
  console.log(id);
};
const dialogConfirm = () => {
  dialogFormVisible.value = false;
};
</script>
<style scoped>
.query-top {
  display: flex;
  justify-content: space-between;
}
.query-input {
  width: 200px;
}
</style>
