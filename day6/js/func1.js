//func1.js
//객체 접근
const result = document.getElementById("result");

//함수 정의
function sayHello(){
    result.innerText = "안녕~";
}

//매개변수 - 이름 입력
function sayHello2(name){
    result.innerText = `안녕~ ${name}`;
}

//구구단 출력 함수
let display = document.querySelector("#display");

function showGugudan(dan){
    for(let i = 1; i <= 9; i++){
        display.innerHTML += `${dan} x ${i} = ${dan*i}<br>`;
    }
}

//함수 호출
sayHello();
sayHello2("상진");