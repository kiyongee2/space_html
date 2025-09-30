//return_func.js
//객체에 접근
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const total = document.querySelector("#total");

//제곱수 계산 함수
function square(x){
    return x * x;
}

//절대값 계산 함수
function myAbs(x){
    if(x < 0)
        return -x;
    else
        return x;
}

//두 수의 합(익명 함수)
const add = function(x, y){
    return x + y;
}

//add() 함수 호출
const showAdd = function(a, b){
    total.textContent = `덧셈 결과: ${add(a, b)}`;
}

//함수 호출
let num = square(8);
result1.textContent = `제곱값: ${num}`;

let val = myAbs(-3);
result2.textContent = `절대값: ${val}`;

