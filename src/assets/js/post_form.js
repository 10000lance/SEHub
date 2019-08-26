//post表单数据结构

const activityForm = {
	activityBasicInfo: {
		name: 'string',			//中文
		startTime: 'yyyy-mm-dd',
		endTime: 'yyyy-mm-dd',
		description: 'string',	//中文
		location: 'string',		//中文
	},

	activitySupplementaryInfo: {
		background: 'string',	//中文
		objective: 'string',	//中文
		hostUnit: 'string',		//中文
		organizer: 'string',	//中文
		expectedNumOfParticipants: 'int',
		note: 'string',		//中文
	},

//从属表,如果没有的话，值为null；
	etiquette: {
		numOfEtiquette: 'int',
		etiquetteJobs: 'string',	//中文
		rehearsalTime: 'yyyy-mm-dd',
		rehearsalSite: 'string',	//中文
		descOfJob: 'string',	//中文
	},
	host: {
		numOfHost: 'int',
		rehearsalTime: 'yyyy-mm-dd',
		rehearsalSite: 'string',	//中文
		descOfJob: 'string',	//中文
	},
	lectureTicket: {
		numOfTicket: 'int',
		ticketType: 'string',
		ticketScore: 'string',
		// note: 'string',		//中文
	},
	poster: {
		deadline: 'yyyy-mm-dd',
		propagandaTextRequirement: 'string',	//中文
		posterSize: 'string',
		// note: 'string',		//中文
	},
};

const etiquetteForm = {
	activityBasicInfo: {
		name: 'string',		//中文
		startTime: 'yyyy-mm-dd',
		endTime: 'yyyy-mm-dd',
		description: 'string',		//中文
	},

	numOfEtiquette: 'int',
	etiquetteJobs: ['string', 'string'],	//中文
	rehearsalTime: 'yyyy-mm-dd',
	rehearsalSite: 'string',		//中文
	descOfJob: 'string',		//中文


//如果有从属于已申请过的活动申请表的话，值为该活动申请表的ID; 没有的话，值为null
	activityThisBelongsTo: 'activityID',
};

//其他表结构同etiquetteForm
