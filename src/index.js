import { HashMap } from "./hashMap";

let map = new HashMap();
map.set('keyOne', 'valueOne');
map.set('keyTwo', 'valueTwo');
map.set('keyThree', 'valueThree');
map.keys();
map.set('keyFour', 'valueFour');
map.keys();
map.values();
map.entries();