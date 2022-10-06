interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
  something: object;
}

// 1. 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
  // ..
}

// interface ProductDetail {
//   id: number;
//   name: string;
//   price: number;
// }

// 2. 특정 상품의 상세 정보를 나나태기 위한 함수
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem) {
  // ..
}

// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
//   something?: object;
// }

// 3. 특정 상품 정보를 업데이트하는 함수
type UpdateProduct = Partial<Product>;
function updateProductItem(productItem: UpdateProduct) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// #1
type UserProfileUpdate = {
  username?: UserProfile['username'];
  email?: UserProfile['email'];
  profilePhotoUrl?: UserProfile['profilePhotoUrl'];
};

// #2 mapped type
type UserProfileUpdate = {
  [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
};

type UserProfileKeys = keyof UserProfile;

// #3
type UserProfileupdate = {
  [p in keyof UserProfile]?: UserProfile[p];
};

// #4
type Subset<T> = {
  [p in keyof T]?: T[p];
};

// #1 = #2 = #3 = #4
