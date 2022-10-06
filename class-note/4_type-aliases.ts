interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// };

const john: Person = {
  name: '존',
  age: 30,
};

type Mystring = string;
const str: Mystring = 'hello';

type Todo = {
  id: string;
  title: string;
  done: boolean;
};
function getTodo(todo: Todo) {}
