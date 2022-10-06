// 타입 단언
let pen;
pen = 20;
pen = 'pen';
let pencil = pen as string;

// DOM API 조작
// <div id="app">hi</div>;

const div = document.querySelector('#app');
if (div) {
  div.innerText;
}
