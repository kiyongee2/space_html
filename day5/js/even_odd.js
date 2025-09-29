//const 상수를 만드는 키워드
//상수: 한번 설정하면 프로그램이 종료될때까지 수정할 수 없는 값
const result = document.getElementById("result");

/*
let num = 12;

if(num % 2 == 0){
    //result.textContent = num + "는 짝수입니다.";
    //백틱(``) 사용 - 템플릿 리터럴 : 변수를 $와 함께 중괄호({})로 묶어줌 
    result.textContent = `${num}는(은) 짝수입니다.`;
}else{
    //result.textContent = num + "는 홀수입니다.";
    result.textContent = `${num}는(은) 홀수입니다.`;
}
*/

let num = prompt("숫자를 입력하세요.", "1");
console.log(typeof(num));  //string
num = parseInt(num); //문자를 숫자로 변환

if(num !== null){
    result.textContent = "입력이 취소되었습니다.";
}else if(isNaN(num)){ //숫자인지 여부 
    result.textContent = "유효한 숫자를 입력하세요.";
}else{ //num != null
    if(num % 2 === 0 ){ 
        //result.textContent = num + "는 짝수입니다.";
        //백틱(``) 사용 - 템플릿 리터럴 : 변수를 $와 함께 중괄호({})로 묶어줌 
        result.innerHTML = `<span class='num'>${num}</span>는(은) 짝수입니다.`;
    }else{
        //result.textContent = num + "는 홀수입니다.";
        result.innerHTML = `<span class='num'>${num}</span>는(은) 홀수입니다.`;
    }
}