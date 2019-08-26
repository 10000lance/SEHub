const Mock = require('mockjs');
const Random = Mock.Random;

//登陆api
Mock.mock('/login', 'post', function(options){
	return Mock.mock({
		'studentNumber|001-1000': 1,
		name: Random.cname(),
		'position|1': ['Minister', 'Staff', 'StandingCommittee'],
		'phone|10000000000-99999999999': 1,
		'department|1': [
			'Secretary',	//秘书部
		    'Literary',	//文艺部
		    'Propaganda',		//宣传部
		    'Sports',		//体育部
		    'Media',		//新媒体
		    'Volunteer',	//志愿者
		    'Research',	//调研部
		    'Life',		//生活部
		    'Quality',		//素拓
		    'Academic',	//学术
		    'Organization',	//组织
		    'Relation',	//外联部
		    'StandingCommittee',	//常委			
		],
		email: Random.email(),
		'authorities': [ 'Etiquette', 'Poster', 'LectureTicket' ],
	});
});

//admin登陆
Mock.mock('/admin-login', 'post', function(options){
	return Mock.mock({
		'studentNumber|001-1000': 1,
		name: Random.cname(),
		position: 'Admin',
		'phone|10000000000-99999999999': 1,
		'department|1': [
			'Secretary',	//秘书部
		    'Literary',	//文艺部
		    'Propaganda',		//宣传部
		    'Sports',		//体育部
		    'Media',		//新媒体
		    'Volunteer',	//志愿者
		    'Research',	//调研部
		    'Life',		//生活部
		    'Quality',		//素拓
		    'Academic',	//学术
		    'Organization',	//组织
		    'Relation',	//外联部
		    'StandingCommittee',	//常委			
		],
		email: Random.email(),
		'authorities': [ 'Etiquette', 'Poster', 'LectureTicket' ],
	});
});

//admin获取所有user
Mock.mock('/admin/member', 'get', function(){
	let mock_member = function (){
		return Mock.mock({
			'studentNumber|001-1000': 1,
			name: Random.cname(),
			'position|1': ['Minister', 'Staff', 'StandingCommittee'],
			'phone|10000000000-99999999999': 1,
			'department|1': [
				'Secretary',	//秘书部
			    'Literary',	//文艺部
			    'Propaganda',		//宣传部
			    'Sports',		//体育部
			    'Media',		//新媒体
			    'Volunteer',	//志愿者
			    'Research',	//调研部
			    'Life',		//生活部
			    'Quality',		//素拓
			    'Academic',	//学术
			    'Organization',	//组织
			    'Relation',	//外联部
			    'StandingCommittee',	//常委			
			],
			email: Random.email(),
			'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
		});
	};

	let memberNum = Random.integer(60, 110),
		memberList = [];
	for (let i = 0; i<memberNum; i++){
		memberList.push(mock_member());
	}
	return {
		allDepartment: [
			'Secretary',	//秘书部
		    'Literary',	//文艺部
		    'Propaganda',		//宣传部
		    'Sports',		//体育部
		    'Media',		//新媒体
		    'Volunteer',	//志愿者
		    'Research',	//调研部
		    'Life',		//生活部
		    'Quality',		//素拓
		    'Academic',	//学术
		    'Organization',	//组织
		    'Relation',	//外联部
		    'StandingCommittee',	//常委			
	    ],
	    allMember: memberList,
	};
});

//获取所有department
Mock.mock('/admin/department', 'get', function(options){
	return [
		'Secretary',	//秘书部
	    'Literary',	//文艺部
	    'Propaganda',		//宣传部
	    'Sports',		//体育部
	    'Media',		//新媒体
	    'Volunteer',	//志愿者
	    'Research',	//调研部
	    'Life',		//生活部
	    'Quality',		//素拓
	    'Academic',	//学术
	    'Organization',	//组织
	    'Relation',	//外联部
	    'StandingCommittee',	//常委	
	];
});

//获取单个部门的信息
Mock.mock(/\/admin\/department\/.+/, 'get', function(options){
	let mock_member = function (){
		return Mock.mock({
			'studentNumber|001-1000': 1,
			name: Random.cname(),
			'position|1': ['Minister', 'Staff', 'StandingCommittee'],
			'phone|10000000000-99999999999': 1,
			'department|1': [
				'Secretary',	//秘书部
			    'Literary',	//文艺部
			    'Propaganda',		//宣传部
			    'Sports',		//体育部
			    'Media',		//新媒体
			    'Volunteer',	//志愿者
			    'Research',	//调研部
			    'Life',		//生活部
			    'Quality',		//素拓
			    'Academic',	//学术
			    'Organization',	//组织
			    'Relation',	//外联部
			    'StandingCommittee',	//常委			
			],
			email: Random.email(),
			'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
		});
	};

	let data = Mock.mock({
		'id|1-100': 1,
		'name|1': [
			'Secretary',	//秘书部
		    'Literary',	//文艺部
		    'Propaganda',		//宣传部
		    'Sports',		//体育部
		    'Media',		//新媒体
		    'Volunteer',	//志愿者
		    'Research',	//调研部
		    'Life',		//生活部
		    'Quality',		//素拓
		    'Academic',	//学术
		    'Organization',	//组织
		    'Relation',	//外联部
		    'StandingCommittee',	//常委			
		],
		memberList: [],
		description: Random.cparagraph(5, 10),
	});

	let memberNum = Random.integer(9, 15);
	for (let i = 0; i < memberNum; i++){
		data.memberList.push(mock_member());
	}
	// console.log(data);
	return data;
});

//修改personInfo
Mock.mock('/member', 'put', function (options){
	console.log('put member:', options);
});

//Admin对用户操作
Mock.mock('/admin/member', 'put', function (options){
	console.log('admin put member: ', options);
});
Mock.mock(/\/admin\/member\/\d+/, 'delete', function (options){
	console.log('admin delete member: ', options);
});
Mock.mock('/admin/member', 'post', function (options){
	console.log('admin post member', options);
});

//提交申请表单
Mock.mock(/\/application\/\w+/, 'post', function(options){
	console.log(typeof options.body);
	console.log(JSON.parse(options.body));
	console.log(options);
	// return {};
});

//修改权限
Mock.mock(/\/authority\/.+\/\d+/, 'post', function(options){
	console.log('authority', options);
});


//获取部门信息
Mock.mock('/department', 'get', function(){
	let mock_member = function (){
		return Mock.mock({
			'studentNumber|001-1000': 1,
			name: Random.cname(),
			'position|1': ['Minister', 'Staff', 'StandingCommittee'],
			'phone|10000000000-99999999999': 1,
			'department|1': [
				'Secretary',	//秘书部
			    'Literary',	//文艺部
			    'Propaganda',		//宣传部
			    'Sports',		//体育部
			    'Media',		//新媒体
			    'Volunteer',	//志愿者
			    'Research',	//调研部
			    'Life',		//生活部
			    'Quality',		//素拓
			    'Academic',	//学术
			    'Organization',	//组织
			    'Relation',	//外联部
			    'StandingCommittee',	//常委			
			],
			email: Random.email(),
			'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
		});
	};

	let data = Mock.mock({
		'id|1-100': 1,
		'name|1': [
			'Secretary',	//秘书部
		    'Literary',	//文艺部
		    'Propaganda',		//宣传部
		    'Sports',		//体育部
		    'Media',		//新媒体
		    'Volunteer',	//志愿者
		    'Research',	//调研部
		    'Life',		//生活部
		    'Quality',		//素拓
		    'Academic',	//学术
		    'Organization',	//组织
		    'Relation',	//外联部
		    'StandingCommittee',	//常委			
		],
		memberList: [],
		description: Random.cparagraph(5, 10),
	});

	let memberNum = Random.integer(9, 15);
	for (let i = 0; i < memberNum; i++){
		data.memberList.push(mock_member());
	}
	// console.log(data);
	return data;
});

//获取notices
Mock.mock('/notice/application', 'get', function(){
	let mockFn = {
		mock_activity: function(){
			return Mock.mock({
				'id|1-100': 1,
				type: 'avtivity',
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					}
				},
			});

		},
		mock_etiquette: function(){
			return Mock.mock({
				'id|1-100': 1,
				type: 'etiquette',
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					}
				},
			});
		},
		mock_host: function (){
			return Mock.mock({
				'id|1-100': 1,
				type: 'host',
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					}
				},
			});
		},
		mock_poster: function (){
			return Mock.mock({
				'id|1-100': 1,
				type: 'poster',
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					}
				},
			});
		},
		mock_lectureTicket: function (){
			return Mock.mock({

				'id|1-100': 1,
				type: 'lectureTicket',
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					}
				},
			});
		}
	};

	let data = Mock.mock({
		'type|1': ['etiquette', 'host', 'lectureTicket', 'poster'],
	});

	let arr= [];
	let num = Random.integer(5, 20);
	for (let i = 0; i < num; i++){
		arr.push(mockFn['mock_'+data.type]());
	}
	// console.log(arr);
	return arr;
});


//根据id获取detail
Mock.mock(/\/application\/.+\/\d+/, 'get', function(options){
	// console.log('options', options);
	let mockFn = {
		mock_activity: function(){
			return Mock.mock({
				'id|1-100': 1,
				activityBasicInfo: {
					name: Random.ctitle(3, 10),
					startTime: Random.date('yyyy-mm-dd'),
					endTime: Random.date('yyyy-mm-dd'),
					description: Random.cparagraph(3, 7),
				},
				activitySupplementaryInfo: {
					"background": Random.cparagraph(3, 7),
				    "objective": Random.cparagraph(3, 7),
				    "organizer": Random.csentence(3, 7),
				    "hostUnit": Random.csentence(3, 7),
				    "expectedNumOfParticipants": Random.integer(50, 100),
				    "note": Random.cparagraph(3, 7),
				},
				checkInfo: {
					'checkStatus|1': ['passed', 'checking', 'nopassed'],
					checkFeedback: Random.cparagraph(3, 7),
					submissionDate: Random.date('yyyy-mm-dd'),
					checkDate: Random.date('yyyy-mm-dd'),
					initializer: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					}
				},
			});
		},

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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
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

	let type = Mock.mock({
		'type|1': ['activity', 'etiquette', 'host', 'poster', 'lectureTicket'],
	}).type;
	let result = mockFn['mock_' + type]();
	if (type === 'activity'){
		result.Etiquette = mockFn.mock_etiquette();
		result.Poster = mockFn.mock_poster();
		result.Host = mockFn.mock_host();
		result.LectureTicket = mockFn.mock_lectureTicket();
		console.log('type', type);
		console.log('result', result);
	}
	return result;
});

//获取活动列表
Mock.mock('/application/activity', 'get', function(){
	let mockFn = {
		mock_activity: function(){
			return Mock.mock({
				'id|1-100': 1,
				activityBasicInfo: {
					name: Random.ctitle(3, 10),
					startTime: Random.date('yyyy-mm-dd'),
					endTime: Random.date('yyyy-mm-dd'),
					description: Random.cparagraph(3, 7),
				},
				activitySupplementaryInfo: {
					"background": Random.cparagraph(3, 7),
				    "objective": Random.cparagraph(3, 7),
				    "organizer": Random.csentence(3, 7),
				    "hostUnit": Random.csentence(3, 7),
				    "expectedNumOfParticipants": Random.integer(50, 100),
				    "note": Random.cparagraph(3, 7),
				},
				checkInfo: {
					'checkStatus|1': ['passed', 'checking', 'nopassed'],
					checkFeedback: Random.cparagraph(3, 7),
					submissionDate: Random.date('yyyy-mm-dd'),
					checkDate: Random.date('yyyy-mm-dd'),
					initializer: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					}
				},
			});
		},

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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
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
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
					},
					lastModifier: {
						'studentNumber|001-1000': 1,
						name: Random.cname(),
						'position|1': ['Minister', 'Staff', 'StandingCommittee'],
						'phone|10000000000-99999999999': 1,
						'department|1': [
							'Secretary',	//秘书部
						    'Literary',	//文艺部
						    'Propaganda',		//宣传部
						    'Sports',		//体育部
						    'Media',		//新媒体
						    'Volunteer',	//志愿者
						    'Research',	//调研部
						    'Life',		//生活部
						    'Quality',		//素拓
						    'Academic',	//学术
						    'Organization',	//组织
						    'Relation',	//外联部
						    'StandingCommittee',	//常委			
						],
						'authorities|1-4': [ 'Etiquette', 'Poster', 'LectureTicket', 'Host' ],
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
	let activities = [];
	let activityNUm = Random.integer(5, 20);
	for (let i = 0; i<activityNUm; i++){
		let result = mockFn.mock_activity();
		result.Etiquette = mockFn.mock_etiquette();
		result.Poster = mockFn.mock_poster();
		result.Host = mockFn.mock_host();
		result.LectureTicket = mockFn.mock_lectureTicket();
		activities.push(result);
	}

	return activities;
});