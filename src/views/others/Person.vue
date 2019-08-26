<template>
<div>
	<!-- <simple-header title="个人信息"></simple-header> -->
	<div class="person-container">
		<div class="box-title">基本信息</div>

		<el-divider></el-divider>

<!-- 		<change-form :personInfo="personInfo" ref="personInfoForm"></change-form>


		<transition name="el-fade-in">
			<div class="btn-group">
				<el-button class="btn" type="primary" @click="postChange">提交修改</el-button>
			</div>
		</transition>
 -->
 		<change-form :personInfo="personInfo"></change-form>		
	</div>
</div>
</template>
<script>
// import PersonInfo from '../../components/others/PersonInfo.vue';
import ChangeForm from '../../components/others/ChangeForm.vue';
// import PersonAndChange from '../../components/others/PersonAndChange.vue';
// import { apiAddAuthoritiee, apiRemoveAuthoritiee } from '../../api/department.js';

export default {
	components: {
		// 'person-info': PersonInfo,
		'change-form': ChangeForm,
		// 'person-and-change': PersonAndChange,
	},
	data (){
		return {

		};
	},
	computed: {
		personInfo (){
			return this.$store.state.userInfo;
		}
	},
	methods: {
	// 	showChange (){
	// 		this.showChangeForm = true;
	// 	},
	// 	hideChange (){
	// 		this.showChangeForm = false;
	// 	},
		// postChange (){
		// 	let changeForm = this.$refs['personInfoForm'].getChangeData(),
		// 		authorities = changeForm.authorities,
		// 		add = [],
		// 		remove = [];
		// 	// console.log(authorities);
		// 	// console.log(this.personInfo.authorities);
		// 	for (let authoritiee of authorities){
		// 		console.log('authorities', authoritiee);
		// 		if (this.personInfo.authorities.indexOf(authoritiee) === -1){
		// 			add.push(authoritiee);
		// 		}
		// 	}
		// 	for (let authoritiee of this.personInfo.authorities){
		// 		console.log('personInfo', authoritiee);
		// 		if (authorities.indexOf(authoritiee) === -1){
		// 			remove.push(authoritiee);
		// 		}
		// 	}
		// 	for (let addAuthoritiee of add){
		// 		apiAddAuthoritiee(this.personInfo.studentNumber, addAuthoritiee, (res) => {

		// 		});
		// 	}

		// 	for (let removeAuthoritiee of remove){
		// 		apiRemoveAuthoritiee(this.personInfo.studentNumber, removeAuthoritiee, (res) => {

		// 		});
		// 	}
		// },
	},
};
</script>
<style lang="stylus" scoped src="../../assets/css/other/person.styl"></style>
