const d = require('lodash');


const items = [1,[2,[4]]]

const newItem = d.flattenDeep(items)

console.log(newItem);