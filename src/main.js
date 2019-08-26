import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import router from './router';
import store from './store';
import './plugins/element.js';
import SeUpload from './components/apply/SeUpload';

//导入默认样式
import './assets/css/default.styl';

//mock测试
// import Mock from './mock/mock.js';

axios.defaults.withCredentials = true;

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);

Vue.component('se-upload', SeUpload);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
