const superTest = require('supertest');
const server = require('../api/server');

it('should set db env to testing', function() {
    expect(process.env.DB_ENV).toBe("testing");
})

describe('server', function() {
    describe('GET/', function() {
        it('should return 400, secure missing token', function() {
            return superTest(server).get('/api/jokes').then(res => {
                expect(res.status).toBe(400);
            })
        })
        it('should return JSON formatted res', function() {
            return superTest(server).get('/').then(res => {
                expect(res.type).toMatch("text/html");
            })
        })
    })
}) 