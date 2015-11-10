module.exports = function(app, express, config) {
  require('./users')(app, express, config);
  require('./document')(app, express);

  // home route
  app.get('/*', function home(req, res) {
    res.sendFile('index.html', {
      root: './public/'
    });
  });
};
