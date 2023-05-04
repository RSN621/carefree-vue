<template>
  <div style="padding: 0%; margin: 0%">
    <n-data-table :columns="columns" :data="tableData" :pagination="pagination" :row-props="rowProps" />
    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :x="x"
      :y="y"
      :options="options"
      :show="showDropdown"
      :on-clickoutside="onClickoutside"
      @select="handleSelect"
    />
  </div>
</template>
<script lang="ts">
import { h, nextTick, reactive, ref } from 'vue';
import { NImage, useMessage } from 'naive-ui';
import axios from 'axios';

const createColumns = () => {
  return [
    {
      type: 'selection',
      multiple: false
    },
    {
      title: '商品id',
      key: 'id'
    },
    {
      title: '商品名',
      key: 'name'
    },
    {
      title: '价格',
      key: 'price'
    },
    {
      title: '商品内容',
      key: 'description'
    },
    {
      title: '卖家id',
      key: 'seller_id'
    },
    {
      title: '商品图片',
      key: 'image_url',
      render(row: { image_url: any }) {
        const value = [];
        const imgs = h(NImage, {
          width: 80,
          objectFit: 'fill',
          style: 'margin-right:5px;',
          src: /image/ + row.image_url
        });
        value.push(imgs);
        return value;
      }
    }
  ];
};
export default {
  setup() {
    const message = useMessage();
    const showDropdownRef = ref(false);
    const xRef = ref(0);
    const yRef = ref(0);
    const paginationReactive = reactive({
      page: 1,
      pageSize: 5,
      showSizePicker: true,
      pageSizes: [3, 5, 7],
      onChange: (page: number) => {
        paginationReactive.page = page;
      },
      onUpdatePageSize: (pageSize: number) => {
        paginationReactive.pageSize = pageSize;
        paginationReactive.page = 1;
      }
    });
    return {
      pagination: paginationReactive,
      showDropdown: showDropdownRef,
      x: xRef,
      y: yRef,
      handleSelect() {
        showDropdownRef.value = false;
      },
      onClickoutside() {
        showDropdownRef.value = false;
      },
      rowProps: (row: any) => {
        return {
          onContextmenu: (e: { preventDefault: () => void; clientX: number; clientY: number }) => {
            message.info(JSON.stringify(row, null, 2));
            e.preventDefault();
            showDropdownRef.value = false;
            nextTick().then(() => {
              showDropdownRef.value = true;
              xRef.value = e.clientX;
              yRef.value = e.clientY;
            });
          }
        };
      },
      fetchData() {
        axios.get('/api/item/Select').then(resp => {
          this.tableData = resp.data;
        });
      }
    };
  },
  data() {
    return {
      columns: createColumns(),
      tableData: [{}],
      options: [
        {
          label: '编辑',
          key: 'edit'
        },
        {
          label: () => h('span', { style: { color: 'red' } }, '删除'),
          key: 'delete'
        }
      ]
    };
  },
  created() {
    axios.get('/api/item/Select').then(resp => {
      this.tableData = resp.data;
    });
  }
};
</script>
<style scoped></style>
