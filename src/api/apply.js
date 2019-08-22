import axios from 'axios';
axios.defaults.headers.post['Content-Type'] = 'application/json';

const toApiUrl = {
	activity: '/application/activity',
	etiquette: '/application/etiquette',
	host: '/application/host',
	poster: '/application/poster',
	lectureTicket: '/application/lecture-ticket',
};

export function apiApplyForm (formType, form, callback) {
	let url = toApiUrl[ formType ];
	// console.log(url);
  	axios.post(url, form)
		.then(res => {
			callback(res);
		});
	// console.log(form);
	// console.log('api send');
	// // console.log(form)
	// callback();
}
