const KeyToStr = {
	postname: '申请人',
	postdapart: '申请部门',
	posttime: '申请时间',
	actname: '活动名称',
	actaddr: '活动地点',
	acttime: '活动时间',
	others: '备注',
	actback: '活动背景', // 活动申请
	actaim: '活动目的',
	acttime_s: '活动开始时间',
	acttime_e: '活动结束时间',
	actintro: '活动简介',
	hostunit: '主办单位',
	organizer: '承办单位',
	target: '面向对象',

	etinum: '申请人数', // 礼仪申请
	etiwork: '礼仪工作',

	lendtime: '借用时间', // 秘书物资申请
	backtime: '归还时间',
	needs: '物资清单',

	newddl: '提交时间', // 新媒体
	newwork: '申请项目',
	newothers: '特定要求',

	repddl: '提交时间', // 记者团
	repwork: '申请项目',
	repothers: '特定要求',
	
	rehtime: '彩排时间', // 主持人
	number: '申请人数',
	
	dlytime: '交付时间', // 宣传
	pubintro: '活动简介',
	pubneeds: '物资清单',
	pubcontent: '文字内容',
	pubothers: '其他要求',
	
	tiktype: '分数类型', // 讲座票
	tikscore: '分值'
};

//表单名
const ToFormName = {
	activity: '活动申请表',
	etiquette: '礼仪队申请表',
	material: '秘书物资申请表',
	newmedia: '新媒体申请表',
	presenter: '主持人申请表',
	publicity: '宣传物资申请表',
	reporter: '记者团申请表',
	ticket: '讲座票申请表'
};

export {
	KeyToStr,
	ToFormName,
};
