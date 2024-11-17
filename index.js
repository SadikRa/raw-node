const {a, add} = require('./local-1')
const {a: a2 , add: add2} = require('./local-2')

const multi = add( 2, 3 )
const multi2 = add2( 2, 3 , 4)

console.log(multi);
console.log(multi2);