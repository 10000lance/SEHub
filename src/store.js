import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLogin: false,
		// isAdmin: false,
		userInfo: {},
		permission: {},
		activities: {
			ongoing: [],
			preparing: []
		},

	},
	mutations: {
		login(state, userInfo) {
			state.isLogin = true;
			// state.isAdmin = isAdmin;
			// sessionStorage.setItem("jwt", jwt);
			// sessionStorage.setItem("selogin", true);
			//缓存个人信息
			state.userInfo = userInfo;
		},
	},
	actions: {

	}
});
