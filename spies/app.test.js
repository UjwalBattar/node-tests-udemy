const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
// app.__get__
// app.__set__

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Ujwal', 25);
        expect(spy).toHaveBeenCalledWith('Ujwal', 25);
    });

    it('should call saveUser with user object', () => {
        var email = 'ujwal@example.com';
        var password = '12345';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({
            email,
            password
        });
    });
});