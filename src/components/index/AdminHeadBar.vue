<template>
	<div class="head-container">
		<div class="head-box">
			<div class="head-img-box">
				<img src="../../../public/scutse.png" alt width="30px">
			</div>
			<div class="head-title-box">软件学院团学管理平台 管理端</div>
		</div>
		<div class="head-option-box">
			<el-dropdown @command="handleCommand" trigger="click">
				<div class="option-person">{{personName}}</div>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="person">个人信息</el-dropdown-item>
					<el-dropdown-item command="logout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {

		};
	},
	computed: {
		personName: function () {
			return '吴';
		}
	},
	methods: {
		handleCommand (command) {
			switch (command) {
				case 'person':
					this.$router.push('/admin/person');
					break;
				case 'logout':
					break;
			}
		}
	}
};
</script>
<style lang="stylus" scoped src="../../assets/css/index/headbar.styl"></style>
