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

    const swTripWrap = this.document.querySelector(".sw_trip .swiper-wrapper");

    // 완성시킬 html 글자
    let html = "";
    for (let i = 0; i < _data.length; i++) {
      const tempObj = _data[i];

      const tag = `
      <div class="swiper-slide">
        <div class="trip_item">
          <a href="${tempObj.link}">
            <div class="trip_item_image">
              <img
                src="${tempObj.image}"
                alt="${tempObj.title}"
                title="${tempObj.title}"
              />
            </div>
            <div class="trip_item_name">
              <img
                src="images/icon_w_logo_new.svg"
                alt="w icon"
                title="w icon"
              />
              ${tempObj.who}
            </div>
            <div class="trip_item_content">
              <p class="trip_content_title">
              ${tempObj.title}
              </p>
              <span class="trip_content_tag">
                ${tempObj.tag}
              </span>
              <span class="trip_content_price"><b>${tempObj.price}원~</b></span>
            </div>
          </a>
        </div>
      </div>
      
      `;

      html = html + tag;
    }

    console.log(html);
    // html 태그 넣기
    swTripWrap.innerHTML = html;

    // 3. 슬라이더 생성
    const swiper = new Swiper(".sw_trip", {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: ".trip_next",
        prevEl: ".trip_prev",
      },
    });
  };

  //주소 호출
  getData(dataUrl, makeHtml);
});
