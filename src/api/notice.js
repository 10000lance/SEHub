import axios from 'axios';

export function apiGetNotices (callback){
	axios.get('/notice/application')
		.then(res => callback(res))
		.catch(error => console.log(error));
}	

//提交审核
export function checkForm (formType, checkInfo, callback){
	const toApiUrl = {
		activity: '/application/activity/check/',
		etiquette: '/application/etiquette/check/',
		host: '/application/host/check/',
		poster: '/application/poster/check/',
		lectureTicket: '/application/lecture-ticket/check/',
	};
	let url = toApiUrl[formType] + checkInfo.id;
	console.log(formType);
	console.log(url);
	axios.post(url, checkInfo)
		.then(res => {
			callback(res);
		})
		.catch(error => console.log(error));
}

export function apiGetDetail (type, id, callback){
	const toApiUrl = {
		activity: '/application/activity/',
		etiquette: '/application/etiquette/',
		host: '/application/host/',
		poster: '/application/poster/',
		lectureTicket: '/application/lecture-ticket/',
	};

	let url = toApiUrl[type] + id;
	axios.get(url)
		.then(res => callback(res))
		.catch(error => console.log(error));
}

