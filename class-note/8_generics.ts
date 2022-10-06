// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText('hi'); // 문자열 hi
// logText(true); // 진위값 true

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText('hi'); // logText<"hi">(text: "hi"): "hi"
// logText<string>('hi'); // logText<string>(text: string): string

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// logText('a');
// logText(10);
// logText(true); // logText(text: any): any

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

// interface에 generic 선언 방법
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: 'asd', selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: Dropdown<string> = {
  value: 'asc',
  selected: false,
};

// generic의 타입 제한 - 엄격하게 적용
// function logTextLength<T>(text: T[]): T[] {
//   // console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }

// logTextLength<string>(['hi', 'abc']);

// generic 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength('asd');
logTextLength({ length: 10 });

// generic 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('price');
