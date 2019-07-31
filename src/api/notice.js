import axios from 'axios';

export function apiGetNotices (){
	// axios.get()
	// 	.then(res => {
	// 		console.log(res.data.code);
	// 	});
	return [
			{
				state: 0,		//state为1表示已处理，0表示未处理
				title: '活动申请',
				fromDepart: 'XXX部',
				fromName: '张XX',
				time: '2019-3-30',
				id: '111'
			},
			{
				state: 0,
				title: '活动申请',
				fromDepart: 'XXX部',
				fromName: '张XX',
				time: '2019-3-30',
				id: '112'
			},
			{
				state: 1,
				title: '活动申请',
				fromDepart: 'XXX部',
				fromName: '吴XX',
				time: '2019-3-30',
				id: '113',
			},
		];
}

export function apiGetDetail (){
	// axios.get()
	// 	.ten(res => {
	// 		console.log(res.data.code);
	// 	});

	return {
			type: 'activity',
			actname: 'XXX',
			actaddr: 'XXXXX',
			actback: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
			actaim: 'XXXXX',
			hostunit: 'XXXXX',
			organizer: 'XXXXX',
		};
}

