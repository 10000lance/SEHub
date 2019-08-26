<template>
	<div>
		<!-- <simple-header title="学院活动"></simple-header> -->
		<el-tabs v-model="activeName" @tab-click="handleClick" :stretch="true">

			<el-tab-pane label="时间线" name="first">
				<div class="timelines-box">
					<el-timeline v-loading="loading">
						<el-timeline-item
							v-for="activity in activities"
							:timestamp="activity.checkInfo.submissionDate"
							placement="top"
							:type="checkStatusToColor(activity.checkInfo.checkStatus)"
							size="large"
						>
							<el-card class="card-box" shadow="hover">
								<div slot="header" class="clearfix card-box-head">
									<div class="card-title">
										<h4>
											<span>'{{activity.activityBasicInfo.name}}'</span>
											活动
										</h4>
										<p>
											<span>{{activity.checkInfo.initializer.name}}</span> 提交于 
											<span>{{activity.checkInfo.submissionDate}}</span>
										</p>
									</div>
								    <el-button  class="btn-go" type="text" @click="goActivity(activity.id)">前往>></el-button>
								</div>

								<div class="card-body">

								</div>
							</el-card>
						</el-timeline-item>

					</el-timeline>
				</div>
			</el-tab-pane>

			<el-tab-pane label="进行中" name="second">
				
			</el-tab-pane>

			<el-tab-pane label="筹备中" name="third">
				
			</el-tab-pane>

			<el-tab-pane label="历史活动" name="fourth">
				
			</el-tab-pane>
		</el-tabs>

<!-- 		<div class="option-box">
			<div :class="activeClass(1)" @click="handleOptionClick(1)">进行中</div>
			<div :class="activeClass(2)" @click="handleOptionClick(2)">筹备中</div>
			<div :class="activeClass(3)" @click="handleOptionClick(3)">时间线</div>
			<div :class="activeClass(4)" @click="handleOptionClick(4)">历史活动</div>
		</div>

		<div class="home-box">
			lance
			<div class="home--null-box">
				<div class="mag-glass-box">
					<div class="mag-null">NULL</div>
					<div class="mag-glass"></div>
				</div>
				<div class="home--null-tip">暂无活动</div>
			</div>
		</div>
 -->
	</div>
</template>
<script>
import { apiGetActivities } from '../../api/home.js';
export default {
	data () {
		return {
			activeName: 'first',
			loading: true,
			activities: [],

			// activeId: 1,
			// isShowGoing: true,
			// activities: {
			// 	ongoing: [],
			// 	preparing: [],
			// 	timelines: []
			// },
			// TestArr: []
		};
	},
	computed: {

	},
	methods: {
		// activeClass (id) {
		// 	if (this.activeId === id) {
		// 		return 'option-each option-active';
		// 	}
		// 	return 'option-each';
		// },
		// handleOptionClick (id) {
		// 	this.activeId = id;
		// }
		checkStatusToColor (checkStatus){
			switch (checkStatus){
				case 'WAIT':
					return 'warning';
				case 'PASS':
					return 'success';
				case 'NOPASS':
					return 'danger';
			}
		},
		handleClick (tab, event) {
			// console.log(tab, event);
		},
		goActivity (activityId){
			this.$router.push('/home/activity/' + activityId);
		},
	},
	beforeMount () {
		var that = this;
		apiGetActivities(res => {
			if (res.status === 200){
				this.activities = res.data;
				for (let activity of this.activities){
					activity.activityBasicInfo.name = decodeURI(activity.activityBasicInfo.name, 'utf-8');
					activity.checkInfo.initializer.name = decodeURI(activity.checkInfo.initializer.name, 'utf-8');
				}
				this.activities.sort(function(a, b){
					let date1 = a.checkInfo.submissionDate,
						date2 = b.checkInfo.submissionDate;
					date1 = date1.replace(/-/g,'');
					date2 = date2.replace(/-/g,'');
					// console.log(date1, date2);
					return date2 - date1;						
				});
				console.log(this.activities);
			}
			else{
				console.log("Failed to get activities");
			}
			this.loading = false;
			// that.activities.ongoing = res.ongoing;
			// that.activities.timelines = res.timelines;
		});
		// this.TestArr = that.activities.ongoing;
	}
};
</script>
<style lang="stylus" scoped src="../../assets/css/home/home.styl"></style>
<style lang="stylus">
.timelines-box{
	width: 95%;
	margin: auto;
}

.card-box-head{
	position: relative;
}

.card-title {
	float: left;
	margin-bottom: 16px;
	h4 {
	    font-weight: 400;
	    color: #1f2f3d;
	    margin: 1.33em 0;
	    font-size: 18px;
	}
	
	p {
	    font-size: 14px;
	    color: #5e6d82;
	    line-height: 1.5em;
	}
}


@media screen and (min-width: 460px){
	.btn-go{
	    position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	    right: 15px;
	}
}

.btn-go{
    font-size: 24px;
    display: block;
    text-align: right;
    width: 100%;
    // position: absolute;
    // top: 50%;
    // transform: translateY(-50%);
    // right: 15px;
}

.clearfix:after{
	content: '\20';
	display: block;
	height: 0;
	clear: both;
	visibility: hidden;
	overflow: hidden;
}
</style>