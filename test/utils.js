var chai = require('chai');


global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;


exports.fs = require('fs');
exports.Sftp = require(__dirname + '/../lib/sftp');
exports.SSH = require(__dirname + '/../lib/ssh');
exports.privateKey = process.env.NODE_SFTP_PRIVATEKEY;
exports.username = process.env.NODE_SFTP_USERNAME;
exports.host = process.env.NODE_SFTP_HOST;