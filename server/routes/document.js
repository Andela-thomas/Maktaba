// require the document hndler

var docHandler = require('../controllers/document');

module.exports = function (app, express) {
  var router = express.Router();
  router.route('/documents')
    .post(docHandler.createDocument)
    .get(docHandler.getAllDocuments);

  router.route('/documents/:id')
    .get(docHandler.getDocument)
    .put(docHandler.updateDocument)
    .delete(docHandler.deleteDocument);
  // All the api should start with prefix api
  app.use('/api', router);
};
