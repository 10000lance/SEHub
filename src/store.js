import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		isLogin: false,
		user: {
			name: 'Test',
			depart: 'XXX部'
		},
		permission: {},
		activities: {
			ongoing: [],
			preparing: []
		},
		notices: {
			
		},
	},
	mutations: {
		login(state, jwt) {
			state.isLogin = true;
			sessionStorage.setItem("jwt", jwt);
			sessionStorage.setItem("selogin", true);
		},
		//缓存notices
		saveNotices (state, notices){
			state.notices = notices;
		},
	},
	actions: {

	}
});
