<!--秘书部物资申请-->
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
			<el-form-item label="借用时间" prop="lendTime">
				<el-date-picker v-model="applyForm.lendTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>

			<el-form-item label="归还时间" prop="backTime">
				<el-date-picker v-model="applyForm.backTime" type="date" value-format="yyyy-MM-dd"></el-date-picker>
			</el-form-item>

			<div class="apy-form-dashed"></div>
			<el-form-item
				prop="needs"
				v-for="(need,index) in applyForm.needs"
				:label="'物资   '+(index+1)"
				:key="index"
			>
				<el-input v-model="need.name" class="apy-input-medium"></el-input>
				<span>&emsp;&emsp;数量&ensp;</span>
				<el-input v-model="need.num" class="apy-pub-input-mini"></el-input>
				<span>&emsp;</span>
				<el-button
					type="danger"
					icon="el-icon-delete"
					circle
					plain
					size="mini"
					@click="delApyNeeds(index)"
				></el-button>
			</el-form-item>

			<el-button class="apy-pub-form-btn" type="primary" plain @click="addApyNeeds">
				添加物资需求
				<i class="el-icon-circle-plus-outline"></i>
			</el-button>
			<div class="apy-form-dashed" style="margin-top: 20px;"></div>

			<el-form-item label="备  注">
				<el-input
					type="textarea"
					rows="5"
					v-model="applyForm.note"
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
				lendTime: '2019-10-1',		//借用时间
				backTime: '2019-10-2',		//归还时间
				needs: [{			//物资清单
					// name: '',
					// num: ''
				}],
				note: ''			//备注
			},
			rules: {
				lendTime: [{ required: true, message: '请选择借用时间' }],
				backTime: [{ required: true, message: '请选择归还时间' }],
				needs: [{ required: true }]
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
		addApyNeeds () {
			this.applyForm.needs.push({ name: '', num: '' });
		},
		delApyNeeds (index) {
			this.applyForm.needs.splice(index, 1);
		},
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
				var needs = null;
				if (this.applyForm.needs.length === 0) {
					needs = '无';
				} else {
					needs = [];
					for (let i of this.applyForm.needs) {
						needs.push(i.name + '  数量：' + i.num);
					}
				}
				return {
					lendTime: new Date(this.applyForm.lendTime),
					backTime: new Date(this.applyForm.backTime),
					needs: needs,
					note: this.applyForm.note
				};
			}
			else{
				this.$message.error("请正确输入秘书物资申请申请表");			
				return null;
			}
		},
		// getPreviewForm () {
		// 	var previewObj = { title: '秘书物资申请', content: {} };
		// 	previewObj.content.postname = this.$store.state.user.name;
		// 	previewObj.content.postdapart = this.$store.state.user.depart;
		// 	previewObj.content.posttime = new Date().toLocaleString();
		// 	previewObj.content.actname = this.applyForm.actname;
		// 	previewObj.content.actaddr = this.applyForm.actaddr;
		// 	previewObj.content.lendtime = this.applyForm.lendtime;
		// 	previewObj.content.backtime = this.applyForm.backtime;
		// 	if (this.applyForm.needs.length === 0) {
		// 		previewObj.content.needs = '无';
		// 	} else if (this.applyForm.needs.length === 1) {
		// 		let val = this.applyForm.needs[0];
		// 		previewObj.content.needs = val.name + '  数量：' + val.num;
		// 	} else {
		// 		previewObj.content.needs = [];
		// 		for (let i of this.applyForm.needs) {
		// 		// console.log(i)
		// 			previewObj.content.needs.push(i.name + '  数量：' + i.num);
		// 		}
		// 	}
		// 	previewObj.content.others = this.applyForm.others;
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
