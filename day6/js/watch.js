//watch.js

const display = document.getElementById("display");

//1초 간격으로 myWatch() 호출

//window 객체가 생략됨 -window.setInterval()
/*setInterval(myWatch, 1000);

function myWatch(){
    const date = new Date(); //날짜 객체 생성
    let time = date.toLocaleTimeString(); //시간 포맷으로 변환
    display.textContent = time;
}*/

// 실행 함수
setInterval(() => {
    const date = new Date(); //날짜 객체 생성
    let time = date.toLocaleTimeString(); //시간 포맷으로 변환
    display.textContent = time;
}, 1000)