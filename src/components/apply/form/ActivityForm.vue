<template>
	<div>
		<el-form :model="applyForm" :rules="rules" ref="applyForm">
			<el-form-item label="活动背景" prop="background" class="apy-item">
				<el-input
					type="textarea"
					rows="5"
					v-model="applyForm.background"
					resize="none"
					class="apy-text-normal"
				></el-input>
			</el-form-item>

			<el-form-item label="主办单位" prop="hostUnit" class="apy-item">
				<el-input v-model="applyForm.hostUnit" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="承办单位" prop="organizer" class="apy-item">
				<el-input v-model="applyForm.organizer" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="面向对象" prop="objective" class="apy-item">
				<el-input v-model="applyForm.objective" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label='参与人数' prop='expectedNumOfParticipants' class="apy-item">
				<el-input v-model="applyForm.expectedNumOfParticipants" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="备注" prop="note" class="apy-item">
				<el-input
					type="textarea"
					rows="5"
					v-model="applyForm.note"
					resize="none"
					class="apy-text-normal"
				></el-input>
			</el-form-item>

			<el-form-item label="上传附件" class="apy-item">
				<se-upload class="apy-text-normal"></se-upload>
			</el-form-item>

		</el-form>
	</div>
</template>

<script>
export default {
	// name : 'activityTable',
	props: [
		'base',
	],
	data () {
		return {
			baseForm: this.base,
			applyForm: {
				background: '',	//活动背景
				// aim: '',	//活动目的
				hostUnit: '',	//主办方
				organizer: '',	//承办方
				objective: '',	//受众
				expectedNumOfParticipants: '',	//预计参与人数
				note: '',
			},
			rules: {
				background: [{ required: true, message: '请输入活动背景' }],
				// aim: [{ required: true, message: '请输入活动目的' }],
				objective: [{ required: true, message: '请输入活动对象' }],
				hostUnit: [{ required: true, message: '请输入活动主办单位' }],
				organizer: [{ required: true, message: '请输入活动承办单位' }],
				expectedNumOfParticipants: [{ required: true, message: '请输入活动参与人数'}],
			},
		};
	},
	// 每一个Form组件都要重载getSubmitForm和clear方法
	methods: {
		getSubmitForm () {
			var applyVaild = null;

			this.$refs.applyForm.validate((valid) => {
				applyVaild = valid;
			});
			if (applyVaild) {
				return {
					background: this.applyForm.background,
					// aim: this.applyForm.aim,
					hostUnit: this.applyForm.hostUnit,
					organizer: this.applyForm.organizer,
					objective: this.applyForm.objective,
					expectedNumOfParticipants: this.applyForm.expectedNumOfParticipants,
					note: this.applyForm.note,
				};
			}
			else{
				this.$message.error("请正确填写活动申请表");			
				return null;
			}
		},
		// getPreviewForm () {
		// 	var previewObj = null;
		// 	this.$refs['applyForm'].validate((valid) => {
		// 		if (valid) {
		// 			previewObj = { title: '活动申请', content: {} };
		// 			previewObj.content.postname = this.$store.state.user.name;
		// 			previewObj.content.postdapart = this.$store.state.user.depart;
		// 			previewObj.content.posttime = new Date().toLocaleString();
		// 			previewObj.content.actname = this.applyForm.actname;
		// 			previewObj.content.address = this.applyForm.address;
		// 			previewObj.content.acttime = this.applyForm.acttime + ' ' + this.applyForm.acttime_more;
		// 			previewObj.content.background = this.applyForm.background;
		// 			previewObj.content.aim = this.applyForm.aim;
		// 			previewObj.content.description = this.applyForm.description;
		// 			previewObj.content.hostUnit = this.applyForm.hostUnit;
		// 			previewObj.content.organizer = this.applyForm.organizer;
		// 			previewObj.content.objective = this.applyForm.objective;
		// 		}
		// 	});
		// 	return previewObj;
		// },
		clear (){
			this.$refs['applyForm'].resetFields();
		},

		setData (formData){
			this.applyForm = formData;
		},
	}
};
</script>

<style scoped lang="stylus" src="../../../assets/css/apply/form.styl"></style>