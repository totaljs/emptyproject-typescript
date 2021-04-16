exports.install = function() {
	ROUTE('GET /regular', function() {
		this.json(true);
	});
};