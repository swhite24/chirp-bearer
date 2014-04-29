# chirp-bearer

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