<template>
	<div :class="this.checkStatus" v-loading="loading">
		<div v-if="this.showTable">
	 		<form-table :detailData="detailData" ></form-table>
			<div v-for="table in otherTables">
				<el-divider></el-divider>
				<form-table :detailData="table"></form-table>
			</div>
		</div>

		<div class="feedback-cnt">
			<div class="feedback-input">
				<div class="feedback-label">
					<span>*</span>审核反馈
				</div>
				<el-input v-model="checkFeedback" rows="4" resize="none" type="textarea" placeholder="请输入审核反馈信息"></el-input>
			</div>
			<div class="feedback-btn" v-if="check">
				<div id="btn1">
					<el-button class="check-btn" type="success" round plain @click="checkPass">通过</el-button>
				</div>
				<div id="btn2">
					<el-button class="check-btn" type="danger" round plain @click="checkReject">拒绝</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

import { apiGetDetail } from '../../api/notice.js';
import Table from '../../components/Table.vue';
import { checkForm } from '../../api/notice.js';

export default {
	components: {
		'form-table': Table,
	},
	data () {
		return {
			loading: true,
			detailData: {},
			otherTables: [],
			checkStatus: '',
			checkFeedback: '',
			//父组件异步获取数据传prop给子组件，先控制子组件不显示，等数据获取后再显示子组件
			showTable: false,
		};
	},
	methods: {
		previewSubmit () {
			this.$emit('preview_submit');
		},
		checkPass () {
			let checkInfo = {
				id: this.$route.params.id,
				pass: true,
				feedback: this.checkFeedback,
			},
			formType =	this.detailData.type;
			checkForm(formType, checkInfo, (res) => {
				if (res.status === 200){
					this.checkStatus = 'passed';
					this.$message.success('提交成功');
				}
				else {
					this.$message.error('提交失败');
				}
			});
		},
		checkReject () {
			let checkInfo = {
				id: this.$route.params.id,
				pass: false,
				feedback: this.checkFeedback,
			},
			formType =	this.detailData.type; 
			checkForm(formType, checkInfo, (res) => {
				if (res.status === 200){
					this.checkStatus = 'nopassed';
					this.$message.success('提交成功');
				}
				else {
					this.$message.error('提交失败');
				}
			});
		}
	},

	computed: {
		check (){
			return this.checkStatus === 'checking';
		},
	},

	//获取数据
	beforeMount (){
		apiGetDetail (this.$route.params.type, this.$route.params.id, (res) =>{
			if (res.status === 200){
				let form = res.data;
				// console.log(form);
				this.detailData.type = this.$route.params.type;
				// for (let key in form.activityBasicInfo){
				// 	if (form.activityBasicInfo.hasOwnProperty(key)){
				// 		this.detailData[key] = form.activityBasicInfo[key];
				// 	}
				// }
				for (let subObj of ['activityBasicInfo', 'activitySupplementaryInfo']){			
					if (form.hasOwnProperty(subObj)){
						for (let key in form[subObj]){
							if (form[subObj].hasOwnProperty(key)){
								this.detailData[key] = form[subObj][key];
							}
						}
					}
				}

				for (let key in form){
					if (form.hasOwnProperty(key)){
						this.detailData[key] = form[key];
					}
				}
				this.showTable = true;
				// console.log(this.detailData);
				this.checkStatus = form.checkInfo.checkStatus;
				this.checkFeedback = form.checkInfo.checkFeedback ? form.checkInfo.checkFeedback : '';

			//提取从属表
				for (let subType of ['Etiquette', 'Host', 'Poster', 'LictureTicket']){
					if (form.hasOwnProperty(subType)){
						form[subType].type = subType.toLowerCase();
						this.otherTables.push(form[subType]);
					}
				}
			}
			else {
				console.log('Failed to get detail');
			}
			this.loading = false;
		});
	},
};

</script>
<style lang="stylus" scoped src="../../assets/css/notice/detail.styl"></style>
<style>
.passed {
	background: url('../../../public/passed128.svg') top right no-repeat;
}

.nopassed {
	background: url('../../../public/nopassed128.svg') top right no-repeat;
}

@media screen and (max-width: 768px){
	.passed {
		background: url('../../../public/passed64.svg') top right no-repeat;
	}

	.nopassed {
		background: url('../../../public/nopassed64.svg') top right no-repeat;
	}
	
}
</style>
