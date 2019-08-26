<!-- 宣传物资申请 -->
<template>
	<div>
		<el-form :model="applyForm" :rules="rules" ref="applyForm">
			<el-form-item label="交付时间" prop="deadline" class="apy-item">
				<el-date-picker
					v-model="applyForm.deadline"
					type="date"
					value-format="yyyy-MM-dd"
					placeholder="预计完成时间"
				></el-date-picker>
			</el-form-item>

			<el-form-item label="宣传文字要求" prop="propagandaTextRequirement" class="apy-item">
				<el-input
					type="textarea"
					rows="5"
					v-model="applyForm.propagandaTextRequirement"
					resize="none"
					class="apy-text-normal"
				></el-input>
			</el-form-item>

			<el-form-item label="海报大小" prop="posterSize" class="apy-item">
				<el-input v-model="applyForm.posterSize" class="apy-input-normal"></el-input>
			</el-form-item>

<!-- 			<div class="apy-form-dashed"></div>
			<el-form-item
				v-for="(need,index) in applyForm.publicityNeeds"
				:label="'物资   '+(index+1)"
				:key="index"
				prop="publicityNeeds"
			>
				<el-input v-model="need.name" class="apy-input-mini"></el-input>
				<span>&emsp;大小&ensp;</span>
				<el-input v-model="need.size" class="apy-pub-input-mini"></el-input>
				<span>&emsp;数量&ensp;</span>
				<el-input v-model.number="need.num" class="apy-pub-input-mini"></el-input>
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
			<div class="apy-form-dashed" style="margin-top:25px;"></div>
 -->

			<el-form-item label="上传附件" class="apy-item">
				<se-upload></se-upload>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
import { NEEDDECODEPOSTERFORM } from '../../../assets/js/decode.js';

export default {
	data () {
		return {
			applyForm: {
				deadline: '2019-10-5', // 预计交付时间
				// publicityNeeds: [{
				// 	// name: '',
				// 	// size: '',
				// 	// num: ''
				// }],
				propagandaTextRequirement: '',	//宣传文字要求
				posterSize: '', //海报大小
			},
			rules: {
				deadline: [{ required: true, message: '请选择预计交付时间' }],
				// publicityNeeds: [{ required: true }],
				// note: [{ required: true, message: '请输入活动简介' }],
				propagandaTextRequirement: [{ required: true, message: '请输入宣传文字要求' }],
				posterSize: [{ required: true, message: '请输入所需海报大小' }],
			},
		};
	},
	methods: {
		addApyNeeds () {
			this.applyForm.publicityNeeds.push({ name: '', size: '', num: '' });
		},
		delApyNeeds (index) {
			this.applyForm.publicityNeeds.splice(index, 1);
		},
		getPreviewForm () {
			var applyVaild = null;

			this.$refs.applyForm.validate((valid) => {
				applyVaild = valid;
			});
			if (applyVaild) {
				// var needs = null;
				// if (this.applyForm.publicityNeeds.length === 0) {
				// 	needs = '无';
				// } else {
				// 	needs = [];
				// 	for (let i of this.applyForm.publicityNeeds) {
				// 		needs.push(i.name + '  大小：' + i.size + '  数量：' + i.num);
				// 	}
				// }
				return {
					deadline: this.applyForm.deadline,
					propagandaTextRequirement: this.applyForm.propagandaTextRequirement,
					posterSize: this.applyForm.posterSize,
					// publicityNeeds: needs,
				};
			}
			else{
				this.$message.error("请正确输入宣传物资申请表");
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
				// var needs = null;
				// if (this.applyForm.publicityNeeds.length === 0) {
				// 	needs = '无';
				// } else {
				// 	needs = [];
				// 	for (let i of this.applyForm.publicityNeeds) {
				// 		needs.push(i.name + '  大小：' + i.size + '  数量：' + i.num);
				// 	}
				// }
				formData = {
					deadline: this.applyForm.deadline,
					propagandaTextRequirement: this.applyForm.propagandaTextRequirement,
					posterSize: this.applyForm.posterSize,
					// publicityNeeds: needs,
				};
				for (let key in formData){
					if (NEEDDECODEPOSTERFORM.indexOf(key) !== -1){
						formData[key] = encodeURI(formData[key]);
					}
				}
				return formData;
			}
			else{
				this.$message.error("请正确输入宣传物资申请表");
				return null;
			}
		},
		// getPreviewForm () {
		// 	var previewObj = null;
		// 	this.$refs['applyForm'].validate((valid) => {
		// 		if (valid) {
		// 			previewObj = { title: '宣传物资申请',
		// 				content: {
		// 					postname: this.$store.state.user.name,
		// 					postdapart: this.$store.state.user.depart,
		// 					posttime: new Date().toLocaleString(),
		// 					actname: this.applyForm.actname,
		// 					actaddr: this.applyForm.actaddr,
		// 					actTime: this.applyForm.actTime,
		// 					dlytime: this.applyForm.dlytime,
		// 					actintro: this.applyForm.actintro,
		// 					publicityNeeds: '',
		// 					pubcontent: this.applyForm.pubcontent,
		// 					pubothers: this.applyForm.pubothers
		// 				}
		// 			};
		// 			if (this.applyForm.publicityNeeds.length === 0) {
		// 				previewObj.content.publicityNeeds = '无';
		// 			} else if (this.applyForm.publicityNeeds.length === 1) {
		// 				let val = this.applyForm.publicityNeeds[0];
		// 				previewObj.content.publicityNeeds = val.name + '  大小：' + val.size + '  数量：' + val.num;
		// 			} else {
		// 				previewObj.content.publicityNeeds = [];
		// 				for (let i of this.applyForm.publicityNeeds) {
		// 					previewObj.content.publicityNeeds.push(i.name + '  大小：' + i.size + '  数量：' + i.num);
		// 				}
		// 			}
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
