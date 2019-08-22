const Mock = require('mockjs');
const Random = Mock.Random;

//登陆api
Mock.mock('/api/login', 'post', function(options){
	if (options.body === 'username=201630666387&password=123456'){
		return {
			code: 200,
		};
	}
});

//提交表单
Mock.mock(/\/application\/\w+/, 'post', function(options){
	console.log(typeof options.body);
	console.log(JSON.parse(options.body));
	console.log(options);
	// return {};
});



//获取notices
Mock.mock('/notice/application', 'get', function(){
	let mockFn = {

		mock_etiquette: function(){
			return Mock.mock({
				'id|1-100': 1,
				activityBasicInfo: {
					name: Random.ctitle(3, 10),
					startTime: Random.date('yyyy-mm-dd'),
					endTime: Random.date('yyyy-mm-dd'),
					description: Random.cparagraph(3, 7),
				},
				checkInfo: {
					'checkStatus|1': ['passed', 'checking', 'nopassed'],
					checkFeedback: Random.cparagraph(3, 7),
					submissionDate: Random.date('yyyy-mm-dd'),
					checkDate: Random.date('yyyy-mm-dd'),
					initializer: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['minister', 'staff'],
						'phone|10000000000-99999999999': 1,
						'department|1': ['组织部', '素拓部', '宣传部', '秘书部'],
						authoritiees: [],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['minister', 'staff'],
						'phone|10000000000-99999999999': 1,
						'department|1': ['组织部', '素拓部', '宣传部', '秘书部'],
						authoritiees: [],
					}
				},
				'numOfEtiquette|1-10': 1,
				'etiquetteJobs|1': ['颁奖', '引导', '迎宾签到', '其他'],
				rehearsalTime: Random.date('yyyy-mm-dd'),
				'rehearsalSite|1': ['C10', 'B7', 'B8'],
				descOfJob: Random.cparagraph(3, 7),
				'activityThisBelongsTo|1-100': 1, 
			});
		},
		mock_host: function (){
			return Mock.mock({
				'id|1-100': 1,
				activityBasicInfo: {
					name: Random.ctitle(3, 10),
					startTime: Random.date('yyyy-mm-dd'),
					endTime: Random.date('yyyy-mm-dd'),
					description: Random.cparagraph(3, 7),
				},
				checkInfo: {
					'checkStatus|1': ['passed', 'checking', 'nopassed'],
					checkFeedback: Random.cparagraph(3, 7),
					submissionDate: Random.date('yyyy-mm-dd'),
					checkDate: Random.date('yyyy-mm-dd'),
					initializer: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['minister', 'staff'],
						'phone|10000000000-99999999999': 1,
						'department|1': ['组织部', '素拓部', '宣传部', '秘书部'],
						authoritiees: [],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['minister', 'staff'],
						'phone|10000000000-99999999999': 1,
						'department|1': ['组织部', '素拓部', '宣传部', '秘书部'],
						authoritiees: [],
					}
				},
				'numOfHost|1-3': 1,
				rehearsalTime: Random.date('yyyy-mm-dd'),
				'rehearsalSite|1': ['C10', 'B7', 'B8'],
				descOfJob: Random.cparagraph(3, 7),
				'activityThisBelongsTo|1-100': 1, 
			});
		},
		mock_poster: function (){
			return Mock.mock({
				'id|1-100': 1,
				activityBasicInfo: {
					name: Random.ctitle(3, 10),
					startTime: Random.date('yyyy-mm-dd'),
					endTime: Random.date('yyyy-mm-dd'),
					description: Random.cparagraph(3, 7),
				},
				checkInfo: {
					'checkStatus|1': ['passed', 'checking', 'nopassed'],
					checkFeedback: Random.cparagraph(3, 7),
					submissionDate: Random.date('yyyy-mm-dd'),
					checkDate: Random.date('yyyy-mm-dd'),
					initializer: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['minister', 'staff'],
						'phone|10000000000-99999999999': 1,
						'department|1': ['组织部', '素拓部', '宣传部', '秘书部'],
						authoritiees: [],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['minister', 'staff'],
						'phone|10000000000-99999999999': 1,
						'department|1': ['组织部', '素拓部', '宣传部', '秘书部'],
						authoritiees: [],
					}
				},
				propagandaTextRequirement: Random.csentence(3, 7),
				posterSize: Random.csentence(1, 3),
				deadline: Random.date('yyyy-mm-dd'),
				note: Random.cparagraph(3, 7),
				'activityThisBelongsTo|1-100': 1, 
			});
		},
		mock_lectureTicket: function (){
			return Mock.mock({

				'id|1-100': 1,
				activityBasicInfo: {
					name: Random.ctitle(3, 10),
					startTime: Random.date('yyyy-mm-dd'),
					endTime: Random.date('yyyy-mm-dd'),
					description: Random.cparagraph(3, 7),
				},
				checkInfo: {
					'checkStatus|1': ['passed', 'checking', 'nopassed'],
					checkFeedback: Random.cparagraph(3, 7),
					submissionDate: Random.date('yyyy-mm-dd'),
					checkDate: Random.date('yyyy-mm-dd'),
					initializer: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['minister', 'staff'],
						'phone|10000000000-99999999999': 1,
						'department|1': ['组织部', '素拓部', '宣传部', '秘书部'],
						authoritiees: [],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['minister', 'staff'],
						'phone|10000000000-99999999999': 1,
						'department|1': ['组织部', '素拓部', '宣传部', '秘书部'],
						authoritiees: [],
					}
				},
				'numOfTicket|30-200': 1,
				'ticketType|1': ['创新分', '德育分'],
				'ticketScore|1-3': 1,
				note: Random.cparagraph(3, 7),
				'activityThisBelongsTo|1-100': 1, 
			});
		}
	};

	let data = Mock.mock({
		'arr|1': {
			etiquette: [], 
			host: [],
			poster: [],
			lectureTicket: [],
		},
	});

	let num = Random.integer(5, 20);
	for (let key in data.arr){
		if (data.arr.hasOwnProperty(key)){
			for (let i = 0; i < num; i++){
				data.arr[key].push(mockFn['mock_'+key]());
			}
		}
	}

	return data.arr;
});
