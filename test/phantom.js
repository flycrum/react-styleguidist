const system = require('system');

/* eslint-disable no-console */
/* globals phantom:false */

if (system.args.length !== 2) {
	console.log('Usage: phantom.js <URL>');
	phantom.exit(1);
}

const page = require('webpage').create();
phantom.onError = page.onError = function(err) {
	console.log(err);
	phantom.exit(1);
};

page.open(system.args[1], function(status) {
	if (status !== 'success') {
		console.log('Cannot load the page');
		phantom.exit(1);
	}
});
