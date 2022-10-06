enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

let myShoes = Shoes.Nike;
console.log(myShoes); // 나이키

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log('정답');
  }
  if (answer === Answer.No) {
    console.log('오답');
  }
}
askQuestion(Answer.Yes); // enum에서 넘기는 값만 사용 가능
// askQuestion('Yes') // 오류
