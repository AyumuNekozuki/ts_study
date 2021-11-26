let hasValue = true;

let count = 10;
let float = 3.14;
let negative = -0.12;

let single = 'hello';
let double = "hello";
let back = `hello`;

let hello: string;
hello = 'hello';

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
}

const person2: object ={
// const person2: {} ={
  name: 'jack',
  age: 21
}
// console.log(person2.name); //エラーになる

const fruits: string[] = ['Apple', 'Banana', 'Grape'];
const fruit = fruits[0];

const book: [string, number, boolean] = ['business', 1500, false];
// book.push(21);  // 追加時エラーは出ない
// console.log(book[3]); //参照時にエラーをだす


//sec2-18まで　19から