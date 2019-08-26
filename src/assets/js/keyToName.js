const DEPARTMENT = {
	Secretary: '秘书部',
    Literary: '文艺部',
    Propaganda: '宣传部',
    Sports: '体育部',
    Media: '新媒体',
    Volunteer: '志愿者部',
    Research: '调研部',
    Life: '生活部',
    Quality: '素拓部',
    Academic: '学术部',
    Organization: '组织部',
    Relation: '外联部',
    StandingCommittee: '常委',			
};

const POSITION = {
	Minister: '部长',
	Staff: '干事',
	StandingCommittee: '常委',
    Admin: '系统管理员',
};

const AUTHORITIEES = {
	Etiquette: '审批礼仪申请表',
	Poster: '审批海报申请表',
	LectureTicket: '审批讲座票申请表',
	Host: '审批主持人申请表',
};

//各个部门职责所有列表
const AUTHORITIEESLIST = {
	Secretary: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Literary: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Propaganda: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Sports: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Media: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Volunteer: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Research: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Life: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Quality: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Academic: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Organization: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    Relation: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
    StandingCommittee: ['Etiquette', 'Poster', 'LectureTicket', 'Host',],
};

const TICKETTYPE = {
    DeYu: '德育分',
    ChuangXin: '创新分',
    RenWen: '人文分',
};

export {
	DEPARTMENT,
	POSITION,
	AUTHORITIEES,
	TICKETTYPE,
	AUTHORITIEESLIST,
};