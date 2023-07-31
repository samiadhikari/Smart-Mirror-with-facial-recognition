
let config = require(process.cwd() + "/tests/configs/default.js").configFactory({
	ipWhitelist: []
});

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
	module.exports = config;
}
