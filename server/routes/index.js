module.exports = function (app, express) {
  require('./users')(app, express);
  require('./document')(app, express);

  // home route
  app.get('/*', function home(req, res) {
    res.sendFile('index.html', {
      root: './public/'
    });
  });
};
