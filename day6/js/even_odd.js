//even_odd.js

const result = document.getElementById("result");

function getResult(){
    let num = document.getElementById("num").value; //입력값(value)
    console.log(num);
    console.log(typeof(num));  //string
    
    if(num === "" || isNaN(num)){
        result.textContent = "유효한 숫자를 입력하세요";
    }else{
        num = parseInt(num); //숫자로 변환
        if(num % 2 == 0){
            result.textContent = `${num}는(은) 짝수입니다.`;
        }else{
            result.textContent = `${num}는(은) 홀수입니다.`;
        }
    }
}