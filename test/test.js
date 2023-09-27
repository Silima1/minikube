var request = require('supertest');
var app = require('../index.js');
describe('GET /europe', function() {
    it('respond with countries', function(done) {
        request(app).get('/europe').expect('{ "response": "All countries from europe" }', done);
    });
});