var remote = require('electron').remote;

var Command = function  () {
	return this;
};

Command.prototype.toggleDevTools = function toggleDevTools() {
	 
	remote.getCurrentWindow().toggleDevTools();
	return false
};

var Plugin = function devTools(client) {
	this.command = new Command();
};

module.exports = Plugin;