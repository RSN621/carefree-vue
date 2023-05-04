<template>
	<div style="padding: 0%;margin: 0%">
		<n-data-table :columns="columns" :data="tableData" :pagination="pagination"/>
	</div>
</template>

<script lang="ts">
import axios from "axios";
import {reactive} from "vue";
const createColumns = () =>{
	return [
		{
			title: 'id',
			key: 'id'
		},
		{
			title: '姓名',
			key: 'name'
		},
		{
			title: '学号',
			key: 'student_id'
		},
		{
			title: '手机号',
			key: 'phone'
		},
		{
			title: '邮箱',
			key: 'email'
		},
		{
			title: '密码',
			key: 'password'
		},
		{
			title: '身份证号',
			key: 'identity_card'
		},
		{
			title: '信用评分',
			key: 'credit_score'
		},
		{
			title: '盐值',
			key: 'salt',
		},
	]
};
export default {
	data() {
		return {
			columns: createColumns(),
			tableData:[{}]
		};
	},
	created() {
		axios.get('/api/user/Select').then(resp => {
			this.tableData=resp.data;
		});
	},
	setup(){
		const paginationReactive = reactive({
			page: 1,
			pageSize: 10,
			showSizePicker: true,
			pageSizes: [5,10,15],
			onChange: (page: number) => {
				paginationReactive.page = page
			},
			onUpdatePageSize: (pageSize: number) => {
				paginationReactive.pageSize = pageSize
				paginationReactive.page = 1
			}
		})
		return {
			pagination: paginationReactive
		}
	}
};


</script>

<style scoped>

</style>

