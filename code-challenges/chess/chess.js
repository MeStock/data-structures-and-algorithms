'use strict';

function _locatePieces(array){
  const locations = new Map();
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[i][j] !== typeof 'number'){
        locations.set(array[i][j], [i,j]);
      }
    }
  }
  return locations;
}

function _calculateRook(rookCoordinates, kingCoordinates){
  const BOARD_DIMENSION = 8;
  for(let i = 0; i < BOARD_DIMENSION; i++ ){
    if(kingCoordinates === rookCoordinates){
      return true;
    }
    rookCoordinates[0] += i;
  }
  return false;
}

function _calculateBishop(bishopCoordinates, kingCoordinates){
  const BOARD_DIMENSION = 8;
  for(let i = 0; i < BOARD_DIMENSION; i++){
    if(kingCoordinates === bishopCoordinates){
      return true;
    }
    bishopCoordinates[0] += i;
    bishopCoordinates[1] += i;
  }
  return false;
}

function checkChessBoard(array){
  const BOARD_DIMENSION = 8;
  if(!array || array.length < BOARD_DIMENSION) return null;
  const pieceLocations = _locatePieces(array);
  const kingCoordinates = pieceLocations.get('k');
  const bishopCoordinates = pieceLocations.get('b');
  const rookCoordinates = pieceLocations.get('r');

  return _calculateRook(rookCoordinates, kingCoordinates) && _calculateBishop(bishopCoordinates, kingCoordinates);
}

module.exports = checkChessBoard;
