<template>
	<div class="center-cnt" v-loading="loading">
		<div class="center-head">
	        <div class="center-title">用户管理</div>
	        <el-divider></el-divider>
		</div>

		<div class="memberList-box">

			<el-button class="add-btn btn" type="primary" @click="addUser">
				<i class="el-icon-circle-plus-outline"></i>
				添加新用户
			</el-button>

			<el-collapse accordion>
				<div v-for="member in memberList">
					<el-collapse-item class="member-item">
						<template slot="title">
							<span>{{keyToName(member.department)}}</span>
							:&nbsp;&nbsp;&nbsp;&nbsp;
							<span>{{member.name}}</span>
						</template>
						<div class="info-box"">
							<change-form :personInfo="member"></change-form>
							<div class="btn-group">
								<el-button class="btn" @click="deleteUser(member)">删除该用户</el-button>
							</div>
						</div>
					</el-collapse-item>
				</div>
			</el-collapse>
		</div>

		<el-dialog
			title="请填写新用户信息"
			:visible="addDialog"
			center
			:appendToBody="true"
			:closeOnClickModal="false"
			:showClose="false"
			class="add-dialog"
		>
			<el-form :model="newUser" :rules="addFormRules" ref="addForm">
				<el-form-item label="学号" prop="studentNumber" class="apy-item">
					<el-input v-model="newUser.studentNumber" class="apy-input-normal"></el-input>
				</el-form-item>

				<el-form-item label="姓名" prop="name" class="apy-item">
					<el-input v-model="newUser.name" class="apy-input-normal"></el-input>
				</el-form-item>

				<el-form-item label="职位" prop="position" class="apy-item">
					<el-select
						v-model="newUser.position"
						placeholder="请选择新用户职位"
						class="apy-input-normal"
						>
					    <el-option label="干事" value="Staff"></el-option>
					    <el-option label="部长" value="Minister"></el-option>
					    <el-option label="常委" value="StandingCommittee"></el-option>
				    </el-select>
				</el-form-item>

				<el-form-item label="联系电话" prop="phone" class="apy-item">
					<el-input v-model="newUser.phone" class="apy-input-normal"
					></el-input>
				</el-form-item>

				<el-form-item label="所属部门" prop="department" class="apy-item">
					<el-select
						v-model="newUser.department"
						placeholder="请选择新用户所属部门"
						class="apy-input-normal"
					>
					    <el-option 
					    	v-for="depart in departmentList"
							:key="depart"
					    	:label="keyToName(depart)"
					    	:value="depart"></el-option>
				    </el-select>
				</el-form-item>

				<el-form-item label="邮箱" prop="email" class="apy-item">
					<el-input v-model="newUser.email" class="apy-input-normal"
					></el-input>
				</el-form-item>

			</el-form>

			<span slot="footer" class="dialog-footer">
				<div class="btn-group">
				    <el-button class='btn' type="primary" @click="adminAddUser">确 定 提 交</el-button>
				    <el-button @click="addCancel" class='btn'>取 消</el-button>
				</div>
			</span>
		</el-dialog>

		<el-dialog
			title="请确认删除该用户"
			:visible="deleteWarn"
			center
			:appendToBody="true"
			:closeOnClickModal="false"
			:showClose="false"
			width="300px"
		>
			<span slot="footer" class="dialog-footer">
				<div class="btn-group">
				    <el-button class='btn' type="primary" @click="adminDeleteUser">确 定 提 交</el-button>
				    <el-button @click="deleteWarn = false" class='btn'>取 消</el-button>
				</div>
			</span>
		</el-dialog>
	</div>

</template>
<script>
import ChangeForm from '../components/others/ChangeForm.vue';
// import AdminPersonChange from './AdminPersonChange.vue';
// import AdminChangeForm from './AdminChangeForm.vue';
import { apiAdminGetUsers, apiAdminDeleteMember, apiAdminPostMember } from '../api/admin.js';
import { DEPARTMENT } from '../assets/js/keyToName.js';

export default {
	components: {
		'change-form': ChangeForm,
		// 'admin-change-form': AdminChangeForm,
		// 'admin-person-change': AdminPersonChange,
	},
	data () {
		return {
			loading: true,
			newUser: {
				studentNumber: '',
				name: '',
				position: '',
				phone: '',
				department: '',
				email: '',
				authorities: [],
			},
			memberList: [],
			departmentList: [],
			deleteWarn: false,
			addDialog: false,

			addFormRules: {
				studentNumber: [{ required: true, message: '请输入新用户学号' }],
				name: [{ required: true, message: '请输入新用户名字' }],
				position: [{ required: true, message: '请选择新用户职位' }],
				department: [{ required: true, message: '请选择新用户部门'}],
			}
		};
	},
	methods: {
		keyToName (key){
			return DEPARTMENT[key];
		},
		adminDeleteUser (){
			this.deleteWarn = false;
		},
		adminAddUser (){
			this.addDialog = false;
		},
		getAddUser () {
			var addFormVaild = null;

			this.$refs.addForm.validate((valid) => {
				addFormVaild = valid;
			});

			if (addFormVaild) {
				return {
					studentNumber: this.newUser.studentNumber,
					name: this.newUser.name,
					position: this.newUser.position,
					phone: this.newUser.phone,
					department: this.newUser.department,
					email: this.newUser.email,
					authorities: this.newUser.authorities,
				};
			}
			else{
				this.$message.error("请正确填写表单");			
				return null;
			}
		},
		clear (){
			this.$refs['addForm'].resetFields();
		},

		addCancel (){
			this.addDialog = false;
			this.clear();
		},

		addUser (){
			this.addDialog = true;
			this.adminAddUser = () => {
				let form = this.getAddUser();
				if (form){
					apiAdminPostMember(form, (res => {
						console.log('res:', res);
						if (res.status === 200){
							form.name = decodeURI(form.name, 'utf-8');
							this.memberList.push(form);
							// console.log('res:', res);
							this.$message.success('添加成功');
						}
						else {
							this.$message.error('Failed to add');
						}
						this.addDialog = false;
						this.clear();
					}));
				}
				else{
					this.clear();
				}
			};
		},
		deleteUser (member){
			this.deleteWarn = true;
			this.adminDeleteUser = () => {
				apiAdminDeleteMember(member.studentNumber, (res) => {
					if (res.status === 200){
						let index = this.memberList.indexOf(member);
						// console.log('member', member);
						// console.log('index', index);
						if (index !== -1){
							this.memberList.splice(index, 1);
						}
						this.$message.success('删除成功');
					}
					else {
						this.$message.error('删除该用户失败');
						cosole.log('Failed to delete');
					}
					this.deleteWarn = false;
				});
			};
			// let index = this.memberList.indexOf(member);
			// if (index !== -1){
			// 	this.memberList.splice(index, 1);
			// }
		},
	},
	beforeMount (){
		apiAdminGetUsers(res => {
			if (res.status === 200){
				this.memberList = res.data.allMember;
				for (let member of this.memberList){
					member.name = decodeURI(member.name, 'utf-8');
				}
				this.departmentList = res.data.allDepartment;
				// console.log('memberList', this.memberList);
				// console.log('departmentList', this.departmentList);
			}
			else {
				console.log("Failed to get users");
			}
			this.loading = false;
		});
	},
};
</script>
<style lang="stylus">
@import '../assets/css/default'
.add-dialog .el-dialog {
	width: 50%;
	@media screen and (max-width: 960px){
		width: 90%;
	}
}

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


.add-btn{
    margin: 15px auto;
    width: 92%;
    display: block;
    border-radius: 25px;
}
</style>
