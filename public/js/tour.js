window.addEventListener("load", function () {
  // api 주소
  const apiUrl = "http://127.0.0.1:5501/public/api/tour.json";
  // 현재 출력한 카테고리
  let cateFocusIndex = 0;
  // 카테고리 button 태그 DOM 보관
  let cateButtonArr = [];
  // 카테고리 글자 배열
  let cateNameArr = [];
  // 카테고리별 목록 배열
  let cateListArr = [];
  // api 호출 함수
  async function getData(_url, _fn) {
    try {
      const res = await fetch(_url);
      const data = await res.json();
      await _fn(data);
    } catch (error) {
      alert("에러입니다");
    }
  }
  // 데이터를 처리하는 함수
  const parseData = function (_data) {
    console.log(_data);
    // 1. 카테고리 글자만 추출하기
    //const cateArr = _data.map(item => item.cate);  //return 생략가능
    const cateArr = _data.map(function (item) {
      //  return 해서 값을 돌려줘야 담긴다
      return item.cate;
    });
    cateNameArr = [...cateArr];

    // 2. 목록만 추출
    //const listArr = _data.map(item => item.list);
    const listArr = _data.map(function (item) {
      return item.list;
    });
    cateListArr = [...listArr];

    tourStart();
  };
  function tourStart(){
    makeTourInit();
    activeCateFocus();
    addBtsEvent();
  }

  // 최초 데이터가 전달되면 1번만 실행
  // 카테고리 버튼은 1번만 만들어도 된다
  function makeTourInit(_index) {
    //배체될 장소
    const cateBts = document.querySelector(".section_category_bts");
    // 최종 html 글자
    let html = "";
    // for(let i = 0; i <cateNameArr.length; i++){
    //   const tag = `<li><button>${cateNameArr[i]}</button></li>`;
    //   html = html + tag
    // }

    // if문으로 해도 됨
    // cateNameArr.forEach((item, index) => {
    //   let tag = "";
    //   if(index === 0){
    //     tag = `<li><button class = "cate_focus">${item}</button></li>`;
    //   } else {
    //     tag = `<li><button>${item}</button></li>`;
    //   }
    //   html = html + tag;
    // }); 하지만 아래를 추천함 왜냐 기본 포커스가 바뀔 수도 있으니까요
    cateNameArr.forEach((item, index) => {
      const tag = `<li><button>${item}</button></li>`;
      html = html + tag;
    });
    cateBts.innerHTML = html;
    // 버튼 태그 모음
    cateButtonArr = document.querySelectorAll(
      ".section_category_bts > li > button"
    );
  }

  // 실시간으로 생성된 버튼에 이벤트 연결하기
  function addBtsEvent() {
    cateButtonArr.forEach(function (item, index) {
      item.addEventListener("click", function () {
        // 동일한 버튼 클릭시 작동 방지
        if (cateFocusIndex === index) {
          return;
        }
        cateFocusIndex = index;
        removeFocusAll();
        activeCateFocus();
      });
    });
  }
  // 포커스 모두 제거하기
  function removeFocusAll() {
    cateButtonArr.forEach(function (item) {
      item.classList.remove("cate_focus");
    });
  }
  // 카테고리 버튼에 현재 포커스 표현하기
  function activeCateFocus() {
    const bts = document.querySelectorAll(
      ".section_category_bts > li > button"
    );
    bts[cateFocusIndex].classList.add("cate_focus");
    // console.log(bts);
  }
  // 함수 호출
  getData(apiUrl, parseData);
});
