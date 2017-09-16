module.exports = function(app)
{
  app.get('/', function(req, res) {
	res.render('index', {
		title: "MY HOMEPAGE",
		lengh: 5
	});
  });
  app.get('/list', function (req, res) {
    fs.readFile(__dirname + "/../data/" + "user.json", "utf8", function(err, data) {
	  console.log(data);
	  res.end(data);
	});
 });
}
