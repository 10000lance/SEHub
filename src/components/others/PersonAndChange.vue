<template>
	<div>
        <div class="box-content">
<!--         	<transition v-if="!showChangeForm" name="el-fade-in">
	        	<person-info :personInfo="personInfo"></person-info>
	        </transition>
 -->
 	        <transition name="el-fade-in">
	        	<change-form :personInfo="personInfo" ref="personInfoForm" style="margin-top: 12px"></change-form>
	        </transition>
        </div>

<!--         <transition v-if="!showChangeForm" name="el-fade-in">
			<el-button type="primary" class="change-btn" @click="showChange">编辑</el-button>
		</transition>
 -->
		<transition name="el-fade-in">
			<div class="btn-group">
				<el-button class="btn" type="primary" @click="postChange">提交修改</el-button>
				<!-- <el-button class="btn" @click="hideChange">取消</el-button> -->
			</div>
		</transition>
	</div>

</template>
<script type="text/javascript">
// import PersonInfo from './PersonInfo.vue';
import ChangeForm from './ChangeForm.vue';
import { apiPutMember } from '../../api/department.js';

export default {
	props: [
		'personInfo',
	],
	components: {
		// 'person-info': PersonInfo,
		'change-form': ChangeForm,
	},
	data (){
		return {
			showChangeForm: false,
		};
	},
	// computed: {
	// 	personInfo (){
	// 		return this.$store.state.userInfo;
	// 	}
	// },
	methods: {
		showChange (){
			this.showChangeForm = true;
		},
		hideChange (){
			this.showChangeForm = false;
		},

		postChange (){
			let changeData = this.$refs['personInfoForm'].getChangeData();
			apiPutMember(changeData, res => {
				if (res.status === 200){
					this.personInfo = changeData;
					this.$message.success('提交成功');
				}
				else{
					console.log("Failed to change personInfo");
				}
			});
		},
	},
};
</script>
<style lang="stylus">
.change-btn
	margin: 30px auto;
	display: block;
	width: 150px;
	@media screen and (max-width: 400px){
		width: 80%;
	}

.btn-group
	margin: auto;
	display: block;
	text-align: center;
	
	.btn
		margin: 15px;
		width: 150px;
		@media screen and (max-width: 400px){
			width: 80%;
		}
</style>