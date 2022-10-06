function logMessage(value: any) {
  console.log(value);
  value;
}

// logMessage('hello');
// console.log(100);
// logMessage(false);

const peter: string | number | boolean;
function logMessage(value: string | number) {
  // 유니온 타입(1개 이상의 타입 사용 가능)
  if (typeof value === 'number') {
    value.toLocaleString();
  }
  if (typeof value === 'string') {
    value.toString();
  }
  throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   // someone.name;
// }
// askSomeone({ name: '디벨로퍼', skill: '웹 개발' });
// askSomeone({ name: '캡틴', skill: '12' });

// & 연산자를 이용한 인터섹션
// let jordan: string | number | boolean;
// let freddy: string & number & boolean;

function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.age;
  someone.skill;
}
askSomeone({ name: '디벨로퍼', skill: '웹 개발', age: 12 });
