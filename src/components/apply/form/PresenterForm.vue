<!--主持人申请-->
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
		
		<el-form :model="applyForm" :rules="rules" ref="applyForm" label-width="95px">
			<el-form-item label="活动时间" prop="acttime">
				<el-date-picker v-model="applyForm.acttime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			<el-form-item label="彩排时间" prop="rehtime">
				<el-date-picker v-model="applyForm.rehtime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>
			<el-form-item label="申请人数" prop="number">
				<el-input v-model.number="applyForm.number" class="apy-input-normal"></el-input>
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
				acttime: '2019-10-1',
				rehtime: '2019-10-2', // 彩排时间
				number: 3,
				others: ''
			},
			rules: {
				acttime: [{ required: true, message: '请选择活动日期' }],
				rehtime: [{ required: true, message: '请选择彩排时间' }],
				number: [{ required: true, message: '请输入申请人数' }, { type: 'number', message: '请输入数字' }]
			},
			baseFormRules: {
				actname: [{ required: true, message: '请输入活动名称' }],
				actaddr: [{ required: true, message: '请输入活动区域' }],
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
					type: 'presenter',
					actname: this.baseForm.actname,
					actaddr: this.baseForm.actaddr,
					acttime: new Date(this.applyForm.acttime),
					rehtime: new Date(this.applyForm.rehtime),
					number: this.applyForm.number,
					others: this.applyForm.others
				};
			}
			else{
				this.$message.error("请正确输入主持人申请表");
				return null;
			}
		},
		getPreviewForm () {
			var previewObj = {
				title: '主持人申请',
				content: {
					postname: this.$store.state.user.name,
					postdapart: this.$store.state.user.depart,
					posttime: new Date().toLocaleString(),
					actname: this.applyForm.actname,
					actaddr: this.applyForm.actaddr,
					acttime: this.applyForm.acttime,
					rehtime: this.applyForm.rehtime,
					number: this.applyForm.number,
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
