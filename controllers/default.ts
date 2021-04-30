exports.install = function() {
	ROUTE('GET /', function() {
		this.json('Hello, World!');
	});
};