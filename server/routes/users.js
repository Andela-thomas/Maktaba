// Require the user handler
// We will use the handler to process data passed into our routers
var userHandler = require('../controllers/user');

module.exports = function (app, express) {
  var router = express.Router();

  router.route('/users/login')
    .post(userHandler.loginUser);

  router.route('/users/logout')
    .post(userHandler.logoutUser);

  router.route('/users')
    .post(userHandler.createUser)
    .get(userHandler.getAllUsers);

  router.route('/users/:id')
    .get(userHandler.getUser)
    .put(userHandler.updateUser)
    .delete(userHandler.deleteUser);
  router.route('/users/:id/documents')
    .get(userHandler.getDocumentByUserId);

  // All the api should start with prefix api
  app.use('/api', router);
};
