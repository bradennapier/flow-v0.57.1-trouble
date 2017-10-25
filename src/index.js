// @flow
import bar from './foo/bar';

let num: number = 1;
let numerror: number = 'string';
let string: string = bar();

console.log(num);
console.log(numerror);
console.log(string);
