// Require the user handler
// We will use the handler to process data passed into our routers
var User = require('../controllers/user');

module.exports = function(app, express) {
  var router = express.Router();

  router.route('/users/login')
    .post(User.loginUser);

  router.route('/users/logout')
    .post(User.logoutUser);

  router.route('/users')
    .post(User.createUser)
    .get(User.getAllUsers);

  // verify user middleware
  router.use(User.verifyUser);

  router.route('/users/:id')
    .get(User.getUser)
    .put(User.updateUser)
    .delete(User.deleteUser);

  router.route('/users/:id/documents')
    .get(User.getDocumentByUserId);

  // All the api should start with prefix api
  app.use('/api', router);
};
