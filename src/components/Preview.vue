<template>
<div>
	<formTable :detailData="previewData"></formTable>
	<div v-for="form in previewData.otherForms">
		<el-divider></el-divider>
		<formTable :detailData="form"></formTable>
	</div>
</div>
</template>

<script>
import Table from './Table.vue';

export default {
	components: {
		'formTable': Table,
	},
	props: [
		'previewData',
	],
	data (){
		return {

		};
	},
};
</script>