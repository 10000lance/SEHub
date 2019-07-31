<template>
	<div class="ndetail-cnt">
		<div class="ndetail-table">
			<table border="0" cellspacing="0" cellpadding="0">
				<tr align="center">
					<td colspan="2">
						<div class="ndetail-td-title">{{title}}</div>
					</td>
				</tr>
				<div v-for="(value, key) in detailData" :key="key">
					<tr v-if="! (value instanceof Array)">
						<td align="center">
							<div class="ndetail-td-label">{{keyToStr(key)}}</div>
						</td>
						<td class="ndetail-td-value">{{value}}</td>
					</tr>
					<div v-else-if="key !== 'otherTables'">
						<tr>
							<td :rowspan="value.length" align="center" style="vertical-align: middle;">
								<div class="ndetail-td-label">{{keyToStr(key)}}</div>
							</td>
							<td class="ndetail-td-value">{{value[0]}}</td>
						</tr>
						<tr v-for="subval in popValue(value)" :key="subval">
							<td class="ndetail-td-value">{{subval}}</td>
						</tr>
					</div>
				</div>
			</table>
		</div>
	</div>
</template>

<script>
import { KeyToStr, ToFormName } from '../assets/js/seconfig.js';

export default {
	props: ['detailData'],
	data (){
		return {

		};
	},
	computed: {
		title: function (){
			let type = this.detailData.type,
				t = ToFormName[type];
			delete(this.detailData.type);
			return t ? t : type;
		}
	},
	methods: {
		keyToStr: function (key) {
			var str = KeyToStr[key];
			return str ? str : key;
		},
		popValue (valArr) {
			// 去除头部第一个元素
			var arr = [...valArr];
			arr.splice(0, 1);
			return arr;
		},
	}
};
</script>
<style lang="stylus" scoped src="../assets/css/table.styl"></style>
