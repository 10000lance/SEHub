<template>
		<el-form :model="baseForm" :rules="baseFormRules" ref="baseForm" label-width="95px">
			<el-form-item label="活动名称" prop="name">
				<el-input v-model="baseForm.name" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="活动地点" prop="address">
				<el-input v-model="baseForm.address" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="开始时间" prop="startTime">
				<el-date-picker
					v-model="baseForm.startTime"
					type="datetime"
					placeholder="活动开始日期"
					value-format="yyyy-MM-dd"
				></el-date-picker>
				<!-- <el-row>
					<el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
					<span>&emsp;时间段&emsp;</span>
					<el-input v-model="applyForm.acttime_more" class="apy-input-mini"></el-input>
				</el-row>-->
			</el-form-item>

			<el-form-item label="结束时间" prop="endTime">
				<el-date-picker
					v-model="baseForm.endTime"
					type="datetime"
					placeholder="活动结束日期"
					value-format="yyyy-MM-dd"
				></el-date-picker>
			</el-form-item>

			<el-form-item label="活动简介" prop="description">
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
export default {
	props: [
		'baseForm',
	],
	data (){
		return {
			baseFormRules: {
				name: [{ required: true, message: '请输入活动名称' }],
				address: [{ required: true, message: '请输入活动区域' }],
				startTime: [{ required: true, message: '请选择活动开始时间' }],
				endTime: [{ required: true, message: '请选择活动结束时间' }],
				description: [{ required: true, message: '请输入活动简介' }],
			},
		};
	},
	methods: {
		getSubmitForm () {
			var baseVaild = null;

			this.$refs.baseForm.validate((valid) => {
				baseVaild = valid;
			});

			if (baseVaild) {
				return {
					name: this.baseForm.name,
					address: this.baseForm.address,
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