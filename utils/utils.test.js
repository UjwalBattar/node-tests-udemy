const utils = require('./utils');

it('should add two numbers', () => {
    let res = utils.add(33, 11);

    if (res !== 44) {
        throw new Error(`Expected 44, got ${res}`);
    }
});

it('should square a numbers', () => {
    let res = utils.square(4);

    if (res !== 16) {
        throw new Error(`Expected 16, got ${res}`);
    }
});