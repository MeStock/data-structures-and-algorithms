'use strict';

const checkChessboard = require('../code-challenges/chess/chess.js');

describe('chess board', () => {
  it('should return true is the king can be reached', () => {
    const test = [
      [0,0, 0, 0,0,0,0,0],
      [0,0,'r',0,0,0,0,0],
      [0,0, 0, 0,0,0,0,0],
      [0,0,0,0,'k',0,0,0],
      [0,0, 0, 0,0,0,0,0],
      [0,0, 0, 0,0,0,0,0],
      [0,'b',0,0,0,0,0,0],
      [0,0, 0, 0,0,0,0,0]
    ];
    expect(checkChessboard(test)).toBeTruthy;
  });
  it('should return false if the king cant be reached', () => {
    const test = [
      [0,0, 0, 0,0,0,0,0],
      [0,0,'r',0,0,0,0,0],
      [0,0, 0, 0,0,0,0,0],
      [0,0,0,0,'k',0,0,0],
      [0,0, 0, 0,0,0,0,0],
      [0,0, 0, 0,0,0,0,0],
      ['b',0,0,0,0,0,0,0],
      [0,0, 0, 0,0,0,0,0]
    ];
    expect(checkChessboard(test)).toBeFalsey;
  });
  it('should reject invalid inputs', () => {
    expect(checkChessboard()).toBeNull();
    expect(checkChessboard([])).toBeNull();
    expect(checkChessboard([[],[],[]])).toBeNull();
  });
});
