<template>
	<div>
		<el-form :model="applyForm" :rules="rules" ref="applyForm">
<!-- 			<el-form-item label="活动时间" prop="actTime">
				<el-date-picker v-model="applyForm.actTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
 -->
			<el-form-item label="分数类型" prop="ticketType" class="apy-item">
				<el-input v-model="applyForm.ticketType" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="分值" prop="ticketScore" class="apy-item">
				<el-input v-model="applyForm.ticketScore" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="申请数量" prop="numOfTicket" class="apy-item">
				<el-input v-model.number="applyForm.numOfTicket" class="apy-input-normal"></el-input>
			</el-form-item>

			<el-form-item label="备注" class="apy-item">
				<el-input
					type="textarea"
					rows="5"
					v-model="applyForm.note"
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

export default {
	data () {
		return {
			applyForm: {
				ticketType: '创新分',
				ticketScore: 2,
				numOfTicket: '',
				note: ''
			},
			rules: {
				ticketType: [{ required: true, message: '请输入讲座票类型' }],
				ticketScore: [{ required: true, message: '请输入申请人数' }, { type: 'number', message: '请输入数字' }],
				numOfTicket: [{ required: true, message: '请输入申请数量' }],
			},
		};
	},
	methods: {
		getSubmitForm () {
			var applyVaild = null;

			this.$refs.applyForm.validate((valid) => {
				applyVaild = valid;
			});
			if (applyVaild) {
				return {
					ticketType: this.applyForm.ticketType,
					ticketScore: this.applyForm.ticketScore,
					numOfTicket: this.applyForm.numOfTicket,
					note: this.applyForm.note,
				};
			}
			else{
				this.$message.error("请正确输入讲座票申请表");
				return null;
			}
		},
		// getPreviewForm () {
		// 	var previewObj = {
		// 		title: '讲座票申请',
		// 		content: {
		// 			postname: this.$store.state.user.name,
		// 			postdapart: this.$store.state.user.depart,
		// 			posttime: new Date().toLocaleString(),
		// 			actname: this.applyForm.actname,
		// 			actaddr: this.applyForm.actaddr,
		// 			acttime: this.applyForm.acttime,
		// 			tickType: this.applyForm.tickType,
		// 			tickScore: this.applyForm.tickScore,
		// 			note: this.applyForm.note
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
<style lang="stylus" scoped></style>
