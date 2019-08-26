import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
	{
		path: '/404',
		component: () => import('./views/404.vue')
	}, 
	{
		path: '/index',
		component: () => import('./views/Login.vue')
	}, 
	{
		path: '/admin',
		component: () => import('./admin/AdminIndex.vue'),
		children: [
			{
				path: '/admin/department-manage',
				component: () => import('./admin/DepartmentManage.vue'),
			}, 
			{
				path: '/admin/user-manage',
				component: () => import('./admin/UserManage.vue')
			},
			{
				path: '/admin/department-manage/:id',
				component: () => import('./admin/Department.vue'),
			}
		]
	},
	{
		path: '/',
		name: 'index',
		component: () => import('./views/Index.vue'),
		children: [
			{
				path: '/home',
				component: () => import('./views/home/Home.vue')
			}, 
			{
				path: '/home/:type/:id',
				component: () => import('./views/home/EachAct.vue')
				// component: () => import('./views/notice/Detail.vue')
			}, 
			{
				path: '/person',
				component: () => import('./views/others/Person.vue')
			}, 
			{
				path: '/center',
				component: () => import('./views/second/Center.vue')
			}, 
			{
				path: '/notice',
				component: () => import('./views/notice/Notice.vue')
			}, 
			{
				path: '/notice/:type/:id',
				component: () => import('./views/notice/Detail.vue')
			}, 
			{
				path: '/others',
				component: () => import('./views/others/Others.vue')
			}, 
			{
				path: '/apply',
				component: () => import('./views/apply/ApplyHome.vue')
			}, 
			{
				path: '/apply/:id',
				component: () => import('./views/apply/ApplyForm.vue')
			}
		]
	}, 
	// {
	//   path: '/admin',
	//   component: () => import('./admin/AdminLogin.vue')
	// }, 
	// {
	// 	path: '/admin/',
	// 	component: () => import('./admin/AdminIndex.vue'),
	// 	children: [
	// 	{
	// 		path: '/admin/home',
	// 		component: () => import('./views/home/Home.vue')
	// 	}, 
	// 	{
	// 		path: '/admin/manage',
	// 		component: () => import('./admin/work/UserManage.vue')
	// 	}
	// 	]
	// },
	{
		path: '*',
		component: () => import('./views/404.vue')
	}
	]
});