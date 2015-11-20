module.exports = {
  isDocData: function(response) {
    var defined = false;
    for (var key in response) {
      var doc = response[key];

      if (doc.title) {
        defined = true;
      } else if (doc.content) {
        defined = true;
      } else if (doc.dateCreated) {
        defined = true;
      } else if (doc.lastModified) {
        defined = true;
      }
    }
    return defined;
  },

  isUserData: function(response) {
    var defined = false;
    for (var key in response) {
      var user = response[key];

      if (user.username) {
        defined = true;
      } else if (user.name.first && user.name.last) {
        defined = true;
      } else if (user.email) {
        defined = true;
      } else if (user.password) {
        defined = true;
      }
      return defined;
    }
  }
};
