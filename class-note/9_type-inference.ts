// 타입 추론 기본1
let a = 10; // let a: number

function getB(b = 10): string {
  let c = 'hi';
  return b + c;
}

10 + '10';

// 타입 추론 기본2
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// let shoppingItem: Dropdown<string> = {
//   value: 'abc',
//   title: 'hello',
// };

// 타입 추론 기본3
interface Dropdown<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
  desc: string;
  tag: T;
}

let detailedItem: DetailedDropdown<number> = {
  title: 'abc',
  desc: 'ab',
  value: 1,
  tag: 2,
};

// Best Common Type
let arr = [1, 2, true, true, 'a'];
