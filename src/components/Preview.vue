<template>
<div>
	<formTable :detailData="previewData"></formTable>
	<div v-if="'otherTables' in previewData" v-for="otherTable in previewData.otherTables">
		<el-divider></el-divider>
		<formTable :detailData="otherTable"></formTable>
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