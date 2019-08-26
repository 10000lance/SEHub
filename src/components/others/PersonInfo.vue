<template>
	<div class="person-info-box">
		<div v-for="(value, key) in personInfo">
			<div class="person-info-row clearfix">
				{{keyToName(key)}} :&nbsp;{{valueToName(value)}}
<!-- 				<div class="person-info-key">
					{{keyToName(key)}} :
				</div>

				<div v-if="key==='position'" class="person-info-value">
					{{valueToName(value)}}
				</div>
				<div v-else class="person-info-value">
					{{value}}
				</div>
 -->			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import { POSITION, DEPARTMENT, AUTHORITIEES } from '../../assets/js/keyToName.js';

const KeyToName = {
	studentNumber: '学号',
	name: '姓名',
	department: '所属部门',
	position: '值位',
	phone: '联系电话',
	email: '邮箱',
	authorities: '职责',
};

export default {
	props: [
		'personInfo',
	],
	data (){
		return {

		};
	},
	methods: {
		keyToName (key){
			// console.log(key);
			return KeyToName[key];
		},
		//职责转换成字符串
		authoritiesToName (authorities){
			console.log('authorities', authorities);
			if (authorities instanceof Array){
				let name = [];
				for (let authoritiee of authorities){
					console.log(AUTHORITIEES[authoritiee]);
					name.push(AUTHORITIEES[authoritiee]);
				}
				return name.length ? name.join('; ') : undefined;
			}
			else {
				return undefined;
			}
		},
		valueToName (value){
			// console.log(value);
			let p = POSITION[value],
				d = DEPARTMENT[value],
				a = this.authoritiesToName(value);
			return p ? p : (d ? d : (a ? a : value));
		},
	},
	computed: {

	},
};
</script>
<style lang="stylus" scoped src="../../assets/css/other/personInfo.styl"></style>
