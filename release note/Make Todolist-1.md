# Make Todolist

## Weather API 이용하기

 1. 아래 사이트에 회원가입을 하여 API key 값을 받아온다.

[Free Weather API - WeatherAPI.com](https://www.weatherapi.com/)

 2. 참조하고 싶은 데이터를 확인하여 사용한다.

[Interactive API Explorer](https://www.weatherapi.com/api-explorer.aspx)

## Google free font 적용하기

 1. Google font에서 폰트 검색하기

[Google Fonts](https://fonts.google.com/)

 2. 폰트 오른쪽의 'Select this style'을 클릭

![Make%20Todolist-1/Untitled.png](Make%20Todolist-1/Untitled.png)

 

3. 오른쪽 패널을 참고하여 CSS, html에 적용하기

```css
/* <link rel="preconnect" href="https://fonts.gstatic.com"> */
/* <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500&display=swap" rel="stylesheet"> */

@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500&display=swap');
/* font-family: 'Roboto Slab', serif; */
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@300;500&display=swap');
/* font-family: 'Noto Serif KR', serif; */
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap');
/* font-family: 'Nanum Gothic Coding', monospace; */

h2 {
	  font-family: 'Roboto Slab', serif;
}
```

## CSS 다루기

1. 요소들 위치 지정하기 (position: absolute || relative; )
2. 배경색 투명도 지정하기 (opacity: 0.5; )
3. li marker 제거하기 (list-style-type: none; )
4. 아래 사이트를 참조하여 디자인 구상하기 

[http://rwdb.kr/?s=css](http://rwdb.kr/?s=css)

## Problem

배경 Image 크기가 화면을 초과해 스크롤바가 생성됨.

이 스크롤바를 감추기위해 아래 코드를 이용하였다.

```css
.brg-box {
    -ms-overflow-style: none;
} 
.brg-box::-webkit-scrollbar {
    display:none;
}
```

하단에 배경 Image 일부가 잘려 보이는 것을 확인함.

'css background image size fit to screen'를 검색하여 아래 링크를 참조하였다.

[](https://www.agernic.com/css-tutorial/css-background-image-size-to-fit-screen.html)

css를 활용하여 background image를 설정하고, 속성을 조정하였다.

## Web Design

![Make%20Todolist-1/__11-2-2021_202827_newtab.jpeg](Make%20Todolist-1/__11-2-2021_202827_newtab.jpeg)

![Make%20Todolist-1/__11-2-2021_203453_newtab.jpeg](Make%20Todolist-1/__11-2-2021_203453_newtab.jpeg)

![Make%20Todolist-1/__11-2-2021_212938_.jpeg](Make%20Todolist-1/__11-2-2021_212938_.jpeg)

weather 정보가 화면에 보이지 않았다. 

console.log를 통해 확인해보니 제대로 API값을 가져온 것을 확인하였다.

알고보니 JS에서 동일한 변수이름을 사용하여 실행에 혼동이 있었다.

결론, 변수 이름을 잘 확인하자!

![Make%20Todolist-1/__12-2-2021_163841_.jpeg](Make%20Todolist-1/__12-2-2021_163841_.jpeg)

배경이미지 load시간이 길어서 픽셀값을 줄였다.

![Make%20Todolist-1/__12-2-2021_173731_.jpeg](Make%20Todolist-1/__12-2-2021_173731_.jpeg)

## Result Web page

![Make%20Todolist-1/__14-2-2021_154158_.jpeg](Make%20Todolist-1/__14-2-2021_154158_.jpeg)

![Make%20Todolist-1/__14-2-2021_15432_.jpeg](Make%20Todolist-1/__14-2-2021_15432_.jpeg)

![Make%20Todolist-1/__14-2-2021_154343_.jpeg](Make%20Todolist-1/__14-2-2021_154343_.jpeg)

![Make%20Todolist-1/__14-2-2021_154411_.jpeg](Make%20Todolist-1/__14-2-2021_154411_.jpeg)