<template>
	<div class="main-box">
		<div class="loginImg"></div>
		<div class="login-container">
			<div class="title">软件学院团学管理系统</div>
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px">
				<el-form-item prop="account">
					<el-input
						type="text"
						v-model="ruleForm.account"
						@keyup.enter.native="handleSubmit"
						placeholder="账号"
					></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input
						type="password"
						v-model="ruleForm.password"
						@keyup.enter.native="handleSubmit"
						placeholder="密码"
					></el-input>
				</el-form-item>
				<el-checkbox v-model="isAdmin" class="admin-login">管理员登录</el-checkbox>
				<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
			</el-form>
			<el-button
				class="login-button"
				type="primary"
				@click.native.prevent="handleSubmit"
				:loading="logining"
			>登录</el-button>
		</div>
	</div>
</template>

<script>
import { apiLogin, apiAdminLogin, apiGetUserInfo } from "../api/home.js";
export default {
	name: "Login",
	data: function() {
		return {
			isAdmin: false,
			logining: false,
			ruleForm: {
				account: "",
				password: ""
			},
			rules: {
				account: [{ required: true, message: "请输入账号", trigger: "blur" }],
				password: [{ required: true, message: "请输入密码", trigger: "blur" }]
			},
			checked: true
		};
	},
	methods: {
		handleSubmit() {
			this.$refs.ruleForm.validate(valid => {
				if (valid) {
					this.logining = true;
					if (this.isAdmin){
						apiAdminLogin(this.ruleForm.account, this.ruleForm.password, res => {
							this.logining = false;
							if (res.status === 200){
							   	apiGetUserInfo(res => {
							   		if (res.status === 200){
								   		this.$store.commit("login", res.data);
								   		// console.log(res);
								    	this.$router.push("/admin");
							   		}
									else {
										this.$message.error('登陆失败');
									}							   		
							   	});
						   		// this.$store.commit("login", res.data);
						   		// // console.log(res);
						    	// this.$router.push("/admin");
						  	}
						  	else {
								this.$message.error('登陆失败');
						    	console.log("admin login fail");
						  	}
						  	// console.log(res)
						});
					}
					else{
						apiLogin(this.ruleForm.account, this.ruleForm.password, res => {
						  	this.logining = false;
						  	if (res.status === 200) {
							   	//缓存个人信息
							   	// console.log(res.data);
							   	apiGetUserInfo(res => {
							   		if (res.status === 200){
								   		this.$store.commit("login", res.data);
								   		// console.log(res);
								    	this.$router.push("/home");
							   		}
									else {
										this.$message.error('登陆失败');
									}							   		
							   	});
						  	}
						  	else {
								this.$message.error('登陆失败');
						    	console.log("login fail");
						  	}
						  	// console.log(res)
						});
					}
				}
			});
		},
		toggleAdmin (){
			this.isAdmin = !this.isAdmin;
		},
	}
};
</script>

<style lang="stylus" scoped>
@import '../assets/css/default.styl';
.main-box{
	position: relative;
	height: 100%;
}

.loginImg {
	position: fixed;
	height: 100%;
	width: 100%;
	background: url('http://oss.segydi.cn/background.jpg') no-repeat;
	background-size: cover;
	z-index: -1;
	top: 0;
}

.login-container {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 75%;
	max-width: 360px;
	padding: 32px;
	background: rgba(255, 255, 255, 0.9);
	border: 1px solid #eaeaea;
	border-radius(10px);
	box-sizing: border-box;
	@media screen and (max-width: 400px){
		width: 90%;
	}

	.title {
		font-size: 1.25rem;
		color: $color_black;
		text-align: center;
		margin-bottom: 25px;
	}


	.admin-login{
		float: left;
	}
	
	.remember {
		float: right;
	}

	@media screen and (max-width: 400px){
		.admin-login{
			float: none;
			margin-bottom: 10px;
		}
		.remember{
			float: none;
		}
	}
	
	.login-button {
		$btn-width = 200px;
		width: $btn-width;
		margin: auto;
		margin-top: 72px;
		display: block;
	}
}
</style>
