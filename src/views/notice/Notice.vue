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
							<div class="notice---from">{{item.fromDepart}}&ensp;{{item.fromName}}</div>
							<div class="notice---title">{{item.title}}</div>
							<div class="notice---time">{{item.time}}</div>
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
							<div class="notice---from">{{item.fromDepart}}&ensp;{{item.fromName}}</div>
							<div class="notice---title">{{item.title}}</div>
							<!-- <div class="notice---state">{{item.state}}</div> -->
							<div class="notice---time">{{item.time}}</div>
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
			console.log(item.id);
			this.$router.push('/notice/detail/' + item.id);
		}
	},
	//获取数据
	beforeMount () {
		let arr = apiGetNotices();
		console.log(arr);
		arr.forEach( (value) => {
			//state为1表示已处理，为0表示未处理
			value.state === 1 && this.solvedArr.push(value);
			value.state === 0 && this.waitArr.push(value);
		});
	}
};
</script>
<style lang="stylus" scoped src='../../assets/css/notice/notice.styl'></style>
