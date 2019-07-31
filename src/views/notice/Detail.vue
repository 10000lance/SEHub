<template>
	<div>
 		<form-table :detailData="detailData"></form-table>

		<div class="feedback-cnt">
			<div class="feedback-input">
				<div class="feedback-label">
					<span>*</span>审核反馈
				</div>
				<el-input v-model="feedback" rows="4" resize="none" type="textarea" placeholder="请输入审核反馈信息"></el-input>
			</div>
			<div class="feedback-btn">
				<div id="btn1">
					<el-button type="success" round plain @click="checkPass">通过</el-button>
				</div>
				<div id="btn2">
					<el-button type="danger" round plain @click="checkReject">拒绝</el-button>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { apiGetDetail } from '../../api/notice.js';
import Table from '../../components/Table.vue';

export default {
	components: {
		'form-table': Table,
	},
	data () {
		return {
			detailData: {},
			feedback: ''
		};
	},
	methods: {
		previewSubmit () {
			this.$emit('preview_submit');
		},
		checkPass () {

		},
		checkReject () {

		}
	},
	//获取数据
	beforeMount (){
		this.detailData = apiGetDetail();
	},
};
</script>
<style lang="stylus" scoped src="../../assets/css/notice/detail.styl"></style>
