# Prettier

Prettier가 사랑받게 된 이유는, 기존 코드 포멧터와 달리 설정 여지가 거의 없다는 것, 다시 말해 Prettier에서 디폴트로 정해놓은 코딩 스타일에서 크게 벗어나기가 어렵다는 얘기이다.

### Code Formatter

> 코드 포멧터란, 개발자가 작성한 코드를 정해진 코딩 스타일을 따르도록 변환해주는 도구이다. Prettier는 이러한 코드 포멧터 중에서도 최근 가장 많은 인기를 얻어 거의 표준이 되어 가고 있는 자바스크립트 라이브러리이다.
> 

### Install

- VSC, Atom 등에서 플러그인 혹은 익스텐션으로 설치 가능
- 혹은 node.js의 npm으로 설치 가능
    
    ```jsx
    $ npm install --save-dev -g --save-exact prettier
    ```
    

### `.prettierrc` 파일 만들기

> **Prettier**은 .json 혹은 .js 파일로 만들어 사용한다. 기본적인 옵션들을 넣어주면 된다.
> 

### 전체 옵션

```jsx
{
  "arrowParens": "avoid", // 화살표 함수 괄호 사용 방식
  "bracketSpacing": false, // 객체 리터럴에서 괄호에 공백 삽입 여부 
  "endOfLine": "auto", // EoF 방식, OS별로 처리 방식이 다름 
  "htmlWhitespaceSensitivity": "css", // HTML 공백 감도 설정
  "jsxBracketSameLine": false, // JSX의 마지막 `>`를 다음 줄로 내릴지 여부 
  "jsxSingleQuote": false, // JSX에 singe 쿼테이션 사용 여부
  "printWidth": 80, //  줄 바꿈 할 폭 길이
  "proseWrap": "preserve", // markdown 텍스트의 줄바꿈 방식 (v1.8.2)
  "quoteProps": "as-needed" // 객체 속성에 쿼테이션 적용 방식
  "semi": true, // 세미콜론 사용 여부
  "singleQuote": true, // single 쿼테이션 사용 여부
  "tabWidth": 2, // 탭 너비 
  "trailingComma": "all", // 여러 줄을 사용할 때, 후행 콤마 사용 방식
  "useTabs": false, // 탭 사용 여부
  "vueIndentScriptAndStyle": true, // Vue 파일의 script와 style 태그의 들여쓰기 여부 (v1.19.0)
  "parser": '', // 사용할 parser를 지정, 자동으로 지정됨
  "filepath": '', // parser를 유추할 수 있는 파일을 지정
  "rangeStart": 0, // 포맷팅을 부분 적용할 파일의 시작 라인 지정
  "rangeEnd": Infinity, // 포맷팅 부분 적용할 파일의 끝 라인 지정,
  "requirePragma": false, // 파일 상단에 미리 정의된 주석을 작성하고 Pragma로 포맷팅 사용 여부 지정 (v1.8.0)
  "insertPragma": false, // 미리 정의된 @format marker의 사용 여부 (v1.8.0)
  "overrides": [ 
    {
      "files": "*.json",
      "options": {
        "printWidth": 200
      }
    }
  ], // 특정 파일별로 옵션을 다르게 지정함, ESLint 방식 사용
}
```

### VSCode의 전역 설정

`settings.json` 파일을 설정해야 한다. `settings.json` 에는 세팅값의 말머리에 `prettier.~`를 붙여줘야 한다.

- 설정의 formatOnSave 기능 사용
- formatting - Prettier

Prettier의 설정은 아래의 순서로 적용된다.

> `settings.json` > `.editorconfig` > `.prettierrc`
> 
- 먼저 `settings.json`에 설정한 세팅값을 적용합니다.
- 만약 프로젝트에 EditorConfig의 설정파일인 `.editorconfig`가 있으면 이 설정이 덮어씁니다.
- 마지막으로 Prettier의 고유한 설정파일인 `.prettierrc`가 프로젝트에 있으면 이 값을 최종적으로 적용하게 됩니다.

### `.prettierignore` 파일

work space에 .prettierignore 파일을 생성해 prettier를 적용하지 않을, prettier를 무시할 파일을 명시한다.

```jsx
// .prettierignore

*.html

```