//不能更改的表单项
export function getNotChange (position){
	const MINISTER = [
		// 'studentNumber',
		// 'name',
		'department',
		'position',
		// 'phone',
		// 'email',
	],
	STANDINGCOMMITTEE = [
		// 'studentNumber',
		// 'name',
		'department',
		'position',
		// 'phone',
		// 'email',
	],
	STAFF = [
		'studentNumber',
		'name',
		'department',
		'position',
		// 'phone',
		// 'email',
	],
	ADMIN = [

	];
	let notChange = [];
	switch (position) {
		case 'Minister':
			notChange = MINISTER;
			break;
		case 'Staff':
			notChange = STAFF;
			break;
		case 'StandingCommittee':
			notChange = STANDINGCOMMITTEE;
			break;
		case 'Admin':
			notChange = ADMIN;
			break;
		default:
			notChange = STAFF;
	}
	return notChange;
}