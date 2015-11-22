// require the document hndler

var Document = require('../controllers/document');
module.exports = function(app, express) {
  var router = express.Router();
  router.route('/documents')
    .post(Document.create)
    .get(Document.all);

  router.route('/documents/:id')
    .get(Document.find)
    .put(Document.update)
    .delete(Document.delete);
  // All the api should start with prefix api
  app.use('/api', router);
};
