import axios from 'axios';

export function apiGetDepartment (callback) {
	axios.get('/department')
		.then(res => callback(res))
		.catch(error => {
			console.log(error);
		});
}

export function apiPutMember (member, callback){
	axios.put('/member', member)
		.then(res => {
			callback(res);
		})
		.catch(error => {
			console.log(error);
		});
}

// export function apiAddAuthoritiee (stundentNumber, addAuthoritiee, callback){
// 	let json = {
// 		id: stundentNumber,
// 		authority: addAuthoritiee,
// 	};
// 	let url = '/authority/add/' + stundentNumber;
// 	axios.post(url, json)
// 		.then(res => {
// 			callback(res);
// 		})
// 		.catch(error => {
// 			console.log(error);
// 		});
// }

// export function apiRemoveAuthoritiee (stundentNumber, removeAuthoritiee,callback){
// 	let json = {
// 		id: stundentNumber,
// 		authority: removeAuthoritiee,
// 	};
// 	let url = '/authority/remove/' + stundentNumber;
// 	axios.post(url, json)
// 		.then(res => {
// 			callback(res);
// 		})
// 		.catch(error => {
// 			console.log(error);
// 		});

// }