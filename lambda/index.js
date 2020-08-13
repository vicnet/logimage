var app = require('./the.js')('LogimageBackend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');
