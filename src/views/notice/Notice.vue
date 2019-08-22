<template>
	<div>
		<!-- <simple-header title="部门通知"></simple-header> -->
		<div class="notice-container">
			<!-- 待处理 -->
			<div class="notice-box-wait">
				<div class="notice--wait-title">待处理</div>
				<div class="notice--wait-content">
					<div v-if="isWaitArrNull" class="notice-null-box">
						<div class="null-box">NULL</div>
						<div class="text-box">暂无通知</div>
					</div>
					<div v-else>
						<div
							class="notice--wait-each"
							v-for="(item, idx) in waitArr"
							:key="idx"
							@click="clickItem(item)"
						>
							<div class="notice---from">{{item.checkInfo.initializer.department}}&ensp;{{item.checkInfo.initializer.name}}</div>
							<div class="notice---title">{{item.activityBasicInfo.name}}</div>
							<div class="notice---time">{{item.checkInfo.submissionDate}}</div>
						</div>
					</div>
				</div>
			</div>
			<el-divider></el-divider>
			<!-- 已处理 -->
			<div class="notice-box-solved">
				<div class="notice--solved-title">已处理</div>
				<div class="notice--solved-content">
					<div v-if="isSolvedArrNull" class="notice-null-box">
						<div class="null-box">NUll</div>
						<div class="text-box">暂无通知</div>
					</div>
					<div v-else>
						<div
							class="notice--solved-each"
							v-for="(item, idx) in solvedArr"
							:key="idx"
							@click="clickItem(item)"
						>
							<div class="notice---from">{{item.checkInfo.initializer.department}}&ensp;{{item.checkInfo.initializer.name}}</div>
							<div class="notice---title">{{item.activityBasicInfo.name}}</div>
							<div class="notice---time">{{item.checkInfo.submissionDate}}</div>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>
<script>
import { apiGetNotices } from '../../api/notice.js';

export default {
	data () {
		return {
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
		clickItem (item) {
			// console.log(item.id);
			this.$router.push('/notice/detail/' + item.id);
		},
	},

	//销毁组件时，删除缓存notices
	destroyed (){
		this.$store.commit('saveNotices', [], []);
	},

	//获取数据
	beforeMount () {
		apiGetNotices(res => {
			// console.log(res);
			if (res.status === 200){
				let data = res.data;
			//填充waitArr和solvedArr
				for (let type of ['etiquette', 'host', 'lectureTicket', 'poster']){
					if (data.hasOwnProperty(type) && data[type] instanceof Array){
						for (let form of data[type]){
							form.type = type;
							let checkStatus = form.checkInfo.checkStatus;
							if (checkStatus === 'checking'){
								this.waitArr.push(form);
							}
							else if(checkStatus === 'passed' || checkStatus === 'nopassed'){
								this.solvedArr.push(form);
							}
						}	
					}
				}
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
			//缓存notices
				this.$store.commit('saveNotices',{waitArr: this.waitArr, solvedArr: this.solvedArr});
				// console.log('after', this.$store.state);
			}
			else{
				console.log('Failed to get notices');
			}
		});
	}
};
</script>
<style lang="stylus" scoped src='../../assets/css/notice/notice.styl'></style>
