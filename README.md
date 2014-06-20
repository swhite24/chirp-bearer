# chirp-bearer

[![Build Status](https://travis-ci.org/swhite24/chirp-bearer.png)](https://travis-ci.org/swhite24/chirp-bearer)
[![NPM version](https://badge.fury.io/js/chirp-bearer.svg)](http://badge.fury.io/js/chirp-bearer)

Simple module to generate an [application-only auth token for twitter](https://dev.twitter.com/docs/auth/application-only-auth).

## Install

```
npm install --save chirp-bearer
```

## Usage

```javascript

var bearer = require('chirp-bearer')('my_consumer_key', 'my_consumer_secret');

bearer.get(function (err, token) {
	console.log('got token: ', token);
});

```