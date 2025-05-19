// html 의 document가 모두 로드 되면 실행하기
// html 의 이미지, 파일 등등 리소스가 준비되면 실행

// window.onload = function () {
//   const wrap = document.querySelector(".wrap");
//   console.log(wrap);
// };
// window.onload = function () {
//   console.log("안녕");
// };
// 이러면 오류 덮어씌움

//표준입니다.
window.addEventListener("load",
function () {
  const wrap = document.querySelector(".wrap");
  console.log(wrap);
});


window.addEventListener("load", function(){

});

//html 만 로드완료를 체크한다 
window.addEventListener("DOMContentLoaded",function(){
 
});