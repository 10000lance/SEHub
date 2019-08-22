const formName = {
	activity: '活动申请表',
	etiquette: '礼仪队申请表',
	material: '秘书物资申请表',
	newmedia: '新媒体申请表',
	host: '主持人申请表',
	poster: '宣传物资申请表',
	reporter: '记者团申请表',
	lectureTicket: '讲座票申请表'
};

const formKeys = {
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
	rehearsalTime: '排练时间',
	rehearsalSite: '排练地点',
	// note: '备注',
	descOfJob: '工作描述',

//讲座票申请
	// actTime: '活动时间',
	numOfTicket: '申请数量',
	ticketType: '分数类型',
	ticketScore: '分值',
	note: '备注',

//宣传海报申请表
	// actTime: '活动时间',
	deadline: '交付时间',
	propagandaTextRequirement: '宣传文字要求',
	posterSize: '海报大小',
	note: '备注',
	// publicityNeeds: '申请物资',	
	// publicityNote: '特殊要求',

//记者团申请
	// actTime: '活动时间',
	// reporterJobs: '申请项目',	//[string, string]
	// reporterNote: '特殊要求',

//秘书物资申请
	// lendTime: '借用时间',
	// backTime: '归还时间',
	// needs: '物资清单', // [{name: string, num: int}, {name: string, num: int}]
	// note: '备注',

//新媒体申请
	// actTime: '活动时间',
	// deadline: '交付时间',
	// newmediaJobs: '申请项目',	//[string, string]
	// newmediaNOte: '特定要求',	
};