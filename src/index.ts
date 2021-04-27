import multiply, { multiplyByTwo as mBy2 } from "./multiply";

const a = 3;
const b = 2;

console.log(`${a} * ${b} = ${multiply(a, b)}`);
mBy2(2);


// ways2
// import * as multiplyModule from './multiply';

// const a = 3;
// const b = 2;

// console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
// multiplyModule.multiplyByTwo(2);