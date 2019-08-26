<template>
	<div class="center-cnt" v-loading="loading">
		<div class="center-head">
	        <div class="center-title">{{keyToName(departmentInfo.name)}}</div>
	        <div class="center-description">{{departmentInfo.description}}</div>
	        <el-divider></el-divider>
		</div>

		<div class="memberList-box">
			<div class="memberList-title">部门成员</div>
			<el-collapse accordion>
				<div v-for="member in departmentInfo.memberList">
					<el-collapse-item class="member-item">
						<template slot="title">
							{{member.name}}
						</template>
						<div class="info-box"">
							<change-form :personInfo="member"></change-form>
						</div>
					</el-collapse-item>
				</div>
			</el-collapse>
		</div>
	</div>
</template>

<script>
import {apiGetDepartment} from '../../api/department.js';
// import PersonInfo from '../../components/others/PersonInfo.vue';
import ChangeForm from '../../components/others/ChangeForm.vue';
// import PersonAndChange from '../../components/others/PersonAndChange.vue';
import { DEPARTMENT } from '../../assets/js/keyToName.js';

export default {
	components: {
		// 'person-info': PersonInfo,
		'change-form': ChangeForm,
		// 'person-and-change': PersonAndChange,
	},
	data () {
		return {
			loading: true,
			departmentInfo: {},
		};
	},
	methods: {
		keyToName (key){
			return DEPARTMENT[key];
		},
	},
	beforeMount (){
		// console.log(apiGetDepartment);
		apiGetDepartment(res => {
			if (res.status === 200){
				this.departmentInfo = res.data;
				this.departmentInfo.name = decodeURI(this.departmentInfo.name, 'utf-8');
				console.log(this.departmentInfo);
			}
			else {
				console.log('Failed to get departmentInfo');
			}
			this.loading = false;
		});
	},
};
</script>

<style lang="stylus">
@import '../../assets/css/default'
.center-cnt {
	width: 95%;
	border: 1px solid rgb(220, 223, 230);
	border-radius: 10px;
	margin: auto;
}

.memberList-box {
}

.member-item {
	width: 92%;
	margin: auto;
	color: #606266;
}

.memberList-box .el-collapse-item__header {
	color: #606266;
    font-size: 1.1em;
    border: 1px solid rgb(220,223,230);
    border-radius-left: 50%;
    border-radius-right: 50%;
    border-radius: 25px;
    margin: 8px 0px;
    padding-left: 20px;
}

.info-box {
	border: 1px solid #DCDFE6;
	border-radius: 10px;
}

.center-title {
	padding 24px
	font-size: 1.5rem;
	font-weight: bold;
	color: #606662;
	@media screen and (max-width: 540px){
		font-size: 1rem;
		text-align: center;
		font-weight: bold;
	}
}

.memberList-title{
	padding 12px 28px;
	font-size: 1.2em;
	font-weight: bold;
	color: #606662;
	@media screen and (max-width: 540px){
		font-size: 0.9rem;
		text-align: center;
		font-weight: bold;
	}
}

.center-description{
	width: 92%;
	margin: auto;
	text-indent: 2em;
	font-size: 1.1em;
	color: #606662;
}

</style>
