## 코로나 세계 현황판 만들기

최종 프로젝트 폴더입니다

## JS 프로젝트에 TS 적용하기

0. JS 파일에 JSDoc으로 타입 시스템 입히기
1. TS의 기본 환경구성
  - [x] NPM 초기화: npm init -y
  - [x] TS 라이브러리 설치: npm i typescript --save-dev
  - [x] TS 설정 파일 생성 및 기본 값 추가: tsconfig.json
  - [x] JS파일을 TS파일로 변환: app.js -> app.ts
  - [x] 터미널에서 `tsc` 명령어로 TS 컴파일

2. 명시적인 `any` 선언
  - `tsconfig.json` 파일에 `noImplicityAny` 값을 `true`로 추가
  - 가능한한 구체적인 타입으로 타입 정의

3. 프로젝트 환경 구성
  - babel, eslint, prettier 등의 환경 설정

4. 외부 library 모듈화
  - 
## 참고 자료

- [존스 홉킨스 코로나 현황](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6)
- [Postman API](https://documenter.getpostman.com/view/10808728/SzS8rjbc?version=latest#27454960-ea1c-4b91-a0b6-0468bb4e6712)
- [Type Vue without Typescript](https://blog.usejournal.com/type-vue-without-typescript-b2b49210f0b)
