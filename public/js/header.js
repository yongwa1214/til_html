// DOM 만 완성하면 됩니다. 기준으로 코드를 진행함
window.addEventListener("DOMContentLoaded", function () {
  const header = this.document.querySelector(".header");
  const logo = this.document.querySelector(".logo");
  const search = this.document.querySelector(".search");
  const member = this.document.querySelector(".header_top_right");
  const eventMenu = this.document.querySelector(".header_bottom_nav");

  this.window.addEventListener("scroll", function () {
    const scrollY = window.scrollY; // 반응형은 이게 괜찮다고함 성능 버리고 편의성을 선택한다.
    const headerTopH = this.document.querySelector(".header_top");
    console.log(headerTopH.offsetHeight);

    if (scrollY <= headerTopH.offsetHeight) {
      console.log("모두 보여라");
    } else {
      console.log("일부만 보여라");
    }
  });
});
