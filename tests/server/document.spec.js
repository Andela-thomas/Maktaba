var request = require('superagent'),
  faker = require('faker'),
  check = require('./helpers'),
  Url = 'http://localhost:3000',
  docId, id, token;


describe('Document resource APi testing', function() {
  var user = {
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    role: 'admin',
    email: faker.internet.email(),
    password: faker.name.findName()
  };
  var credentials = {
    username: user.username,
    password: user.password
  };
  // create user to get the userId
  beforeEach(function(done) {
    request
      .post(Url + '/api/users')
      .send(user)
      .end(function(err, res) {
        var response = JSON.parse(res.text);
        if (res.status === 200) {
          id = response._id;
        }
        done();
      });
  });
  // create user to get the userId
  beforeEach(function(done) {
    request
      .post(Url + '/api/users/login')
      .send(credentials)
      .end(function(err, res) {
        var response = JSON.parse(res.text);
        if (res.status === 200) {
          token = response.token;
        }
        done();
      });
  });

  var doc = {
    userId: '562896f443047a633b99b9f6',
    title: faker.lorem.sentence(),
    access: 'public',
    content: faker.lorem.paragraph()
  };


  describe('Create new Document', function() {
    it('should Create new Document', function(done) {
      request
        .post(Url + '/api/documents?token=' + token)
        .send(doc)
        .accept('application/json')
        .end(function(err, res) {
          var response = JSON.parse(res.text);
          if (res.status === 200) {
            docId = response._id;
            id = response.ownerId;
            expect(response._id).toBeDefined();
            expect(response.ownerId).toBe(doc.userId);
            expect(response.title).toBe(doc.title);
            expect(response.content).toBe(doc.content);
            expect(response.dateCreated).toBeDefined();
            expect(response.lastModified).toBeDefined();
          } else if (res.status == 400) {
            expect(response.error).toBe('Document not created');
          } else {
            expect(response.error).toBe('No token provided');
          }
          done();
        });
    });

    it('should return all documents', function(done) {
      request
        .get(Url + '/api/documents?token=' + token)
        .send({
          token: token
        })
        .end(function(err, res) {
          var response = JSON.parse(res.text);
          if (res.status === 200) {
            expect(res.type).toBe('application/json');
            expect(typeof response).toBe('object');
            expect(response.length).toBeGreaterThan(0);
            expect(check.isDocData).toBeTruthy();
          } else if (res.status === 404) {
            expect(response.error).toBe('Document not found');
          } else {
            expect(response.error).toBe('No token provided');
          }
          done();
        });
    });

    it('should return one document of the specified id', function(done) {
      request
        .get(Url + '/api/documents/' + docId + '?token=' + token)
        .end(function(err, res) {
          var response = JSON.parse(res.text);
          if (res.status === 200) {
            expect(res.type).toBe('application/json');
            expect(typeof response).toBe('object');
            expect(response._id).toBeDefined();
            expect(response.title).toBeDefined();
            expect(response.content).toBeDefined();
            expect(response.dateCreated).toBeDefined();
            expect(response.lastModified).toBeDefined();
          } else if (res.status === 404) {
            expect(response.error).toBe('Document not found');
          } else {
            expect(response.error).toBe('No token provided');
          }
          done();
        });
    });

    it('should return a doument of specified userId', function(done) {
      request
        .get(Url + '/api/users/' + id + '/documents?token=' + token)
        .end(function(err, res) {
          var response = JSON.parse(res.text);
          if (res.status === 200) {
            expect(res.type).toBe('application/json');
            expect(typeof response).toBe('object');
            expect(response.length).toBeGreaterThan(0);
            expect(check.isDocData).toBeTruthy();
          } else if (res.status === 404) {
            expect(response.error).toBe('Document not found');
          } else {
            expect(response.error).toBe('No token provided');
          }
          done();
        });
    });

    it('should update document of specified id', function(done) {
      request
        .put(Url + '/api/documents/' + docId + '?token=' + token)
        .send(doc)
        .accept('application/json')
        .end(function(err, res) {
          var response = JSON.parse(res.text);
          if (res.status === 200) {
            expect(res.type).toBe('application/json');
            expect(typeof response).toBe('object');
            expect(response.message).toBe('Update succesful');
          } else if (res.status === 500) {
            expect(response.error).toBe('Update failed');
          } else {
            expect(response.error).toBe('No token provided');
          }
          done();
        });
    });

    it('should delete document of specified id', function(done) {
      request
        .del(Url + '/api/documents/' + docId + '?token=' + token)
        .end(function(err, res) {
          var response = JSON.parse(res.text);
          if (res.status === 200) {
            expect(res.type).toBe('application/json');
            expect(typeof response).toBe('object');
            expect(response.ok).toBe(1);
            expect(response.n).toBe(1);
          } else if (res.status === 500) {
            expect(response.error).toBe('Delete failed' || 'No token provided');
          } else {
            expect(response.error).toBe('No token provided');
          }
          done();
        });
    });

  });
});
