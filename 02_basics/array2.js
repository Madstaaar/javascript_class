const a=[1,2,3,4,4]
const b=[4,5,2,3]
// console.log(a.push(b));
// console.log(a);

//combine in single
// const c=a.concat(b)
// console.log(c);

//spread operator
const d=[...a,...b]
console.log(d);

//flat
const ar=[12,34,56,[4,3,6],34,[43,[3,1]],9]
let cr=ar.flat(Infinity)
console.log(cr);

//from

const arw="hitesh"
// console.log(Array.isArray());

console.log(Array.from(arw));

let abc=44
let cde=34
let rdt=78
let gfd=56
console.log(Array.of(abc,cde,rdt,gfd))




