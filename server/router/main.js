module.exports = function(app)
{
  app.get('/', function(req, res) {
	res.render('index', {
		title: "MY HOMEPAGE",
		lengh: 5
	});
  });
}
