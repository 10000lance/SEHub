import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 登录
export function apiLogin (username, password, callback) {
	let q = 'username=' + username + '&password=' + password;
	// let yes = 'yes'
	axios.post('/login', q).then(res => callback(res))
		.catch(error => {
			console.log(error);
			this.$message('登陆失败');
		});
}

//管理员登陆
export function apiAdminLogin (username, password, callback) {
	let q = 'username=' + username + '&password=' + password;

	// let xmlhttp=new XMLHttpRequest();
	// xmlhttp.onreadystatechange = function (){
	// 	if (xmlhttp.readyState === 4 && xmlhttp.status === 200){
	// 		console.log(xmlhttp);
	// 		console.log(document.cookie);
	// 		callback(xmlhttp);
	// 	}
	// };
	// xmlhttp.open('post', '/login', true);
	// xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// xmlhttp.send(q);

	// let yes = 'yes'
	axios.post('/login', q, { withCredentials: true }).then(res => {
		callback(res);
		console.log(document.cookie);
	})
		.catch(error => {
			console.log(error);
			this.$message('登陆失败');
		});

}


//获取用户信息
export function apiGetUserInfo (callback){
	axios.get('/member')
		.then(res => {
			callback(res);
		})
		.catch(error => {
			console.log(error);
		});
}


// 首页获取所有活动
export function apiGetActivities (callback) {
	axios.get('/application/activity').then(res => callback(res))
		.catch(error => {
			console.log(error);
		});
}
