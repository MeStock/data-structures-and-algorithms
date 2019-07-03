/* eslint-disable no-fallthrough */
'use strict';

const makeFlag = array => {
  if(!array) return null;
  let center = Math.floor((array.length - 1) / 2);
  let b = 0;
  let w = 0;
  let firstBlue;
  let lastBlue;
  let firstWhite;
  let lastWhite;

  const _swap = (items, indexA, indexB) => {
    const helper = items[indexA];

    items[indexA] = items[indexB];
    items[indexB] = helper;
  };

  const _partition = (items, leftIndex, rightIndex) => {
    const pivotIndex = rightIndex;
    let firstHighIndex = leftIndex;


    switch(items[leftIndex]) {
    case 'shield':
      if(leftIndex === center) {
        return;
      }
      else {
        _swap(array, leftIndex, center);
      }
    case 'blue':
      b++;
      if (b < 2) {
        firstBlue = leftIndex;
        if(leftIndex > b) {
          _swap(array, leftIndex, firstBlue);
        }
      }
      else {
        lastBlue = leftIndex;
        if(leftIndex < b) {
          _swap(array, leftIndex, lastBlue);
        }
      }
    case 'white':
      w++;
      if (w < 4 && w > 2) {
        firstWhite = leftIndex;
        if(leftIndex > w) {
          _swap(array, leftIndex, firstWhite);
        }
      }
      else {
        lastWhite = leftIndex;
        if(leftIndex < w) {
          _swap(array, leftIndex, lastWhite);
        }
      }
    default:
      _swap(items, pivotIndex, firstHighIndex);
    }

    return firstHighIndex;
  };

  const _helper = (items, leftIndex, rightIndex) => {

    if (rightIndex > leftIndex) {
      const partitionIndex = _partition(items, leftIndex, rightIndex);

      _helper(items,leftIndex, partitionIndex -1);
      _helper(items, partitionIndex + 1, rightIndex);
    }
  };
  const sort = items => {
    return _helper(items, 0, items.length -1);
  };
  sort(array);
};

module.exports = makeFlag;
