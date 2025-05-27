window.addEventListener("load",function () {
  // 1. 데이터를 가져옴
  const dataUrl = "http://127.0.0.1:5501/public/api/trip.json";

  /**
   * 데이터 연동
   * @param _url string 주소
   * @param _fn function 콜백 함수 
   */

  async function getData(_url, _fn){
    try{
      const res = await fetch(_url);
      const data = await res.json();
      _fn(data);
    }
    catch(error) {
      alert("서버 오류입니다 잠시후 재접속 해주십시오.");

    }
  }
}
)