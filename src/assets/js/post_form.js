//post表单数据结构

const activityForm = {
	activityBasicInfo: {
		name: 'string',
		startTime: 'yyyy-mm-dd',
		endTime: 'yyyy-mm-dd',
		description: 'string',
	},

	activitySupplementaryInfo: {
		background: 'string',
		objective: 'string',
		hostUnit: 'string',
		organizer: 'string',
		expectedNumOfParticipants: 'int',
		note: 'string',
	},

//从属表,如果没有的话，值为null；
	etiquette: {
		numOfEtiquette: 'int',
		etiquetteJobs: ['string', 'string'],
		rehearsalTime: 'yyyy-mm-dd',
		rehearsalSite: 'string',
		descOfJob: 'string',
	},
	host: {
		numOfHost: 'int',
		rehearsalTime: 'yyyy-mm-dd',
		rehearsalSite: 'string',
		descOfJob: 'string',
	},
	lectureTicket: {
		numOfTicket: 'int',
		ticketType: 'string',
		ticketScore: 'string',
		note: 'string',
	},
	poster: {
		deadline: 'yyyy-mm-dd',
		propagandaTextRequirement: 'string',
		posterSize: 'string',
		note: 'string',
	},
};

const etiquetteForm = {
	activityBasicInfo: {
		name: 'string',
		startTime: 'yyyy-mm-dd',
		endTime: 'yyyy-mm-dd',
		description: 'string',
	},

	numOfEtiquette: 'int',
	etiquetteJobs: ['string', 'string'],
	rehearsalTime: 'yyyy-mm-dd',
	rehearsalSite: 'string',
	descOfJob: 'string',


//如果有从属于已申请过的活动申请表的话，值为该活动申请表的ID; 没有的话，值为null
	activityThisBelongsTo: 'activityID',
};

//其他表结构同etiquetteForm
