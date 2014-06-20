/**
 * index.js
 * Entry point into chirp-bearer
 *
 * (C) Steven White 2014
 */

var request = require('request'),
	authUrl = 'https://api.twitter.com/oauth2/token',
	authBody = 'grant_type=client_credentials';

module.exports = function (key, secret) {

	// Encode key / secret
	var auth = (new Buffer(key + ':' + secret)).toString('base64');

	/**
	 * get
	 * - Get new bearer token
	 */
	function get (cb) {
		request({
			method: 'POST',
			uri: authUrl,
			headers: {
				Authorization: 'Basic ' + auth,
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
			},
			body: authBody
		}, function (err, res, body) {
			if (err) return cb(err);
			if (res.statusCode >= 400) return cb(body);
			cb(null, body);
		});
	}

	return {
		get: get
	};
};
