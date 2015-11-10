// Require the user handler
// We will use the handler to process data passed into our routers


module.exports = function(app, express) {
  var router = express.Router(),
    userHandler = require('../handlers/user');
  router.route('/users/login')
    .post(userHandler.loginUser);

  // logout middleware
  router.route('/users/logout')
    .post(userHandler.logoutUser);

  //User routes
  router.route('/users')
    .post(userHandler.createUser)
    .get(userHandler.getAllUsers);

  // verify user middleware
  router.use(userHandler.verifyUser);

  router.route('/users/:id')
    .get(userHandler.getUser)
    .put(userHandler.updateUser)
    .delete(userHandler.deleteUser);

  router.route('/users/:id/documents')
    .get(userHandler.getDocumentByUserId);

  // All the api should start with prefix api
  app.use('/api', router);
};
