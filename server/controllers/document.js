var Doc = require('../models/document'),
  docHandler = {
    create: function(req, res) {
      Doc.create({
        ownerId: req.body.userId,
        title: req.body.title,
        access: req.body.access,
        content: req.body.content
      }, function(err, doc) {
        if (err)
          res.send(err);
        if (!doc)
          res.status(400).send({
            error: 'Document not created'
          });
        else
          res.json(doc);
      });
    },

    all: function(req, res) {
      Doc.find({}, function(err, docs) {
        if (err) {
          res.status(404).send({
            error: 'Documents not found'
          });
        }
        res.json(docs);
      });
    },

    find: function(req, res) {
      Doc.findOne({
        _id: req.params.id
      }, function(err, docs) {
        if (err) {
          res.status(404).send({
            error: 'Document Not found'
          });
        }
        res.json(docs);
      });
    },

    update: function(req, res) {
      console.log(req.body);
      Doc.update({
        _id: req.params.id
      }, {
        $set: {
          title: req.body.title,
          content: req.body.content
        }
      }, function(err) {
        if (err)
          res.send({
            error: 'Update failed'
          });
        else
          res.status(200).send({
            message: 'Update succesful'
          });
      });
    },

    delete: function(req, res) {
      Doc.remove({
        _id: req.params.id
      }, function(err, ok) {
        if (err) {
          res.status.send(err);
        }
        res.json(ok);
      });
    },
  };

module.exports = docHandler;
