<template>
	<div>
		<el-form :model="baseForm" :rules="baseFormRules" ref="baseForm" label-width="95px">
			<el-form-item label="活动名称" prop="actname">
				<el-input v-model="baseForm.actname" class="apy-input-normal"></el-input>
			</el-form-item>
			<el-form-item label="活动地点" prop="actaddr">
				<el-input v-model="baseForm.actaddr" class="apy-input-normal"></el-input>
			</el-form-item>
		</el-form>

		<el-form v-model="applyForm" :rules="rules" ref="applyForm" label-width="95px">
			<el-form-item label="活动时间">
				<el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			<el-form-item label="分数类型">
				<el-input v-model="applyForm.tiktype" class="apy-input-normal"></el-input>
			</el-form-item>
			<el-form-item label="分值">
				<el-input v-model="applyForm.tikscore" class="apy-input-normal"></el-input>
			</el-form-item>
			<el-form-item label="备注">
				<el-input
					type="textarea"
					rows="5"
					v-model="applyForm.others"
					resize="none"
					class="apy-text-normal"
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
				acttime: '',
				tiktype: '',
				tikscore: '',
				others: ''
			},
			rules: {},
			baseFormRules: {},
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
					type: 'ticket',
					actname: this.baseForm.actname,
					actaddr: this.baseForm.actaddr,
					acttime: this.applyForm.acttime,
					tiktype: this.applyForm.tiktype,
					tikscore: this.applyForm.tikscore,
					others: this.applyForm.others
				};
			}
			else{
				this.$message.error("请正确输入讲座票申请表");
				return null;
			}
		},
		getPreviewForm () {
			var previewObj = {
				title: '讲座票申请',
				content: {
					postname: this.$store.state.user.name,
					postdapart: this.$store.state.user.depart,
					posttime: new Date().toLocaleString(),
					actname: this.applyForm.actname,
					actaddr: this.applyForm.actaddr,
					acttime: this.applyForm.acttime,
					tiktype: this.applyForm.tiktype,
					tikscore: this.applyForm.tikscore,
					others: this.applyForm.others
				}
			};
			return previewObj;
		},
		clear (){
			this.clearBaseForm();
			this.clearApplyForm();
		},
		clearApplyForm () {
			this.$refs['applyForm'].resetFields();
		},
		clearBaseForm (){
			this.$refs['baseForm'].resetFields();
		},
	}
};
</script>
<style scoped lang="stylus" src="../../../assets/css/apply/form.styl"></style>
<style lang="stylus" scoped></style>
