## <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width='40'/> 띵스플로우 Repository

## ❓ 개요
#### [특정 깃허브 레파지토리의 이슈 목록과 상세 내용](https://github.com/angular/angular-cli)을 확인하는 웹 사이트 구축합니다.

***

## 📜 목차

### 🔗 데모 페이지

#### 바로 가기

#### 설치 실행

### 💁‍♂️ 프로젝트 소개

#### 팀원 소개 

#### 구현 기능

#### 개발 스택 

#### 폴더 구조 

***

### 🔗 데모 페이지

### [바로 가기](https://wanted-pre-onboarding-fe-6-3-1.vercel.app/)

### 설치 실행

```bash
# 설치
> git clone https://github.com/wanted-fe-6/wanted-pre-onboarding-fe-6-3-1.git
> npm install

# 실행
> npm start
```

***

### 💁‍♂️ 프로젝트 소개

### 팀원 소개

|이름|역할 분담: 개발 내용|
|------|---|
|[최홍규(팀장)](https://github.com/gomgun-lab)|UI: 상세 페이지 및 반응형 개발|
|[강민규](https://github.com/kagrin97)|UI: 이슈 페이지 및 반응형 개발|
|[백승전](https://github.com/BaikSeungJeon)|UI: 공통 컴포넌트 및 반응형 레이아웃 개발|
|[김정수](https://github.com/sunpl13)|설계: Context API 설계 및 개발|
|[류웅선](https://github.com/unsnruu)|설계: Error 바운더리 설계 및 핸들러 개발|
|[윤여건](https://github.com/kunnyCode)|설계: API 연동 및 무한스크롤 개발|

### 구현 기능

**1. 공통 헤더**
- **이슈 목록 페이지와 상세 페이지가 헤더를 공유**합니다.
- 헤더에는 **Organization 이름과 Repository 이름이 표시**됩니다.

**2. 이슈 목록 화면**
- **이슈 목록 가져오기 API를 활용**했습니다.
- open 상태의 이슈 중 **코멘트가 많은 순으로 정렬**됩니다.
- 각 행에는 **‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’**가 표시됩니다.
- **다섯 번째 셀에는 광고 이미지**가 출력되며, 해당 이미지를 클릭하면 [여기](https://thingsflow.com/ko/home)로 이동합니다.
- 추가 이슈 목록은 **인피니티 스크롤**을 사용하여 화면을 아래로 스크롤 하면 계속 보실 수 있습니다.

**3. 이슈 상세 화면**
- **이슈의 상세 내용**이 표시되는 페이지입니다.
- **‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문'** 내용이 표시됩니다.

**4. Context API 활용**
- **Context API를 설계하고 custom hook을 만들어 더욱 쉽게 사용**할 수 있게 개발하였습니다.

**5. 반응형 웹**
- 반응형으로 과제를 개발하여 PC뿐 아니라 **모바일과 태블릿 환경에서도 편한 UI를 제공**합니다.

**6. 에러 화면 구현**

**7. 로딩 화면 구현**
- 이슈 목록 로딩 및 상세 페이지 접속 시, **로딩 페이지가 출력되어 직관적인 UX/UX를 제공**합니다.
    
### 개발 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/>
</div>

### 폴더 구조

<pre>
src
 ┣ App.jsx
 ┣ index.js
 ┣ api
 ┃ ┗ index.js
 ┣ components
 ┃ ┣ ErrorBoundary.jsx
 ┃ ┣ Fallback.jsx
 ┃ ┣ Footer.jsx
 ┃ ┗ Header.jsx
 ┣ context
 ┃ ┗ IssueContext.js
 ┣ hook
 ┃ ┗ useInfinityScroll.jsx
 ┣ pages
 ┃ ┣ IssueDetail
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ IssueDetailCard.jsx
 ┃ ┃ ┃ ┣ IssueDetailMain.jsx
 ┃ ┃ ┃ ┗ Loading.jsx
 ┃ ┃ ┗ IssueDetail.jsx
 ┃ ┗ List
 ┃ ┃ ┣ components
 ┃ ┃ ┃ ┣ Ad.jsx
 ┃ ┃ ┃ ┣ IssueItem.jsx
 ┃ ┃ ┃ ┗ IssueList.jsx
 ┃ ┃ ┗ List.jsx
 ┣ styles
 ┃ ┣ common.js
 ┃ ┗ reset.jsx
 ┣ util
 ┃ ┣ throttle.js
 ┃ ┗ transferDate.js
</pre>
