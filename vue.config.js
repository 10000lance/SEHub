module.exports = {
	assetsDir: 'static',
	devServer: {
		port: 8080,
		// proxy: {
		// 	'/login': {
		// 		target: 'http://localhost:8081',
		// 		ws: true,
		// 		changeOrigin: true,
		// 		secure: false,
		// 		onProxyRes: function(proxyRes, req, res) {
		//           	var cookies = proxyRes.headers['set-cookie'];
		//           	console.log('login:', cookies);
		//           	var cookieRegex = /Domain=\.?xxx.com/i; // 返回的cookie中提取domain
		//           	//修改cookie Path
		//           	if (cookies) {
		//             var newCookie = cookies.map(function(cookie) {
		//               	if (cookieRegex.test(cookie)) {
		//               	// 将domain设置为localhost
		//                 return cookie.replace(cookieRegex, 'Domain=localhost');
		//               	}
		//               	return cookie;
		//             });
		//             delete proxyRes.headers['set-cookie'];
		//             proxyRes.headers['set-cookie'] = newCookie;
		//           	}
		//         }
		//     },

		//     '/admin': {
		// 		target: 'http://localhost:8081',
		// 		ws: true,
		// 		changeOrigin: true,
		// 		secure: false,
		// 		onProxyRes: function(proxyRes, req, res) {
		//           	var cookies = proxyRes.headers['set-cookie'];
		//           	console.log('/admin:', cookies);
		//           	var cookieRegex = /Domain=\.?xxx.com/i; // 返回的cookie中提取domain
		//           	//修改cookie Path
		//           	if (cookies) {
		//             var newCookie = cookies.map(function(cookie) {
		//               	if (cookieRegex.test(cookie)) {
		//               	// 将domain设置为localhost
		//                 return cookie.replace(cookieRegex, 'Domain=localhost');
		//               	}
		//               	return cookie;
		//             });
		//             delete proxyRes.headers['set-cookie'];
		//             proxyRes.headers['set-cookie'] = newCookie;
		//           	}
		//         },
		//          cookieDomainRewrite: "localhost",		    	
		//     }
		// }
		proxy: 'http://localhost:8081',
		// proxy: 'http://47.101.130.113:8081',
	}
};
