import { HashMap } from "./hashMap";

let map = new HashMap();

map.set('keyOne', 'valueOne');
map.set('keyTwo', 'valueTwo');
map.set('keyThree', 'valueThree');
map.set('keyFour', 'valueFour');
map.remove('keyFour');
map.set('keyFive', 'valueFive');
map.set('keySix', 'valueSix');
map.set('keySeven', 'valueSeven');
map.set('keyEight', 'valueEight');
map.set('keyNine', 'valueNine');
map.set('keyTen', 'valueTen');
map.set('keyEleven', 'valueEleven');

console.log(map);
map.set('keyTwelve', 'valueTwelve');
map.set('keyTwelve', 'newValue');
map.set('keyThirteen', 'valueThirteen');
console.log(map);

map.get('keyTwo');
map.has('keyThree');

console.log(map);
map.keys();
map.values();
map.entries();
