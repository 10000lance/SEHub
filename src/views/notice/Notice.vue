<template>
	<div>
		<!-- <simple-header title="部门通知"></simple-header> -->
		<div class="notice-container">
			<!-- 待处理 -->
			<div class="notice-box-wait">
 				<!-- <div class="notice--wait-title">待处理</div> -->
				<div class="notice--wait-content">
					<div v-if="isWaitArrNull" class="notice-null-box">
						<div class="null-box">NULL</div>
						<div class="text-box">暂无通知</div>
					</div>
					<div v-else>
						<el-table
							:data="waitArr"
							@row-click="clickItem"
							highlight-current-row
							v-loading="loading"
						>
							<el-table-column
								prop="departAndName"
								label="未处理"
								style="font-weight: bolder"
							></el-table-column>
<!-- 							<el-table-column
								prop="checkInfo.initializer.name"
							></el-table-column>
 -->							<el-table-column
								prop="activityBasicInfo.name"
							></el-table-column>
							<el-table-column
								prop="checkInfo.submissionDate"
							></el-table-column>
						</el-table>
					</div>
				</div>
			</div>


			<el-divider></el-divider>
			<!-- 已处理 -->
			<div class="notice-box-solved">
				<!-- <div class="notice--solved-title">已处理</div> -->
				<div class="notice--solved-content">
					<div v-if="isSolvedArrNull" class="notice-null-box">
						<div class="null-box">NUll</div>
						<div class="text-box">暂无通知</div>
					</div>
					<div v-else>
						<el-table
							:data="solvedArr"
							@row-click="clickItem"
							highlight-current-row
							v-loading="loading"
						>
							<el-table-column
								prop="departAndName"
								label="已处理"
							></el-table-column>
							<el-table-column
								prop="activityBasicInfo.name"
							></el-table-column>
							<el-table-column
								prop="checkInfo.submissionDate"
							></el-table-column>
						</el-table>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
import { apiGetNotices } from '../../api/notice.js';
import { DEPARTMENT } from '../../assets/js/keyToName.js';

export default {
	data () {
		return {
			loading: true,
			waitArr: [],
			solvedArr: [],
		};
	},
	computed: {
		isWaitArrNull: function (){
			return this.waitArr.length === 0;
		},
		isSolvedArrNull: function (){
			return this.solvedArr.length === 0;
		},
	},
	methods: {
		clickItem (row) {
			// console.log(row.id);
			this.$router.push('/notice/' + row.type + '/' + row.id);
		},
		keyToName (key){
			return DEPARTMENT[key];
		},
	},

	//获取数据
	beforeMount () {
		apiGetNotices(res => {
			// console.log(res);
			if (res.status === 200){
				let data = res.data;
			//填充waitArr和solvedArr
				for (let form of data){
					form.departAndName = this.keyToName(form.checkInfo.initializer.department) + "	" + form.checkInfo.initializer.name;
					let checkStatus = form.checkInfo.checkStatus;
					// console.log('checkStatus: ', checkStatus);
					if (checkStatus === 'checking'){
						this.waitArr.push(form);
					}
					else if(checkStatus === 'passed' || checkStatus === 'nopassed'){
						this.solvedArr.push(form);
					}	
				}
				// for (let type of ['etiquette', 'host', 'lectureTicket', 'poster']){
				// 	if (data.hasOwnProperty(type) && data[type] instanceof Array){
				// 		for (let form of data[type]){
				// 			form.type = type;
				// 			form.departAndName = form.checkInfo.initializer.department + "	" + form.checkInfo.initializer.name;
				// 			let checkStatus = form.checkInfo.checkStatus;
				// 			if (checkStatus === 'checking'){
				// 				this.waitArr.push(form);
				// 			}
				// 			else if(checkStatus === 'passed' || checkStatus === 'nopassed'){
				// 				this.solvedArr.push(form);
				// 			}
				// 		}	
				// 	}
				// }
			//对两个列表从submissionDate上排序
				for (let arr of [this.waitArr, this.solvedArr]){
					arr.sort(function(a, b){
						let date1 = a.checkInfo.submissionDate,
							date2 = b.checkInfo.submissionDate;
						date1 = date1.replace(/-/g,'');
						date2 = date2.replace(/-/g,'');
						// console.log(date1, date2);
						return date2 - date1;						
					});
				}
				// console.log('waitArr: ', this.waitArr);
				// console.log('solvedArr: ', this.solvedArr);
			}
			else{
				console.log('Failed to get notices');
			}
			this.loading = false;
		});
	}
};
</script>
<style lang="stylus" scoped src='../../assets/css/notice/notice.styl'></style>
