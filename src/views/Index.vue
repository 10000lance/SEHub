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
import HeadBar from '../components/index/HeadBar.vue';

export default {
	components: {
		'side-bar': SideBar,
		'head-bar': HeadBar,
	},
	data () {
	return {
			drawer: false,
			paths: [
				{ // 定义边栏的跳转
					name: '首页',
					path: '/home',
					iclass: 'el-icon-date'
				}, 
				{
					name: '部门中心',
					path: '/center',
					iclass: 'el-icon-star-off'
				}, 
				{
					name: '部门通知',
					path: '/notice',
					iclass: 'el-icon-bell'
				}, 
				{
					name: '工作申请',
					path: '/apply',
					iclass: 'el-icon-document'
				}, 
				{
					name: '其他',
					path: '/others',
					iclass: 'el-icon-news'
				}
			]
		};
	},
	methods: {
		toggleMenu (){
			this.showSidebar = !this.showSidebar;
		}
	},
	beforeMount () {
	if (this.$route.path === '/') {
		if (this.$store.state.isLogin) {
			this.$router.push('home');
		} else {
			this.$router.push('index');
		}
	}
	}
};
</script>

<style lang="stylus" scoped src="../assets/css/index/index.styl"></style>