<template>
	<div>
		<el-form :model="applyForm" :rules="rules" ref="applyForm">
			<el-form-item label="申请人数" prop="numOfEtiquette" class="apy-item">
				<el-input v-model.number="applyForm.numOfEtiquette" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="彩排时间" prop="rehearsalTime" class="apy-item">
				<el-date-picker
					v-model="applyForm.rehearsalTime"
					type="datetime"
					placeholder="活动结束日期"
					value-format="yyyy-MM-dd"
				></el-date-picker>
			</el-form-item>

			<el-form-item label="彩排地点" prop="rehearsalSite" class="apy-item">
				<el-input v-model="applyForm.rehearsalSite" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="礼仪工作" prop="etiquetteJobs" class="apy-item">
<!-- 				<el-checkbox-group v-model="applyForm.etiquetteJobs">
					<el-checkbox label="颁奖">颁奖</el-checkbox>
					<el-checkbox label="引导">引导</el-checkbox>
					<el-checkbox label="迎宾签到">迎宾签到</el-checkbox>
					<el-checkbox label="其他">其他</el-checkbox>
				</el-checkbox-group>
 -->
 				<el-input v-model="applyForm.etiquetteJobs" class="apy-input-normal"></el-input>
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
import { NEEDDECODEETIQUETTEFORM } from '../../../assets/js/decode.js';

export default {
	// name : 'etiquetteTable',
	data () {	
		return {
			applyForm: {
				numOfEtiquette: '',			//申请人数
				etiquetteJobs: '',		//礼仪工作
				rehearsalTime: '',	//彩排时间
				rehearsalSite: '',	//彩排地点
				descOfJob: '',	//工作描述
			},

			rules: {
				numOfEtiquette: [{ required: true, message: '请输入申请人数' }, { type: 'number', message: '请输入数字' }],
				etiquetteJobs: [{ required: true, message: '请选择礼仪工作' }],
				rehearsalTime: [{ required: true, message: '请输入彩排时间' }],
				rehearsalSite: [{ required: true, message: '请输入彩排地点' }],
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
					numOfEtiquette: this.applyForm.numOfEtiquette,
					etiquetteJobs: this.applyForm.etiquetteJobs,
					rehearsalTime: this.applyForm.rehearsalTime,
					rehearsalSite: this.applyForm.rehearsalSite,
					descOfJob: this.applyForm.descOfJob,
				};
			}
			else{
				this.$message.error("请正确输入礼仪申请表");
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
					numOfEtiquette: this.applyForm.numOfEtiquette,
					etiquetteJobs: this.applyForm.etiquetteJobs,
					rehearsalTime: this.applyForm.rehearsalTime,
					rehearsalSite: this.applyForm.rehearsalSite,
					descOfJob: this.applyForm.descOfJob,
				};
				for (let key in formData){
					if (NEEDDECODEETIQUETTEFORM.indexOf(key) !== -1){
						formData[key] = encodeURI(formData[key]);
					}
				}
				return formData;
			}
			else{
				this.$message.error("请正确输入礼仪申请表");
				return null;
			}
		},
		// getPreviewForm () {
		// 	var previewObj = null
		// 	this.$refs.applyForm.validate((valid) => {
		// 		if (valid) {
		// 			previewObj = { title: '礼仪队申请', content: {} }
		// 			previewObj.content.postname = this.$store.state.user.name
		// 			previewObj.content.postdapart = this.$store.state.user.depart
		// 			previewObj.content.posttime = new Date().toLocaleString()
		// 			previewObj.content.actname = this.applyForm.actname
		// 			previewObj.content.actaddr = this.applyForm.actaddr
		// 			previewObj.content.acttime = this.applyForm.acttime
		// 			previewObj.content.etinum = this.applyForm.etinum + '人'
		// 			previewObj.content.etiwork = this.applyForm.etiwork.join('；')
		// 			previewObj.content.others = this.applyForm.others
		// 		}
		// 	});
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
