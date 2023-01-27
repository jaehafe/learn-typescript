const selectTag = document.querySelector(
  '#email-dropdown'
) as HTMLOptionElement;
const selectProduct = document.querySelector(
  '#product-dropdown'
) as HTMLOptionElement;

// interface Email {
//   value: string;
//   selected: boolean;
// }

// interface Product {
//   value: number;
//   selected: boolean;
// }

interface Dropdown<T> {
  value: T;
  selected: boolean;
}

const emails: Dropdown<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Dropdown<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];
// Dropdown<T>[] | Dropdown<number>[]
const createDropDownItem = <T>(items: Dropdown<T>[]) => {
  const template = items
    .map((item) => {
      const { value, selected } = item;
      return `<option value="${value}" selected='${selected}'>${value}</option>`;
    })
    .join('');

  if (items === emails) {
    selectTag.innerHTML = template;
  } else if (items === numberOfProducts) {
    selectProduct.innerHTML = template;
  }
};
createDropDownItem<string>(emails);
createDropDownItem<number>(numberOfProducts);

// function createDropdownItem(item) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });
