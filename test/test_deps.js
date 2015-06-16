var window = require('window');
require('script!mocha');
var chai = require('chai');
window.chai = chai;
var mocha = window.mocha;
mocha.ui('bdd');
mocha.reporter('html');
window.expect = chai.expect;

if(!window.mochaPhantomJS) {
  require('mocha/mocha.css');
}
