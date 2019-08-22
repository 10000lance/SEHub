<template>
	<div :class="this.checkStatus">
 		<form-table :detailData="detailData"></form-table>

		<div class="feedback-cnt">
			<div class="feedback-input">
				<div class="feedback-label">
					<span>*</span>审核反馈
				</div>
				<el-input v-model="checkFeedback" rows="4" resize="none" type="textarea" placeholder="请输入审核反馈信息"></el-input>
			</div>
			<div class="feedback-btn" v-if="check">
				<div id="btn1">
					<el-button type="success" round plain @click="checkPass">通过</el-button>
				</div>
				<div id="btn2">
					<el-button type="danger" round plain @click="checkReject">拒绝</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from 'axios';
import { apiGetDetail } from '../../api/notice.js';
import Table from '../../components/Table.vue';
import { checkForm } from '../../api/notice.js';

export default {
	components: {
		'form-table': Table,
	},
	data () {
		return {
			detailData: {},
			checkStatus: '',
			checkFeedback: ''
		};
	},
	methods: {
		previewSubmit () {
			this.$emit('preview_submit');
		},
		checkPass () {
			let checkInfo = {
				id: this.$route.params.id,
				pass: true,
				feedback: this.checkFeedback,
			},
			formType =	this.detailData.type;
			checkForm(formType, checkInfo, (res) => {
				if (res.status === 200){
					this.checkStatus = 'passed';
					this.$message.success('提交成功');
				}
				else {
					this.$message.error('提交失败');
				}
			});
		},
		checkReject () {
			let checkInfo = {
				id: this.$route.params.id,
				pass: false,
				feedback: this.checkFeedback,
			},
			formType =	this.detailData.type; 
			checkForm(formType, checkInfo, (res) => {
				if (res.status === 200){
					this.checkStatus = 'nopassed';
					this.$message.success('提交成功');
				}
				else {
					this.$message.error('提交失败');
				}
			});
		}
	},

	computed: {
		check (){
			return this.checkStatus === 'checking';
		},
	},

	//获取数据
	beforeMount (){
		let notices = this.$store.state.notices;

		for (let arr of [notices.waitArr, notices.solvedArr]){
			// console.log('arr', arr);
			for (let form of arr){
				if (form.id == this.$route.params.id){
					for (let key in form.activityBasicInfo){
						if (form.activityBasicInfo.hasOwnProperty(key)){
							this.detailData[key] = form.activityBasicInfo[key];
						}
					}
					for (let key in form){
						if (form.hasOwnProperty(key)){
							this.detailData[key] = form[key];
						}
					}
					this.checkStatus = form.checkInfo.checkStatus;
					this.checkFeedback = form.checkInfo.checkFeedback ? form.checkInfo.checkFeedback : '';
					return;
				}
			}
		}
	},
};
</script>
<style lang="stylus" scoped src="../../assets/css/notice/detail.styl"></style>
<style>
.passed {
	background: url('../../../public/passed.svg') top right no-repeat;
}

.nopassed {
	background: url('../../../public/nopassed.svg') top right no-repeat;
}
</style>
