<template>
	<el-container class="index-container">
		<el-header class="head-box">
			<head-bar></head-bar>
		</el-header>
		
		<div class="main-box">

			<el-button type="primary" icon="el-icon-menu" class="menu-btn" @click="drawer=true"></el-button>
			<el-drawer
				direction="ltr"
				:visible.sync="drawer"
				size="50%"
			>
				<side-bar :paths="paths"></side-bar>
			</el-drawer>

			<div class="left-box">
				<side-bar :paths="paths"></side-bar>
			</div>

			<div class="right-box">
				<transition name="fade" mode="out-in">
					<keep-alive exclude="applyform">
					<div class="index-right-box">
						<router-view></router-view>
					</div>
					</keep-alive>
				</transition>
			</div>
		</div>
	</el-container>
</template>

<script>
import SideBar from '../components/index/SideBar.vue';
import HeadBar from '../components/index/AdminHeadBar.vue';

export default {
	components: {
		'side-bar': SideBar,
		'head-bar': HeadBar,
	},
	data () {
		return {
			drawer: false,
			paths: [ {
				name: '部门管理',
				path: '/admin/department-manage',
				iclass: 'el-icon-date'
			}, {
				name: '用户管理',
				path: '/admin/user-manage',
				iclass: 'el-icon-date'
			}]
		};
	},
	methods: {
		toggleMenu (){
			this.showSidebar = !this.showSidebar;
		}
	},
	beforeMount () {
		if (this.$route.path === '/admin' || this.$route.path === '/admin/') {
			if (this.$store.state.isLogin) {
				console.log('login');
				this.$router.push('/admin/department-manage');
			} else {
				console.log('not login');
				this.$router.push('/index');
			}
		}
	}
};
</script>

<style lang="stylus" scoped src="../assets/css/index/index.styl"></style>