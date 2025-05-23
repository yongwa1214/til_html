# CSS 정리

## 1. 추천 라이브러리(팀에서 협의)

- reset.css (https://meyerweb.com/eric/tools/css/reset/)
- normalize.css (https://necolas.github.io/normalize.css/)

- normalize 예제 (무조건 제일 위에)

```html
<link
  rel="stylesheet"
  href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"
/>
```

## 2. 개선사항

- header.css 는 무조건 z-index: 999 이상 권장
- header 영역이 margin 의 오류로 padding 변경

```text
margin-top 의 오류라고 해서 유명합니다. (웹브라우저 문제)
이런 경우 padding-top 또는 테두리를 주어서 해결합니다.
```

- header 영역이 스크롤시 `postion:fixed 되면서 높이가 반영안됨.`

``` text
 position:fixed 라고 셋팅하면 높이값이 반영이 안됩니다.
 강제로 main 영역의 상단에 공간을 padding-top 으로 적용 해결.
```

- 배너 슬라이드는 단방향이라서, 즉 무한루프 가 아니라서 버튼 출력이 수정 필요