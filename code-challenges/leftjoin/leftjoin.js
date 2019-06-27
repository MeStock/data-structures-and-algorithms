'use strict';

/*

* Write a function that LEFT JOINs two hashmaps into a single data structure.

* The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.

* The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.

* Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.

LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row.

* If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.

* The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.

* Avoid utilizing any of the library methods available to your language.

*/


function leftJoin(map1, map2){
  if(!map1 || !map2) return null;
  let result = {};
  map1.forEach((value, key) => {
    result[key] = [value];
    if(map2.has(key)){
      result[key][result[key].length] = map2.get(key);
    }else{
      result[key][result[key].length] = null;
    }
  });
  return result;
}

module.exports = leftJoin;
