<!--记者团申请-->
<template>
	<div>
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

		<el-form :model="applyForm" :rules="rules" ref="applyForm" label-width="95px">
			<el-form-item label="活动时间" prop="actTime">
				<el-date-picker v-model="applyForm.actTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			
			<el-form-item label="申请项目" prop="reporterJobs">
				<el-checkbox-group v-model="applyForm.reporterJobs">
					<el-checkbox label="新闻稿">新闻稿</el-checkbox>
					<el-checkbox label="拍照">拍照</el-checkbox>
					<el-checkbox label="录像">录像</el-checkbox>
					<el-checkbox label="其他">其他</el-checkbox>
				</el-checkbox-group>
			</el-form-item>

			<el-form-item label="特定要求">
				<el-input
					type="textarea"
					rows="5"
					v-model="applyForm.reporterNote"
					resize="none"
					class="apy-text-normal"
					placeholder="请先阅读注意事项中标红的部分！！"
				></el-input>
			</el-form-item>
			
			<el-form-item label="上传附件">
				<se-upload></se-upload>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
	props: ['base'],
	data () {
		return {
			baseForm: this.base,
			applyForm: {
				actTime: '2019-10-1',
				reporterJobs: ['拍照'],
				reporterNote: ''
			},
			rules: {
				actTime: [{ required: true, message: '请选择活动日期' }],
				reporterJobs: [{ required: true, message: '请选择申请项目' }]
			},
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
			var baseVaild = null,
				applyVaild = null;
			this.$refs.baseForm.validate((valid) => {
				baseVaild = valid;
			});
			this.$refs.applyForm.validate((valid) => {
				applyVaild = valid;
			});
			if (baseVaild && applyVaild) {
				return {
					actTime: new Date(this.applyForm.acttime),
					reporterJobs: this.applyForm.reporterJobs.join('；'),
					reporterNote: this.applyForm.reporterNote,
				};
			}
			else{
				this.$message.error("请正确输入记者团申请表");
				return null;
			}
		},
		// getPreviewForm () {
		// 	var previewObj = {
		// 		title: '记者团申请',
		// 		content: {
		// 			postname: this.$store.state.user.name,
		// 			postdapart: this.$store.state.user.depart,
		// 			posttime: new Date().toLocaleString(),
		// 			actname: this.applyForm.actname,
		// 			actaddr: this.applyForm.actaddr,
		// 			acttime: this.applyForm.acttime,
		// 			repddl: this.applyForm.repddl,
		// 			repwork: this.applyForm.repwork.join('；'),
		// 			repothers: this.applyForm.repothers
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
