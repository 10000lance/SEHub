<template>
		<el-form :model="baseForm" :rules="baseFormRules" ref="baseForm">
			<el-form-item label="活动名称" prop="name" class="apy-item">
				<el-input v-model="baseForm.name" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="活动地点" prop="location" class="apy-item">
				<el-input v-model="baseForm.location" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="开始时间" prop="startTime" class="apy-item">
				<el-date-picker
					v-model="baseForm.startTime"
					type="datetime"
					placeholder="活动开始日期"
					value-format="yyyy-MM-dd"
					class="apy-input-normal"
				></el-date-picker>
				<!-- <el-row>
					<el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
					<span>&emsp;时间段&emsp;</span>
					<el-input v-model="applyForm.acttime_more" class="apy-input-mini"></el-input>
				</el-row>-->
			</el-form-item>

			<el-form-item label="结束时间" prop="endTime" class="apy-item">
				<el-date-picker
					v-model="baseForm.endTime"
					type="datetime"
					placeholder="活动结束日期"
					value-format="yyyy-MM-dd"
					class="apy-input-normal"
				></el-date-picker>
			</el-form-item>

			<el-form-item label="活动简介" prop="description" class="apy-item">
				<el-input
					type="textarea"
					rows="5"
					v-model="baseForm.description"
					resize="none"
					class="apy-text-normal"
				></el-input>
			</el-form-item>

		</el-form>
</template>

<script>
import { NEEDDECODEBASEFORM } from '../../../assets/js/decode.js';

export default {
	props: [
		'baseForm',
	],
	data (){
		return {
			baseFormRules: {
				name: [{ required: true, message: '请输入活动名称' }],
				location: [{ required: true, message: '请输入活动区域' }],
				startTime: [{ required: true, message: '请选择活动开始时间' }],
				endTime: [{ required: true, message: '请选择活动结束时间' }],
				description: [{ required: true, message: '请输入活动简介' }],
			},
		};
	},
	methods: {
		getPreviewForm () {
			var baseVaild = null;

			this.$refs.baseForm.validate((valid) => {
				baseVaild = valid;
			});

			if (baseVaild) {
				return {
					name: this.baseForm.name,
					location: this.baseForm.location,
					startTime: this.baseForm.startTime,
					endTime: this.baseForm.endTime,
					description: this.baseForm.description,
				};
			}
			else{
				this.$message.error("请正确填写表单");			
				return null;
			}
		},
		getSubmitForm () {
			var baseVaild = null;
			let formData = {};
			this.$refs.baseForm.validate((valid) => {
				baseVaild = valid;
			});

			if (baseVaild) {
				formData = {
					name: this.baseForm.name,
					location: this.baseForm.location,
					startTime: this.baseForm.startTime,
					endTime: this.baseForm.endTime,
					description: this.baseForm.description,
				};
				for (let key in formData){
					if (NEEDDECODEBASEFORM.indexOf(key) !== -1){
						formData[key] = encodeURI(formData[key]);
					}
				}
				return formData;
			}
			else{
				this.$message.error("请正确填写表单");			
				return null;
			}
		},

		clear (){
			this.$refs['baseForm'].resetFields();
		},

		setData (formData){
			this.applyForm = formData;
		},
	}
};
</script>
<style scoped lang="stylus" src="../../../assets/css/apply/form.styl"></style>
<style>
	
.apy-item .el-form-item__label{
	display: block;
	width: 20%;
}

@media screen and (max-width: 540px){
	.apy-item .el-form-item__label{
		text-align: left;
		width: 100%;
	}
}
</style>