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
					<div v-if="keyToStr(key)">
						<div v-if="! (value instanceof Array)" class="tr-bar clearfix">
							<div class="ndetail-td-label">{{keyToStr(key)}}</div>
							<div class="ndetail-td-value">{{value}}</div>
						</div>
						<div v-else-if="key !== 'otherForms'" class="tr-bar clearfix">
							<div class="ndetail-td-label">{{keyToStr(key)}}</div>
							<div class="ndetail-td-value">{{value.join(';')}}</div>
						</div>
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
			// delete(this.detailData.type);
			return t ? t : type;
		},
	},

	methods: {
		keyToStr: function (key) {
			var str = KeyToStr[key];
			return str;
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
