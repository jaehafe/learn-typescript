interface User {
  age: number;
  name: string;
}

// 변수에 interface 활용
let adam: User = {
  age: 29,
  name: '애덤',
};

// 함수에 interface 활용
function getUser(user: User) {
  console.log(user);
}
const john = {
  name: '존',
  age: 22,
};
getUser(john);

// 함수의 스펙(구조)에 interface 활용
interface SumFunction {
  (a: number, b: number): number;
}
let sum: SumFunction;
sum = function (a: number, b: number): number {
  return a + b;
};

// 인덱싱
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
};
// obj['cssFile'] = 'a';

Object.keys(obj).forEach(function (value) {});

// interface 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person {
  language: string;
}

let maria: Developer = {
  language: 'js',
  name: 'maria',
  age: 29,
};
