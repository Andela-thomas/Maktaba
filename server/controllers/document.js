var Doc = require('../models/document'),
  docHandler = {
    createDocument: function(req, res) {
      if (req.body === undefined) {
        res.json({
          message: 'Please provide document data'
        });
      } else {
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
      }
    },

    getAllDocuments: function(req, res) {
      Doc.find({}, function(err, docs) {
        if (err) {
          res.status(404).send({
            error: 'Documents not found'
          });
        }
        res.json(docs);
      });
    },

    getDocument: function(req, res) {
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

    updateDocument: function(req, res) {
      Doc.update({
        _id: req.params.id
      }, {
        $set: {
          title: req.body.title,
          content: req.body.content
        }
      }, function(err) {
        if (err)
          res.status(500).send({
            error: 'Update failed'
          });
        else
          res.status(200).send({
            message: 'Update succesful'
          });
      });
    },

    deleteDocument: function(req, res) {
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
