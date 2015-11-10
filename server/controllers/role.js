(function() {
  var Role = require('../models/roles');

  module.exports = {
    // create roles
    createRole: function(req, res) {
      if (req === undefined) {
        res('Please provide data');
      } else {
        Role.create({
          title: req.body.title,
        }, function(err, role) {
          if (err)
            res.status(500).send({
              error: 'Role creating failed'
            });
          else
            res.json(role);
        });
      }
    },
    //  Get all roles from the datase
    getAllRoles: function(limit, res) {
      Role.find({}, function(err, roles) {
        if (err) {
          res.status(404).send({
            error: 'Roles not found'
          });
        }
        res.json(roles);
      }).limit(limit);
    }
  };
})();
