import axios from 'axios';

export function apiGetNotices (callback){
	axios.get('/notice/application')
		.then(res => callback(res))
		.catch(error => console.log(error));

// 	return [
// 			{
// 				state: 0,		//state为1表示已处理，0表示未处理
// 				title: '活动申请',
// 				fromDepart: 'XXX部',
// 				fromName: '张XX',
// 				time: '2019-3-30',
// 				id: '111'
// 			},
// 			{
// 				state: 0,
// 				title: '活动申请',
// 				fromDepart: 'XXX部',
// 				fromName: '张XX',
// 				time: '2019-3-30',
// 				id: '112'
// 			},
// 			{
// 				state: 1,
// 				title: '活动申请',
// 				fromDepart: 'XXX部',
// 				fromName: '吴XX',
// 				time: '2019-3-30',
// 				id: '113',
// 			},
// 		];
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

export function apiGetDetail (callback){
	axios.get('/api/detail').then(res => callback(res.data))
		.catch(error => console.log(error));

	// return {
	// 		type: 'activity',
	// 		actname: 'XXX',
	// 		actaddr: 'XXXXX',
	// 		actback: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
	// 		actaim: 'XXXXX',
	// 		hostunit: 'XXXXX',
	// 		organizer: 'XXXXX',
	// 	};
}

