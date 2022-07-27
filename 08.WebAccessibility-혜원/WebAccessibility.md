# 1. 웹 접근성이란?

[https://www.wah.or.kr:444/Accessibility/define.asp](https://www.wah.or.kr:444/Accessibility/define.asp)

-   「지능정보화기본법」에 따라 장애인이나 고령자분들이 웹 사이트에서 제공하는 정보를 비장애인과 동등하게 접근하고 이용 할 수 있도록 보장하는 것
-   특정 대상에 한정되지 않고 모든 사용자를 대상으로, 어떤 사용자든 어떤 기술환경에서든 웹 사이트에서 제공하는 모든 정보에 접근할 수 있도록 보장하는 것

# 2. 웹 접근성의 필요성

[웹 접근성의 다양한 관점들에 관한 영상](https://www.youtube.com/watch?v=3f31oufqFSM)

-   누구에게나 동등한 기회 제공
-   웹 접근성 준수는 법적 의무 사항

# 3. 웹 접근성을 높이기 위한 방법

## 3.1. 보는 것이 어렵거나 불편한 경우

### 3.1.1. 스크린 리더

-   대체 텍스트 제공

    -   `<img>` 태그에는 alt 값을 적어주어야 함
    -   `<figure>`, `<figcaption>` 태그를 이용해서 이미지에 캡션을 달아줄 수도 있음
    -   `<input>` 태그와 `<label>` 태그는 1:1로 매칭되어야 함
    -   `<input>` 요소에 `<label>`을 사용하지 못하는 경우, `<input>` 태그의 `title` 속성을 대신 사용해야 함
    -   사용자가 이미지를 업로드하는 경우, 사용자가 스스로 캡션을 달 수 있도록 하는 기능을 제공해야 함
    -   의미 없는 이미지의 경우에는 대체 텍스트를 제공하지 않아야 함
    -   대체 텍스트는 중복되어서는 안 되므로 이미지에 대한 설명이 다른 요소에 적혀 있다면 alt값을 적지 않아야 함

          <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9ce5ed57-c014-41f6-ae25-10786e629c9b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220706T133702Z&X-Amz-Expires=86400&X-Amz-Signature=85f6e1f794c340f11530fdeda60c5f623bcd6e22f41f40183fad82614d1baaf8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />

        ```html
        <!-- span이 설명을 대신하므로 alt에 또 설명을 적지 않습니다. -->
        <a href="#"><img src="" alt="" /><span>타이틀</span></a>
        ```

-   IR 기법
    -   `<button>` 태그 또는 텍스트 이미지 등의 설명을 필수로 적어주고 숨김 처리
    -   설명은 아이콘의 그림 설명보다는 기능의 설명이어야 함

### 3.1.2. 화면 확대

-   텍스트를 확대했을 때 다른 컨텐츠 영역을 침범하거나 텍스트가 잘리는 등 정보의 유실이 없어야 함
-   텍스트를 확대했을 때 위치가 재조정되어야 함

### 3.1.3. 색상 의존성 낮추기

-   정보 전달 또는 컨텐츠 구분에 색상만을 이용해서는 안 됨
-   선택, 포커스, 호버되는 영역은 색상 변경 이외에 굵기 변경, 테두리, 밑줄 등의 다른 방법으로도 구분되게 해야 함
-   차트의 항목을 색상 대신 다른 방법으로도 구분할 수 있도록 다양한 방법을 제공해야 함

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/13047afb-c4ec-4032-aecf-7d5d32caab87/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220727T030646Z&X-Amz-Expires=86400&X-Amz-Signature=b15d400f494c2051ae2386391b0e7181fb1901bc639054b5b9e91b1dd9356a02&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />

색맹 환자가 흑백으로 색을 보지는 않지만, 아무튼 20대와 40대 항목은 구분이 어려워짐

### 3.1.4. 고대비

-   텍스트, 이미지 등의 전경색과 브라우저 배경색의 대비율은 4.5 이상이 되어야 함

### 3.1.5. 마크업

-   페이지와 섹션, 아티클에는 헤딩 태그를 사용한 명확한 제목이 있어야 함
-   데이터가 아닌 디자인 목적으로 `<table>`요소를 사용해서는 안 되며, 사용했다면 `caption`이나 `summary`를 제공해서는 안 됨

### 3.1.6. 음성 지원

-   captcha 등 이미지를 보고 입력해야 하는 경우에는 음성 또한 지원되어야 함

## 3.2. 소리를 듣는 것이 어렵거나 불편한 경우

### 3.2.1. 수화

-   라디오 등의 오디오나 동영상에 대한 수화를 제공해야 함

### 3.2.2. 시각 정보 제공

-   라디오 등의 오디오나 동영상에 대한 자막 또는 원고를 제공해야 함

## 3.3. 손 사용이 어렵거나 불편한 경우

### 3.3.1. 키보드만으로도 컨텐츠에 접근할 수 있게 하기

-   마우스로 사용 가능한 기능은 키보드만으로도 모두 사용할 수 있도록 해야 함
-   마우스 오버했을 때 드롭다운되는 기능 등은 키보드로 접근했을 때도 똑같이 작동해야 함
-   키보드로도 링크를 이동할 수 있도록 `<a>` 태그 안에 `href` 속성을 필수로 적어주어야 함
-   tab으로 포커스를 바꿀 때 포커스가 향하는 순서는 기본적으로는 논리적인 순서인 좌→우, 상→하 순이어야 함
-   무조건 보여지는 순서에 의존해서는 안 되며, 사용자 입장에서 편리한 의미적인 순서여야 함

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/b2d1aa00-b6fb-4d3f-a5e2-456cb6b4542e/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220727T030604Z&X-Amz-Expires=86400&X-Amz-Signature=b00149ca7fa233d2758963e47227c8997285986c34793fd9651cfd05ecb24822&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />

의미적인 순서가 중요

### 3.3.2. 충분한 시간 제공

(로그인 시간 제한, 페이지 자동 전환 등)

-   필수적인 상황이 아니라면 시간 제한을 두지 않거나 연장, 중지 수단을 제공해야 함
-   데이터 손실 없이 세션이 만료된 경우, 권한을 다시 부여할 수 있어야 함

### 3.3.3. 자동 재생 또는 반복되는 컨텐츠

-   자동 재생되는 오디오나 동영상은 지양해야 함
    -   굳이 필요하다면 끄거나, 멈추거나, 숨길 수 있는 옵션을 제공해야 함
-   움직임이 있는 컨텐츠는 끄거나, 멈추거나, 전체를 보여주거나 숨길 수 있는 옵션을 제공해야 함
    -   특히 특정 속도로 빠르게 번쩍이는 컨텐츠와 패턴은 발작 또는 신체적 반응을 불러일으킬 수 있으므로 지양해야 함
    -   굳이 필요하다면 반드시 사전에 사용자에게 경고하고 대안을 제공해야 함

## 3.4. 기타

### 3.4.1. 키보드 외의 다른 입력 장치의 사용

(모바일, 태블릿 등의 터치, 음성 인식, 제스처 인식 등)

-   버튼, 링크 등의 요소는 터치로도 쉽게 활성화될 수 있도록 사이즈가 커야 함
-   컨트롤의 대각선 길이는 6mm 이상이어야 함
-   요소 간의 간격은 1px 이상이어야 함

### 3.4.2. 예측 가능성

-   사용자가 의도하지 않은 기능은 실행되지 않도록 해야 함
-   필요한 경우가 아니라면 페이지 진입 시 새 창 또는 팝업으로 뜨지 않도록 함
-   굳이 필요하다면 새 창으로 뜬다는 내용을 적어 주고 IR기법으로 숨기거나 요소에 `title` 속성으로 적어주어야 함
-   페이지마다 똑같이 사용되는 내비게이션 바는 같은 위치에 있어야 함

### 3.4.3. 가독성

-   다양한 언어가 사용되는 경우 언어를 구분해야 함
-   생소한 단어, 구문, 약어 등의 설명을 제공해야 함
-   명확하고 단순한 언어를 사용
-   테두리, 구분선, 간격 조절 등으로 이웃한 컨텐츠끼리 구분해야 함
-   페이지마다 반복되는 컨텐츠가 있다면 건너뛸 수 있는 옵션을 제공해야 함
-   링크는 명확하게 눈에 띄어야 함

### 3.4.4. 오류 수정

-   사용자가 입력을 잘못했을 때, 내용이 사라지지 않고 유지되도록 해야 함
-   사용자가 입력을 잘못했을 때, 왜 오류가 발생한 건지 이유를 알려주어야 함
-   오류가 발생한 곳에 포커스를 주어야 함

<img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7cedcd8f-9c48-432c-a598-1172b5cf4f6a/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220706T135251Z&X-Amz-Expires=86400&X-Amz-Signature=be89a88a76aed5fd1d457f0a134c913aca849f4528943b8671e750641329b657&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject" />

오류에 대한 정보를 최대한 제공

### 3.4.5. 호환성

-   크로스 브라우징이 지원되어야 함
-   브라우저 별로 각각 다른 비표준 요소를 위해 name, role, value가 제공되어야 함

# 4. 웹 접근성 검사 도구

[https://wave.webaim.org/](https://wave.webaim.org/)

[https://validator.w3.org/unicorn/](https://validator.w3.org/unicorn/)
