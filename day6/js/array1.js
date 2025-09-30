//array1.js

//객체 접근
const result = document.getElementById("result");

//문자열을 저장할 배열 생성
let arr = ["사과", "배", "포도", "바나나"];
console.log(arr);
console.log(arr.length);

//요소 출력
for(let i = 0; i < arr.length; i++){
    result.innerHTML += `${arr[i]} `;
}

//요소 추가
arr[4] = '딸기'; //1. 인덱싱
result.innerHTML += `<br>요소 추가후: ${arr}`;

//요소 추가(push())
arr.push('망고');  //마지막 요소로 추가
result.innerHTML += `<br>요소 추가후: ${arr}`;

//요소 삭제
arr[1] = undefined;
console.log(arr);
result.innerHTML += `<br>요소 삭제후: ${arr}`;

//요소 삭제(splice())
arr.splice(1, 1);  //2번째 위치에서 1개 삭제(undefined 삭제)
result.innerHTML += `<br>요소 삭제후: ${arr}`;






