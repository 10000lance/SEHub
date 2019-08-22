const KeyToStr = {
//基本信息
	name: '活动名称',
	address: '活动地址',
	startTime: '活动开始时间',
	endTime: '活动结束时间',
	description: '活动简介',

//活动申请
	background: '活动背景',
	objective: '面向对象',
	organizer: '承办单位',
	hostUnit: '主办单位',
	// aim: '活动目的',
	expectedNumOfParticipants: '预计参与人数',
	note: '备注',

//礼仪申请
	// actTime: '活动时间',
	etiquetteJobs: '礼仪工作', //[string, string]
	numOfEtiquette: '申请人数',
	rehearsalTime: '排练时间',
	rehearsalSite: '排练地点',
	// note: '备注',
	descOfJob: '工作描述',

//主持人申请
	// actTime: '活动时间',
	numOfHost: '申请人数',
	// rehearsalTime: '排练时间',
	// rehearsalSite: '排练地点',
	// note: '备注',
	// descOfJob: '工作描述',

//讲座票申请
	// actTime: '活动时间',
	numOfTicket: '申请数量',
	ticketType: '分数类型',
	ticketScore: '分值',
	// note: '备注',

//宣传海报申请表
	// actTime: '活动时间',
	deadline: '交付时间',
	propagandaTextRequirement: '宣传文字要求',
	posterSize: '海报大小',
	// note: '备注',	



//#############################################################################################################


	postname: '申请人',
	postdapart: '申请部门',
	posttime: '申请时间',

// 	actname: '活动名称',
// 	actaddr: '活动地点',
// 	acttime: '活动时间',
// 	others: '备注',

// //活动申请
// 	actback: '活动背景',
// 	actaim: '活动目的',
// 	acttime_s: '活动开始时间',
// 	acttime_e: '活动结束时间',
// 	actintro: '活动简介',
// 	hostunit: '主办单位',
// 	organizer: '承办单位',
// 	target: '面向对象', //受众

// //礼仪申请
// 	etinum: '申请人数',
// 	etiwork: '礼仪工作',

// //秘书物资申请
// 	lendtime: '借用时间',
// 	backtime: '归还时间',
// 	needs: '物资清单', // [{name: string, num: int}, {name: string, num: int}]

// //新媒体申请
// 	newddl: '提交时间',
// 	newwork: '申请项目',		//[string, string]
// 	newothers: '特定要求',	//新媒体申请的特定要求，如：“推送排版时请不要更改文章格式”；“做视频时请掐掉某某部分”等

// //记者团申请
// 	repddl: '提交时间',
// 	repwork: '申请项目',
// 	repothers: '特定要求',
	
// //主持人申请
// 	rehtime: '彩排时间',
// 	number: '申请人数',
	
// //宣传物资申请
// 	dlytime: '交付时间',
// 	pubintro: '活动简介',
// 	pubneeds: '物资清单',
// 	pubcontent: '文字内容',
// 	pubothers: '其他要求',
	
// //讲座票申请
// 	tiktype: '分数类型',
// 	tikscore: '分值'
};

//表单名
const ToFormName = {
	activity: '活动申请表',
	etiquette: '礼仪队申请表',
	material: '秘书物资申请表',
	newmedia: '新媒体申请表',
	host: '主持人申请表',
	poster: '宣传物资申请表',
	reporter: '记者团申请表',
	lectureTicket: '讲座票申请表'
};

export {
	KeyToStr,
	ToFormName,
};
