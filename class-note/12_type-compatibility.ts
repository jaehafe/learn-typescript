// interface
interface Developer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
// }
class Person {
  name: string;
  // skill: string;
}

let devloper: Developer;
let person: Person;

// devloper = new Person(); // err
person = devloper;

//함수
let add = function (a: number) {
  //
};

let sum = function (a: number, b: number) {
  //
};

// add = sum err
sum = add;

// generic
interface Empty<T> {
  //
}
let empty1: Empty<string>;
let empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

// notempty1 = notempty2; // err
