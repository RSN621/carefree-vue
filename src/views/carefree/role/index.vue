<template>
  <div style="padding: 0%; margin: 0%">
    <n-data-table :columns="columns" :data="tableData" :pagination="pagination" />
  </div>
</template>

<script lang="ts">
import { h, reactive } from 'vue';
import { NButton } from 'naive-ui';
import axios from 'axios';
const createColumns = () => {
  return [
    {
      title: '角色id',
      key: 'id'
    },
    {
      title: '用户id',
      key: 'user_id'
    },
    {
      title: '角色名',
      key: 'user_role'
    },
    {
      title: '权限修改',
      key: 'actions',
      render(row: any) {
        return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => play(row)
          },
          { default: () => '修改权限' }
        );
      }
    }
  ];
};
export default {
  setup() {
    const paginationReactive = reactive({
      page: 1,
      pageSize: 10,
      showSizePicker: true,
      pageSizes: [5, 10, 15],
      onChange: (page: number) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize: number) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      }
    });
    return {
      pagination: paginationReactive
    };
  },
  data() {
    return {
      columns: createColumns(),
      tableData: [{}]
    };
  },
  created() {
    axios.get('/api/role/Select').then(resp => {
      this.tableData = resp.data;
    });
  }
};

function play(row: any): void {
  console.log(row);
}
</script>

<style scoped></style>
