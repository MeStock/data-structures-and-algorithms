'use strict';

const leftJoin = require('../code-challenges/leftjoin/leftjoin.js');

describe('left join', () => {
  it('should join two hashmaps together', () => {
    const test1 = new Map();
    test1.set('k1', 'v1');
    test1.set('k2', 'v2');
    test1.set('k3', 'v3');

    const test2 = new Map();
    test2.set('k1', 'v21');
    test2.set('k2', 'v22');
    test2.set('k3', 'v23');

    const answer = { k1: [ 'v1', 'v21' ], k2: [ 'v2', 'v22' ], k3: [ 'v3', 'v23' ] };
    expect(leftJoin(test1,test2)).toEqual(answer);
  });

  it('should add a null to the new object if the value does not exist to be added', () => {
    const test1 = new Map();
    test1.set('k1', 'v1');
    test1.set('k2', 'v2');
    test1.set('k3', 'v3');

    const test2 = new Map();
    test2.set('k1', 'v21');
    test2.set('k2', 'v22');

    const answer = { k1: [ 'v1', 'v21' ], k2: [ 'v2', 'v22' ], k3: [ 'v3', null ] };
    expect(leftJoin(test1,test2)).toEqual(answer);
  });

  it('should return null if the inputs are invalid', () => {
    const test = new Map();

    expect(leftJoin()).toBeNull;
    expect(leftJoin(test)).toBeNull;
  });
});
