const superTest = require('supertest');
const server = require('../api/server');
const db = require('../database/dbConfig.js');
const Users = require('../users/users-model.js');

const { add, findBy } = require('../users/users-model.js')

it('should set db env to testing', function() {
    expect(process.env.DB_ENV).toBe("testing");
})

describe('add()', function() {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('should insert a user', async function() {
        await add({username: 'bill', password: 'billyyy boyyy'});
        const users = await db('users');
        expect(users).toHaveLength(1);
    })
    it('should return provided user', async function() {
        user = await add({ username: "betsy", password: 'betsyyy girlll' });
        expect(user.username).toBe('betsy');
        expect(user.id).toBeDefined();

    });
});

describe('findBy()', function() {
    beforeEach(async () => {
        await db('users').truncate();
    })
    it('should find a user', async function() {
        original = await add({username: 'bill', password: 'billyyy boyyy'});
        user = await Users.findBy({username: 'bill'})
        expect(user).toBeDefined();
        expect(user).toMatchObject([original]);
    })
    it('should return the correct user', async function() {
        original = await add({username: 'bill', password: 'billyyy boyyy'});
        user = await Users.findBy({username: 'bill'})
        expect(user).toMatchObject([original]);
    })
});