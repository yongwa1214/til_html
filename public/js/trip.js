window.addEventListener("load", function () {
  console.log("작동중");
  // 1. 데이터를 가져옴
  const dataUrl = "http://127.0.0.1:5501/public/api/trip.json";

  /**
   * 데이터 연동
   * @param _url string 주소
   * @param _fn function 콜백 함수
   */

  async function getData(_url, _fn) {
    try {
      const res = await fetch(_url);
      const data = await res.json();
      _fn(data);
    } catch (error) {
      alert("서버 오류입니다 잠시후 재접속 해주십시오.");
    }
  }

  // 데이터 만들기 함수
  const makeHtml = (_data) => {
    console.log(_data);

    const listArr = this.document.querySelector(
      ".trip_list .Trip_item"
    );

    // 완성시킬 html 글자
  };

  //주소 호출
  getData(dataUrl, makeHtml);
});
