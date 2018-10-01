const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');

    // if (res !== 44) {
    //     throw new Error(`Expected 44, got ${res}`);
    // }
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a numbers', () => {
    let res = utils.square(4);

    expect(res).toBe(16).toBeA('number');
    // if (res !== 16) {
    //     throw new Error(`Expected 16, got ${res}`);
    // }
});

it('should async square a number', (done) => {
    utils.asyncSquare(4, (res) => {
        expect(res).toBe(16).toBeA('number');
        done();
    });
});

it('should expect some value', () => {
    expect({
        name: "Ujwal",
        age: 25,
        location: "California"
    }).toExclude({
        age: 24
    });

    // expect({
    //     name: "Ujwal",
    //     age: 25,
    //     location: "California"
    // }).toInclude({
    //     age: 25
    // });

    // expect([1, 2, 3]).toExclude(5);

    // expect([1, 2, 3]).toInclude(5);

    // expect({
    //     name: "Ujwal"
    // }).toEqual({
    //     name: "Ujwal"
    // });

    // expect(12).toNotBe(12);
});

it('should verify first and last names are set', () => {
    let user = {
        location: "California",
        age: 25
    };

    let res = utils.setName(user, "Ujwal Battar");

    expect(res).toInclude({
        firstName: "Ujwal",
        lastName: "Battar"
    });
});