module.exports = function(app) {

	app.use('/api/city', require("./api/city"));

	app.get('*', function(req, res) {
		res.status(404).json({"err" : "page not found"});
	});
};