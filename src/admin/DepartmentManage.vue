<template>
	<div>
	<div class="apply-box">
		<div v-for="department in departments" class="each-box" @click="handleClick(department)">
		<div class="each-img">{{keyToName(department)}}</div>
		<div class="each-title">{{keyToName(department)}}</div>
		</div>
		<div class="each-box-ph">
		<div class="each-img">
			<i class="el-icon-more"></i>
		</div>
		<div class="each-title">
			<i class="el-icon-more"></i>
		</div>
		</div>
	</div>
	</div>
</template>

<script>
import { apiAdminGetDeaprtments } from '../api/admin.js';
import { DEPARTMENT } from '../assets/js/keyToName.js';

export default {
	data () {
		return {
			departments: [
				// {
				// 	name: '',
				// 	path: '/admin/department-manage'
				// },
				// {
				// 	name: '礼仪申请',
				// 	path: '/apply/etiquette'
				// 	},
				// 	{
				// 	name: '主持人申请',
				// 	path: '/apply/host'
				// 	},
				// // 	{
				// 	// name: '新媒体申请',
				// 	// path: '/apply/newmedia'
				// // 	},
				// // 	{
				// 	// name: '记者团申请',
				// 	// path: '/apply/reporter'
				// // 	},
				// 	{
				// 	name: '宣传物资申请',
				// 	path: '/apply/poster'
				// 	},
				// // 	{
				// 	// name: '秘书物资申请',
				// 	// path: '/apply/material'
				// // 	},
				// 	{
				// 	name: '讲座票申请',
				// 	path: '/apply/lectureTicket'
				// }
			]
		};
	},
	methods: {
		handleClick (department) {
			this.$router.push('/admin/department-manage/' + department);
		},
		keyToName (key){
			return DEPARTMENT[key];
		}
	},
	beforeMount (){
		apiAdminGetDeaprtments(res => {
			if (res.status === 200){
				let departmentList = res.data;
				this.departments = departmentList;
				console.log(this.departments);
				// for (let department of departmentList){
				// 	this.departments.push(department);
				// }
			}
			else {
				console.log("Failed to get departments");
			}
		});
	},

};
</script>
<style lang="stylus" scoped src="../assets/css/apply/apply.styl"></style>
