<template>
		<el-dialog
			title="请确认表单"
			:visible="previewObj.isPreview"
			center
			append-to-body="true"
			width="75%"
		>
			<formTable :detailData="previewObj.data"></formTable>

			<span slot="footer" class="dialog-footer">
			    <el-button @click="previewObj.isPreview = false">取 消</el-button>
			    <el-button type="primary" @click="previewObj.isPreview = false">确 定</el-button>
			</span>
		</el-dialog>
</template>

<script>
import Table from '../../components/Table.vue';

export default {
	components: {
		'formTable': Table,
	},
	props: [
		'previewObj',
	],
	data (){
		return {

		};
	},
};
</script>