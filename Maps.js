/*
* MAPS    
We don't get Duplicate values. We only get Unique values.
Map is itself is an object.
We set a key-value pair.
*/

const map = new Map()   // we created its object first 

map.set('IN', "India")
map.set('US', "United States")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

/* OUTPUT
Map(3) {
  'IN' => 'India',
  'US' => 'United States',
  'FR' => 'France'
*/

// Now, we try giving Iterator as "Key" and "Value"
for(const [key, value] of map){
    console.log(key, ' :- ' , value );
}

/* OUTPUT 
IN :-  India
US :-  United States
FR :-  France
*/
// _____________________________________________________________________________________________________________

// Now, we will try operating FOR-OF loop on "Strings"
const myObject = {
    'game1': 'NFS',
    'game2': 'IGI'
}

for(const [key, value] of myObject){
    console.log((key, ":-", value));
}

// It will throw an error: myObject is not iterable. 