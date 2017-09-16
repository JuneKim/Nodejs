var events = require("events");

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
	console.log("Connection success");
	eventEmitter.emit("data_received");
}

eventEmitter.on("connection", connectHandler);

eventEmitter.on("data_received", function() {
	console.log("data received");
});

eventEmitter.emit("connection");
console.log("program has ended");
