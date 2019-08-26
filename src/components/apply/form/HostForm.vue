<!--主持人申请-->
<template>
	<div>
		<el-form :model="applyForm" :rules="rules" ref="applyForm">
			<el-form-item label="申请人数" prop="numOfHost" class="apy-item">
				<el-input v-model.number="applyForm.numOfHost" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="彩排时间" prop="rehearsalTime" class="apy-item">
				<el-date-picker v-model="applyForm.rehearsalTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>

			<el-form-item label="彩排地点" prop="rehearsalSite" class="apy-item">
				<el-input v-model="applyForm.rehearsalSite" class="apy-input-normal"></el-input>
			</el-form-item>
			
			<el-form-item label="工作描述" class="apy-item">
				<el-input
					type="textarea"
					rows="5"
					v-model="applyForm.descOfJob"
					resize="none"
					class="apy-text-normal"
				></el-input>
			</el-form-item>

			<el-form-item label="上传附件" class="apy-item">
				<se-upload></se-upload>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import { NEEDDECODEHOSTFORM } from '../../../assets/js/decode.js';

export default {
	data () {
		return {
			applyForm: {
				rehearsalTime: '2019-10-2', // 彩排时间
				rehearsalSite: '',
				numOfHost: 3,
				descOfJob: ''
			},
			rules: {
				rehearsalTime: [{ required: true, message: '请选择彩排时间' }],
				rehearsalSite: [{ required: true, message: '请输入彩排地点'}],
				numOfHost: [{ required: true, message: '请输入申请人数' }, { type: 'number', message: '请输入数字' }],
			},
		};
	},
	methods: {
		getPreviewForm () {
			var applyVaild = null;

			this.$refs.applyForm.validate((valid) => {
				applyVaild = valid;
			});
			if (applyVaild) {
				return {
					rehearsalTime: this.applyForm.rehearsalTime,
					rehearsalSite: this.applyForm.rehearsalSite,
					numOfHost: this.applyForm.numOfHost,
					descOfJob: this.applyForm.descOfJob,
				};
			}
			else{
				this.$message.error("请正确输入主持人申请表");
				return null;
			}
		},
		getSubmitForm () {
			var applyVaild = null;
			let formData = {};
			this.$refs.applyForm.validate((valid) => {
				applyVaild = valid;
			});
			if (applyVaild) {
				formData = {
					rehearsalTime: this.applyForm.rehearsalTime,
					rehearsalSite: this.applyForm.rehearsalSite,
					numOfHost: this.applyForm.numOfHost,
					descOfJob: this.applyForm.descOfJob,
				};
				for (let key in formData){
					if (NEEDDECODEHOSTFORM.indexOf(key) !== -1){
						formData[key] = encodeURI(formData[key]);
					}
				}
				return formData;
			}
			else{
				this.$message.error("请正确输入主持人申请表");
				return null;
			}
		},

		// getPreviewForm () {
		// 	var previewObj = {
		// 		title: '主持人申请',
		// 		content: {
		// 			postname: this.$store.state.user.name,
		// 			postdapart: this.$store.state.user.depart,
		// 			posttime: new Date().toLocaleString(),
		// 			actname: this.applyForm.actname,
		// 			actaddr: this.applyForm.actaddr,
		// 			acttime: this.applyForm.acttime,
		// 			rehtime: this.applyForm.rehtime,
		// 			number: this.applyForm.number,
		// 			others: this.applyForm.others
		// 		}
		// 	};
		// 	return previewObj;
		// },
		clear () {
			this.$refs['applyForm'].resetFields();
		},

		setData (formData){
			this.applyForm = formData;
		},
	}
};
</script>

<style scoped lang="stylus" src="../../../assets/css/apply/form.styl"></style>
