
//1 ~ 5까지 출력하기
const result = document.getElementById("result");

for(let i = 1; i <= 5; i++){
    console.log(i);
    //result.innerHTML = result.innerHTML + ""
    result.innerHTML += `${i} `;
}//1 2 3 4 5

//1 ~ 5 까지의 합계
let sum = 0;  //합계 저장 변수
/*sum = sum + 1; //1
sum = sum + 2; //3
sum = sum + 3; //6*/

for(let i = 1; i <= 5; i++){
    sum += i; //sum = sum + i;
    console.log(`i=${i}, sum=${sum}`);
}
result.innerHTML = `합계: ${sum}`; //15