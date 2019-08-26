import axios from 'axios';
import qs from 'qs';
axios.defaults.headers.post['Content-Type'] = 'Content-Type:application/x-www-form-urlencoded; charset=UTF-8';


//管理员获取用户
export function apiAdminGetUsers (callback){
	axios.get('/admin/member')
		.then(res => {
			callback(res);
		})
		.catch(error => {
			console.log(error);
		});
}

//管理员获取部门列表
export function apiAdminGetDeaprtments (callback){
	axios.get('/admin/department')
		.then(res => {
			callback(res);
		})
		.catch(error => {
			console.log(error);
		});
}

//管理员获取但各部门详细信息
export function apiAdminGetDeaprtment (departmentName, callback){
	let url = '/admin/department/' + departmentName;
	axios.get(url)
		.then(res => {
			callback(res);
		})
		.catch(error => {
			console.log(error);
		});
}

//管理员修改用户
export function apiAdminPutMember (member, callback){
	axios.put('/admin/member', member)
		.then(res => {
			callback(res);
		})
		.catch(error => {
			console.log(error);
		});
}

//管理员增加用户
export function apiAdminPostMember (member, callback){
	// console.log(member);
	axios.post('/admin/member', member, {
		// headers: {
	 //       'Content-Type': 'application/json',
	 //       // 'Accept': 'application/json',
	 //    }
	})
		.then(res => {
			callback(res);
		})
		.catch(error => {
			console.log(error);
		});

	// axios({
	// 	method: 'post',
	// 	url: '/admin/member',
	// 	data: member,
	//    // transformRequest: [
	//    //    function (data) {
	//    //       let ret = ''
	//    //       for (let it in data) {
	//    //          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	//    //       }
	//    //       ret = ret.substring(0, ret.lastIndexOf('&'));
	//    //       return ret
	//    //    }
	//    //  ],
	//     headers: {
	//        'Content-Type': 'application/json',
	//        // 'Accept': 'application/json',
	//     }
	// });

}

//管理员删除用户
export function apiAdminDeleteMember (studentNumber, callback){
	let url = '/admin/member/' + studentNumber;
	axios.delete(url)
		.then(res => {
			callback(res);
		})
		.catch(error => {
			console.log(error);
		});
}