<template>
<div class="box-content">
	<el-form :model="personInfo">
		<div v-for="(value, key) in personInfo">
			<el-form-item v-if="keyToName(key)" :label="keyToName(key) + ':'" class="apy-item">
				
				<el-input
					v-if="notChange.indexOf(key) !== -1"
					v-model="personInfo[key]"
					class="apy-input-normal"
					:disabled="true"
				></el-input>
				
				<el-input
					v-else
					v-model="personInfo[key]"
					class="apy-input-normal"
				></el-input>
			</el-form-item>
		</div>

		<el-form-item label="职责:" class="apy-item">
			<el-checkbox-group v-model="personInfo.authorities" :disabled="hasAuthorityToChange">
				<div v-for="authoritiee in authoritiesList" class="checkbox-box">
					<el-checkbox :label="authoritiee">{{authoritieeToName(authoritiee)}}</el-checkbox>
			</div>
			</el-checkbox-group>
		</el-form-item>
	</el-form>

	<div class="btn-group">
		<el-button class="btn" type="primary" @click="postChange">提交修改</el-button>
		<!-- <el-button class="btn" @click="deleteUser">删除该用户</el-button> -->
	</div>

</div>
</template>

<script type="text/javascript">
import { POSITION, DEPARTMENT, AUTHORITIEES, AUTHORITIEESLIST } from '../assets/js/keyToName.js';
import { getNotChange } from '../assets/js/authority.js';
import { apiAdminPutMember } from '../api/admin.js';

const KeyToName = {
	studentNumber: '学号',
	name: '姓名',
	department: '所属部门',
	position: '职位',
	phone: '联系电话',
	email: '邮箱',
	// authorities: '职责',
};

export default {
	props: [
		'personInfo',
	],
	data (){
		return {
		//原始数据
			originData: this.deepCopy(this.personInfo),

		//该部门的职责列表
			authoritiesList: AUTHORITIEESLIST[this.personInfo.department],
		//不能修改的职责列表
			notChange: [

			]
		};
	},
	beforeMount (){
		let position = this.$store.state.userInfo.position;
		// console.log(this.$store.state.userInfo);
		this.notChange = getNotChange(position);
		// console.log(this.notChange);
	},
	methods: {
		keyToName (key){
			// console.log(key);
			return KeyToName[key];
		},
		valueToName (value){
			// console.log(value);
			let p = POSITION[value],
				d = DEPARTMENT[value];
			return p ? p : (d ? d : value);
		},
		//职责键名转换
		authoritieeToName (authoritiee){
			// console.log('authoritiee', authoritiee);
			return AUTHORITIEES[authoritiee];
		},
		//
		NameToValue (name){
			for (let changeObj in [POSITION, DEPARTMENT]){
				for (let key in changeObj){
					if (changeObj.hasOwnProperty(key)){
						if (changeObj[key] === name){
							// console.log(key);
							return key;
						}
					}
				}
			}
			return name;
		},
		// getChangeData (){
		// 	let data = {};
		// 	for (let key in this.personData){
		// 		if (this.personData.hasOwnProperty(key)){
		// 			data[key] = this.personData[key];
		// 		}
		// 	}
		// 	data.authorities = this.authorities;
		// 	return data;
		// },
		deepCopy (obj){
			let newObj = {};
			for (let key in obj){
				if (obj.hasOwnProperty(key)){
					if (obj[key] instanceof Array){
						newObj[key] = [];
						for (let arrValue of obj[key]){
							newObj[key].push(arrValue);
						}
					}
					else if (obj[key] instanceof Object){
						newObj[key] = this.deepCopy(obj[key]);
					}
					else {
						newObj[key] = obj[key];
					}
				}
			}
			return newObj;
		},
		postChange (){
			let api = null;
			if (this.$store.state.userInfo.position === 'Admin'){
				api = apiAdminPutMember;
			}
			else {
				api = apiPutMember;
			}
			api(this.personInfo, res => {
				if (res.status === 200){
				//提交成功更新原视数据
					this.originData = this.personInfo;
					this.$message.success('提交成功');
				}
				else{
				//提交失败改回原始数据
					this.$message.error('提交失败');
					console.log('originData', this.originData);
					console.log('personInfo', this.personInfo);
					this.personInfo = this.deepCopy(this.originData);
					console.log("Failed to change personInfo");
				}
			});
		},
		deleteUser (){
			this.originData = null;
			this.personInfo = null;
		},
	},
	computed: {
	//当前form的数据源，不污染源数据
		// personData (){
		// 	let data = {};
		// 	for (let key in this.personInfo){
		// 		if (this.personInfo.hasOwnProperty(key)){
		// 			if (this.personInfo[key] instanceof Array){
		// 				data[key] = [];
		// 				for (let arrValue of this.personInfo[key]){
		// 					data[key].push(arrValue);
		// 				}
		// 			}
		// 			else{
		// 				data[key] = this.valueToName(this.personInfo[key]);
		// 			}
		// 		}
		// 	}
		// 	this.authorities = data.authorities;
		// 	// console.log('personData', data);
		// 	return data;
		// },
	//是否有权限去修改权限
		hasAuthorityToChange (){
			return ['Minister', 'StandingCommittee', 'Admin'].indexOf(this.$store.state.userInfo.position) === -1;
		},
	},
};
</script>
<!-- <style lang="stylus" scoped src="../../assets/css/other/changeForm.styl"></style> -->
<style lang="stylus">
.box-content{
	margin-top: 12px;
}

.apy-item
	padding: 0 10px;
	
.apy-item .el-form-item__label{
	display: block;
	width: 20%;
	font-weight: bold;
}

@media screen and (max-width: 540px){
	.apy-item .el-form-item__label{
		text-align: left;
		width: 100%;
	}
}
.apy-input-normal,
.apy-text-normal{
	width 60%
	@media screen and (max-width: 540px){
		width 100%
	}
}

.checkbox-box{
	display: inline-block;
	margin-right: 18px;
}

.change-btn
	margin: 30px auto;
	display: block;
	width: 150px;
	@media screen and (max-width: 400px){
		width: 80%;
	}

.btn-group
	margin: auto;
	display: block;
	text-align: center;
	
	.btn
		margin: 15px;
		width: 150px;
		@media screen and (max-width: 400px){
			width: 80%;
		}

</style>