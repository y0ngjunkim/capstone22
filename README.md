# Capstone22(졸업작품)

### :book:졸업 작품 소개
- 작품명 : InTrip(Introduce + Trip)
- 개발환경 : HTML + CSS + JS
- 작품 소개 : 놀러가고는 싶지만 어디로 가야될지 모르는 사람들을 위한 여행지와 놀거리 소개 페이지
- 작품의 특징 : 지도 api를 사용하여 소개하는 여행지의 위치 표시 및 근처 놀거리 소개
<hr>

### :pencil2:팀명 및 역할
- 팀명 : Intrip
- 이름 : 강태훈 : 웹사이트 제작
- 이름 : 안진홍 : 웹사이트 디자인
- 이름 : 김용준 : 웹사이트 제작
- 졸업작품 소개 사이트 : https://capstone22.netlify.app/
<hr>

### :pencil2: 개발 일지
| Week | 개발 | 회의 | 비고 |
| ------ | -- | -- |----------- |
| [1주차(03월 02일)](#1주차) | ❌ | ☑️ | 팀 구성 |
| [2주차(03월 09일)](#2주차) | ❌ | ❌ | 휴일 |
| [3주차(03월 16일)](#3주차) | ☑️ | ☑️ | 웹사이트 주제 선정 및 자료 조사 |
| [4주차(03월 23일)](#4주차) | ☑️ | ☑️ | 웹사이트 제작 및 조사 |
| [5주차(03월 30일)](#5주차) | ☑️ | ☑️ | 지도 api 첨부 및 제작 |
| [6주차(04월 06일)](#6주차) | ☑️ | ☑️ | 날씨 위젯 추가, 상세지도, 길찾기, 로드맵 기능 추가 |
| [7주차(04월 13일)](#7주차) | ☑️ | ❌ | 주변 여행지 추가 |
| [8주차(04월 20일)](#8주차) | ❌ | ❌ | 중간고사 |
| [9주차(04월 27일)](#9주차) | ☑️ | ❌ | 지역페이지 제작 |
| [10주차(05월 04일)](#10주차) | ☑️ | ☑️ | 지하철페이지 제작 |
| [11주차(05월 11일)](#11주차) | ☑️ | ☑️ | 지하철페이지 제작 수정 및 최종 |
| [12주차(05월 18일)](#12주차) | ☑️ | ☑️ | 웹페이지 수정 및 제작 |
### :pencil2: 참고 자료
> 자료 조사
* https://korean.visitkorea.or.kr/main/main.do#home
* https://www.tripadvisor.co.kr/
> 사이트 생성
* https://app.netlify.com/
> 카카오지도 api
* https://apis.map.kakao.com/
> 네이버 지하철노선도
* https://map.naver.com/v5/subway/
### :pencil2: 주차 별 내용
#### 12주차(05월 18일)
> 주요내용
```html
    1. NamsanTower.html 이미지 변경
    2. 지하철 페이지 노선도 Zoom 기능 추가(현재로는 전체노선도의 줌기능만 되어잇음)
    3. map.html 표 색상 변경
    4. 서울 외 다른 지역 소개페이지 제작(예정)
    5. 지역(content.html) 카드 이미지 변경(예정)
```
> 개발코드
#### 11주차(05월 11일)
> 주요내용
```html
    1. 지하철페이지 수정 및 최종
```
> 개발 코드

![05 13 1](https://user-images.githubusercontent.com/79886468/168235411-245477c0-dd25-425b-8892-2520608a2962.png)
![05 13 2](https://user-images.githubusercontent.com/79886468/168235422-f013a74c-7fe1-43f0-a4fc-1afe1213fa0b.png)

```html
서울 지하철노선도 기준입니다.
<div class="section02">
        <div class="left">
            <ul>
                <li class="subwayline line0 active">전체</li>
                <li class="subwayline line1" style="color: #0d3692;">1호선</li>
                <li class="subwayline line2" style="color: #33a23d;">2호선</li>
                <li class="subwayline line3" style="color: #fe5d10;">3호선</li>
                <li class="subwayline line4" style="color: #00a2d1;">4호선</li>
                <li class="subwayline line5" style="color: #8b50a4;">5호선</li>
                <li class="subwayline line6" style="color: #c55c1d;">6호선</li>
                <li class="subwayline line7" style="color: #54640d;">7호선</li>
                <li class="subwayline line8" style="color: #f14c82;">8호선</li>
                <li class="subwayline line9" style="color: #aa9872;">9호선</li>
                <li class="subwayline line10" style="color: #73c7ab;">경의중앙선</li>
                <li class="subwayline line11" style="color: #3681b7;">공항철도</li>
            </ul>
        </div>
        <div class="center">
            <img src="./img/서울/서울 지하철노선도.jpg" class="allline active" alt="">
            <img src="./img/서울/1호선.jpg" id="1" alt="">
            <img src="./img/서울/2호선.jpg" id="2" alt="">
            <img src="./img/서울/3호선.jpg" id="3" alt="">
            <img src="./img/서울/4호선.jpg" id="4" alt="">
            <img src="./img/서울/5호선.jpg" id="5" alt="">
            <img src="./img/서울/6호선.jpg" id="6" alt="">
            <img src="./img/서울/7호선.jpg" id="7" alt="">
            <img src="./img/서울/8호선.jpg" id="8" alt="">
            <img src="./img/서울/9호선.jpg" id="9" alt="">
            <img src="./img/서울/경의중앙.jpg" id="10" alt="">
            <img src="./img/서울/공항철도.jpg" id="11" alt="">
            <img src="./img/서울/수인선.jpg" id="12" alt="">
            <img src="./img/서울/자기부상.jpg" id="13" alt="">
            <img src="./img/서울/애버라인.jpg" id="14" alt="">
            <img src="./img/서울/경춘선.jpg" id="15" alt="">
            <img src="./img/서울/신분당선.jpg" id="16" alt="">
            <img src="./img/서울/의정부.jpg" id="17" alt="">
            <img src="./img/서울/경강선.jpg" id="18" alt="">
            <img src="./img/서울/우이신설.jpg" id="19" alt="">
            <img src="./img/서울/서해선.jpg" id="20" alt="">
            <img src="./img/서울/김포골드.jpg" id="21" alt="">
            <img src="./img/서울/인천1호선.jpg" id="22" alt="">
            <img src="./img/서울/인천2호선.jpg" id="23" alt="">
        </div>
        <div class="right">
            <ul>
                <li class="subwayline line12 active" style="color: #ff8c00;">수인선</li>
                <li class="subwayline line13" style="color: #ffcd12;">자기부상</li>
                <li class="subwayline line14" style="color: #4ea346;">애버라인</li>
                <li class="subwayline line15" style="color: #33c6a6;">경춘선</li>
                <li class="subwayline line16" style="color: #c82127;">신분당선</li>
                <li class="subwayline line17" style="color: #fda600;">의정부</li>
                <li class="subwayline line18" style="color: #0054a6;">경강선</li>
                <li class="subwayline line19" style="color: #ff8c00;">우이신설</li>
                <li class="subwayline line20" style="color: #8FC31F;">서해선</li>
                <li class="subwayline line21" style="color: #AD8605;">김포골드</li>
                <li class="subwayline line22" style="color: #8cadcb;">인천1호선</li>
                <li class="subwayline line23" style="color: #ed8000;">인천2호선</li>
            </ul>
        </div>
```
```css
.section02{
    width: 1280px;
    height: 800px;
    border: 1px solid;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
}
.section02 > div{
    border: 1px solid;
    flex-grow: 1;
}
.section02 .left, .right{
    flex: 1;
}
.section02 .left a, .right a{
    text-decoration: none;
    list-style: none;
}

.section02 .left li, .right  li{
    font-weight: bold;
    color: #000;
    margin-bottom: 45px;
    list-style: none;
}

/* .section02 .center{
    flex-grow: 5;
} */
.section02 .center img{
    width: 750px;
    height: 750px;
    margin: 0 auto;
    margin-top: 25px;
    display: none;
    opacity: 0;
}
.section02 .center img.active{
    opacity: 1;
    display: block;
}
.section02 .center .line{
    margin: 10px auto;
    display: block;
}
```
```js
$(".subwayline").click(function(){
    $(this).toggleClass("active")
    $(this).siblings().removeClass("active")
})

$(".line0").click(function(){
    $(".allline").toggleClass("active")
    $(".allline").siblings().removeClass("active")
})
$(".line1").click(function(){
    $("#1").toggleClass("active")
    $("#1").siblings().removeClass("active")
})
$(".line2").click(function(){
    $("#2").toggleClass("active")
    $("#2").siblings().removeClass("active")
})
$(".line3").click(function(){
    $("#3").toggleClass("active")
    $("#3").siblings().removeClass("active")
})
$(".line4").click(function(){
    $("#4").toggleClass("active")
    $("#4").siblings().removeClass("active")
})
$(".line5").click(function(){
    $("#5").toggleClass("active")
    $("#5").siblings().removeClass("active")
})
$(".line6").click(function(){
    $("#6").toggleClass("active")
    $("#6").siblings().removeClass("active")
})
$(".line7").click(function(){
    $("#7").toggleClass("active")
    $("#7").siblings().removeClass("active")
})
$(".line8").click(function(){
    $("#8").toggleClass("active")
    $("#8").siblings().removeClass("active")
})
$(".line9").click(function(){
    $("#9").toggleClass("active")
    $("#9").siblings().removeClass("active")
})
$(".line10").click(function(){
    $("#10").toggleClass("active")
    $("#10").siblings().removeClass("active")
})
$(".line11").click(function(){
    $("#11").toggleClass("active")
    $("#11").siblings().removeClass("active")
})
$(".line12").click(function(){
    $("#12").toggleClass("active")
    $("#12").siblings().removeClass("active")
})
$(".line13").click(function(){
    $("#13").toggleClass("active")
    $("#13").siblings().removeClass("active")
})
$(".line14").click(function(){
    $("#14").toggleClass("active")
    $("#14").siblings().removeClass("active")
})
$(".line15").click(function(){
    $("#15").toggleClass("active")
    $("#15").siblings().removeClass("active")
})
$(".line16").click(function(){
    $("#16").toggleClass("active")
    $("#16").siblings().removeClass("active")
})
$(".line17").click(function(){
    $("#17").toggleClass("active")
    $("#17").siblings().removeClass("active")
})
$(".line18").click(function(){
    $("#18").toggleClass("active")
    $("#18").siblings().removeClass("active")
})
$(".line19").click(function(){
    $("#19").toggleClass("active")
    $("#19").siblings().removeClass("active")
})
$(".line20").click(function(){
    $("#20").toggleClass("active")
    $("#20").siblings().removeClass("active")
})
$(".line21").click(function(){
    $("#21").toggleClass("active")
    $("#21").siblings().removeClass("active")
})
$(".line22").click(function(){
    $("#22").toggleClass("active")
    $("#22").siblings().removeClass("active")
})
$(".line23").click(function(){
    $("#23").toggleClass("active")
    $("#23").siblings().removeClass("active")
})
```
#### 10주차(05월 04일)

![5 06](https://user-images.githubusercontent.com/79886468/168234245-48fec506-8d0b-4d13-9549-86ddc2b239c2.png)

> 주요내용
```html
    1. 지하철페이지 제작
```
> 개발 코드
```html
<div class="section01">
        <p class="text">지하철 노선도 정보</p>
        <div class="menu-wrap">
            <ul class="menu">
                <li>서울</li>
                <li>부산</li>
                <li>대전</li>
                <li>대구</li>
                <li>광주</li>
            </ul>
       </div>
    </div>
    <div class="section02">
        <div class="left">
            <ul>
                <li>전체</li>
                <li>1호선</li>
                <li>2호선</li>
                <li>3호선</li>
                <li>4호선</li>
                <li>5호선</li>
                <li>6호선</li>
                <li>7호선</li>
                <li>8호선</li>
                <li>9호선</li>
            </ul>
        </div>
        <div class="center">

        </div>
        <div class="right">
            <ul>
                <li>전체</li>
                <li>1호선</li>
                <li>2호선</li>
                <li>3호선</li>
                <li>4호선</li>
                <li>5호선</li>
                <li>6호선</li>
                <li>7호선</li>
                <li>8호선</li>
                <li>9호선</li>
            </ul>
        </div>
```
```css
.section01{
    position: relative;
}
.section01 .text{
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    top: 20px;
    text-decoration: underline;
}
.menu-wrap{
    width: 1280px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    margin-top: 35px;
}
.menu-wrap ul{
    display: flex;
    list-style: none;
    margin: 0 auto;
    gap: 10px;
    justify-content: space-around;
}

.section02{
    width: 1280px;
    height: 800px;
    border: 1px solid;
    margin: 0 auto;
    display: flex;
    margin-top: 30px;
}
.section02 > div{
    border: 1px solid;
    flex-grow: 1;
}
.section02 .center{
    flex-grow: 5;
}
.section02 ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 58px;
}
```
#### 9주차(04월 27일)
> 주요내용
```html
    1. 지역페이지 제작
```
> 개발코드
```html
<div class="container">
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1533658925625-2f94d23fc425?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=894c97adfd68510170db9ae89704c92e&auto=format&fit=crop&w=800&q=60" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1494122353634-c310f45a6d3c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ecd4e63ddbfbc55465d3d0abc16ec5c5&auto=format&fit=crop&w=2850&q=80" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1503867913710-3f1656e94ac9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ec81722964d9d4b89884c82bcb11642&auto=format&fit=crop&w=1027&q=80" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1533756972958-d6f38a9761e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d710493bc1818842db8ce47f887708f2&auto=format&fit=crop&w=2089&q=80" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1502957291543-d85480254bf8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=220d7cdb8357ec667ed2c4d4a3de3eb0&auto=format&fit=crop&w=1567&q=80" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1533770699395-5761e5d08106?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=363f39b71ee57e936da6f04a7830895f&auto=format&fit=crop&w=1949&q=80" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1533806481099-93f1242aea1e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0f2ba53e0ed1f9ecd16acb04ad0f70f7&auto=format&fit=crop&w=1950&q=80" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1533738630286-f1f4a61705f8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5e2bc6bb33302df3a49d62983fe535ef&auto=format&fit=crop&w=800&q=60" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1533762385849-5aa14c83dbaf?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=040eec84d37ae33312c1bda4d0dfb0f6&auto=format&fit=crop&w=800&q=60" />
        <h3>Card title</h3>
      </div>
      <div class="card">
        <img
          src="https://images.unsplash.com/photo-1533754434873-c60f30acf0ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7fd34022d3c026a5cdebba00b4fa89a4&auto=format&fit=crop&w=800&q=60" />
        <h3>Card title</h3>
      </div>
    </div>
```
#### 7주차(04월 13일)
* 제가 코로나19 확진 받아서 개발한 내용은 많이 없지만 추후에 추가할 예정
> 주요내용
```html
    1. 주변 여행지 추가(fancybox + wrapper)
```
> 개발코드
:pencil: <b>04월 13일</b>

![4 15](https://user-images.githubusercontent.com/79886468/168234316-9f36d95f-0991-49f7-9aad-3e1bcf5ddb34.png)

```html
<div class="wrapper">
    <div class="card">
        <a data-fancybox="gallery" href="../../img/main/남산팔각정.jpg"><img src="../../img/korea/남산팔각정.jpg"></a>
        <div class="info">
            <h1>남산팔각정</h1>
        </div>
    </div>
    <div class="card">
        <a data-fancybox="gallery" href="../../img/main/남산 야외식물원.jpg"><img src="../../img/korea/남산 야외식물원.jpg" alt=""></a>
        <div class="info">
            <h1>남산 야외식물원</h1>
        </div>
    </div>
    <div class="card">
        <a data-fancybox="gallery" href="../../img/main/안중근의사기념관.jpg"><img src="../../img/korea/안중근의사기념관.jpg" alt=""></a>
        <div class="info">
            <h1>안중근의사기념관</h1>
        </div>
    </div>
    <div class="card">
        <a data-fancybox="gallery" href="../../img/main/남대문시장.jpg"><img src="../../img/korea/남대문시장.jpg" alt=""></a>
        <div class="info">
            <h1>남대문시장</h1>
        </div>
    </div>
</div>
```
```css
.wrapper{
    display: flex;
    width: 55%;
    justify-content: space-around;
    margin-top: 50px;
    margin-left: 23%;
}
.card{
    width: 250px;
    height: 200px;
    padding: 20px 10px;
    background: #fff;
    position: relative;
    display: flex;
    align-items: flex-end;
    box-shadow: 0px 7px 10px rgba(0,0,0,0.5);
    transform: 0.5s ease-in-out;
    margin-left: 30px;
    border-radius: 30px; 
}
.card:hover{
    transform: translateY(20px);
}
.card::before{
    content: "";
    position: absolute;
    top: 25px;
    left: 0;
    display: block;
    width: 100%;
    height: 90%;
    background: linear-gradient(to bottom, rgba(0,176,155,0.5), rgba(150,201,61,1));
    z-index: 2;
    transition: 0.5s all;
    opacity: 0;
    border-radius: 30px; 
}
.card:hover::before{
    opacity: 1;
}
.card img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 30px; 
}
.card .info{
    position: relative;
    z-index: 3;
    color: #fff;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s all;
}
.card:hover .info{
    opacity: 1;
    transform: translateY(0px);
}
.card .info h1{
    margin: 0;
    letter-spacing: 1px;
    margin-top: 8px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
}
```
#### 6주차(04월 06일)
> 주요내용
```html
    1. 날씨 위젯 첨부(NamsanTower.html)
    2. 카카오맵을 연동하여 상세지도, 길찾기, 로드뷰 바로가기 버튼 생성
    3. 설명글 추가
    4. 이미지를 클릭하면 다른 이미지로 변경(04월 07일 추가)
    5. 상단 메뉴바 디자인 변경(04월 08일 추가)
```
> 개발 코드

:pencil: <b>04월 08일</b>

![4 8](https://user-images.githubusercontent.com/79886468/168234351-f61f5448-a3c7-45fc-9a61-f2664aec3d25.png)

* 웹사이트 상단 메뉴바 디자인 변경
```html
<div class="header">
    <div class="head-wrap-inner">
        <a href=""><img class="head-logo" src="../img/logo.jpg"></a>
    </div>
    <div class="head-wrap-sub">
        <nav class="head-menu-main-nav">
            <ul>
                <li class="main-nav02"><a href="#">소개</a></li>
                <li class="main-nav03"><a href="#">지역</a></li>
                <li class="main-nav04"><a href="#">숙소</a></li>
            </ul>
        </nav>
    </div>
</div>
```
```css
.header .head-wrap-inner .search-btn img{
    position: absolute;
    top: 7px;
    left: 7px;
}
.header{
    border:var( --temp-border);
    height: 120px;
    width: 1100px;
}

.header .head-wrap-inner{
    height: 120px;
    width: 1100px;
    position: relative;
    border:var( --temp-border);
}
.header .head-wrap-inner .head-logo{
    position: absolute;
    margin-left: 25%;
    top:40px;
    width:200px;
    height:75px;
}

.head-wrap-sub{
    position: absolute;
    top:50px;
    width: 1100px;
    height: 66px;
    border:var( --temp-border);
    margin-left: 35%;
}
.head-wrap-sub{
    display: flex;
    justify-content: flex-end;
}
.head-wrap-sub ul{
   list-style: none;
   width: 737px;
    display: flex;
    justify-content:space-between;
 
    border:var( --temp-border);
   
}
.head-wrap-sub ul li{
    text-align: center;
    flex: auto;
}
.head-wrap-sub ul li a{
    text-decoration: none;
    display: block;
    border:var( --temp-border);
    text-transform: uppercase;
    font-size: 24px;
    padding-top: 10px;
    height: 40px;
} 
.head-wrap-sub ul li a:hover{
    border-bottom: 3px solid #00edff
}
```
:pencil: <b>04월 07일</b>
* 이미지 클릭 시 다른 이미지로 변경(04월 07일)
```html
<img id="imgID1" class="imgClass" src="../../img/남산타워.jpg" alt="">
<img id="imgID2" class="imgClass" src="../seoul/img/1.gif" alt="">
<img id="imgID3" class="imgClass" src="../seoul/img/2.gif" alt="">
<img id="imgID4" class="imgClass" src="../seoul/img/3.gif" alt="">
<img id="imgID5" class="imgClass" src="../seoul/img/4.gif" alt="">
```
```js
$(document).ready(function(){
    /*웹페이지 열었을 때*/
    $("#imgID1").show();
    $("#imgID2").hide();
    $("#imgID3").hide();
    $("#imgID4").hide();
    $("#imgID5").hide();

    $("#imgID1").click(function(){
        $("#imgID1").hide();
        $("#imgID2").show();
        $("#imgID3").hide();
        $("#imgID4").hide();
        $("#imgID5").hide();
    });
    $("#imgID2").click(function(){
        $("#imgID1").hide();
        $("#imgID2").hide();
        $("#imgID3").show();
        $("#imgID4").hide();
        $("#imgID5").hide();
    });
    $("#imgID3").click(function(){
        $("#imgID1").hide();
        $("#imgID2").hide();
        $("#imgID3").hide();
        $("#imgID4").show();
        $("#imgID5").hide();
    });
    $("#imgID4").click(function(){
        $("#imgID1").hide();
        $("#imgID2").hide();
        $("#imgID3").hide();
        $("#imgID4").hide();
        $("#imgID5").show();
    });
    $("#imgID5").click(function(){
        $("#imgID1").show();
        $("#imgID2").hide();
        $("#imgID3").hide();
        $("#imgID4").hide();
        $("#imgID5").hide();
    });
});
```
:pencil: <b>04월 06일</b>

![4 6](https://user-images.githubusercontent.com/79886468/168234384-8c932885-e8b1-4625-a3ce-147e6b2066ce.png)

* 날씨 추가
```html
NamsanTower.html

1. 날씨 위젯 첨부
<div class="lb-widget">
    <div id="lb-1" class="lb-weather">
        <iframe src="https://forecast.io/embed/#lat=37.5266&lon=127.0403&name=Seoul, 서울&color=&font=&units=si"></iframe>
        <!-- <iframe src="https://forecast.io/embed/#lat=33.5007&lon=126.5288&name=제주&color=&font=&units=si" frameborder="0" width="100%" height="245px"></iframe> -->
    </div>
</div>
>> iframe 값에 따라 지역의 날씨를 알아볼 수가 있다.
```
```css
Namsan.css

#lbBtn {
    position: fixed;
    bottom: 10px;
    right: 10px;
    color: #fff;
    font-size: 12px;
    padding: 5px;
    background-color: rgba(0,0,0,0.25);
    text-decoration: none;
  } 
.lb-widget {
    display: block;
    margin: 20px auto;
    width: 75%;
}  
.lb-widget .lb-dropdown-select-city {
    float: none;
}
.lb-widget .lb-dropdown-select-city.wide {
    width: 105% !important;
    margin: -35px auto;
    margin-left: -5px;
}  
.lb-widget .lb-dropdown-select-city .lbdsc-searchbox {
    width: 98% !important;
}
.lb-widget-01,
.lb-widget-02 {
    display: flex;
    align-items: center;
    justify-content: center;
}
.lb-main-01,
.lb-main-02 {
    margin: 32px;
    max-width: 240px;
    width: 100%;  
    height: 253px;
}
@media(max-width:1200px) {
    .lb-main-01,
    .lb-main-02 {
    min-width: 120px;
    width: auto;
    }
} 
.lb-weather iframe,
.lb-right-weather iframe,
.lb-left-weather iframe {
    display: block;
    border: 0;
    width: 100%;
    height: 245px;
}
```
```js
namsan.js

//첫번째 날씨 위젯
$('.lb-weather').hide();
$('#lb-1').show();
$('#select-box').change(function () {
    dropdown = $('#select-box').val();
    $('.lb-weather').hide();
    $('#' + "lb-" + dropdown).show();                                    
});
```
#### 5주차
> 주요내용
```html
    1. 사이트 주소 생성(netlify.app)
    2. NamsanTower.html 수정 및 제작
    3. NamsanTower.html 카카오 지도 api 첨부
```
#### 4주차
> 주요 내용
```html
    1. 웹사이트 제작 시작 및 자료 조사
    2. 한반도 지도(svg) 파일을 html을 변환
```
#### 3주차
> 주요 내용
```html
    1. 웹사이트 주제 선정
    2. 여행 소개 사이트를 세계로 추천할 것인지 국내로 추천할 것인지 토의
    3. 웹 사이트 기본 디자인 구성 
```
#### 2주차
> 주요 내용
```html
    1. 대통령 선거(보강일: 06월 08일)로 인한 휴일
```
#### 1주차
> 주요 내용
```html
    1. 팀 정하고 주제선정
```
