////////////////////////////////////검색창////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  let searchButtons = document.getElementsByClassName('search_btn');
  let searchPages = document.getElementsByClassName('search_page');
  let closeButtons = document.getElementsByClassName('search_page_close_btn');

  if (searchButtons.length > 0 && searchPages.length > 0) {
    searchButtons[0].addEventListener('click', function() {
      searchPages[0].style.display = 'block'; // 검색창 표시 뜸
    });
  }

  if (closeButtons.length > 0 && searchPages.length > 0) {
    closeButtons[0].addEventListener('click', function() {
      searchPages[0].style.display = 'none'; // 검색창 닫기
    });
  }

  document.addEventListener('click', function(event) {
    if (searchPages.length > 0 && searchButtons.length > 0) {
      if (!searchPages[0].contains(event.target) && event.target !== searchButtons[0]) {
        searchPages[0].style.display = 'none';
      }
    }
  });
});
///////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  const mainLinks = document.getElementsByClassName('main_link');

  Array.from(mainLinks).forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = './index.html';
    });
  });
});

///////////////////////////////////요일 페이지 이동///////////////////////////////////////////
  
document.addEventListener('DOMContentLoaded', function() {
  let yoilWebtoonLinks = document.getElementsByClassName('yoil_webtoon_link');

  if (yoilWebtoonLinks.length > 0) {
    yoilWebtoonLinks[0].addEventListener('click', function(event) {
      event.preventDefault();
      window.location.href = './요일웹툰_페이지.html';
    });
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////버튼 클릭시 색깔바뀜///////////////////////////////////////////
         
document.addEventListener('DOMContentLoaded', function() {
  const dayCharts = document.getElementsByClassName('day_chart');

  Array.from(dayCharts).forEach(dayChart => {
    dayChart.addEventListener('click', function() {
      // 모든 day_chart 요소의 스타일 초기화
      Array.from(dayCharts).forEach(dc => {
        dc.style.backgroundColor = '';
        dc.style.color = '';
      });

      this.style.backgroundColor = '#5880fe';
      this.style.color = 'white';
    });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////메인 페이지 이동//////////////////////////////////////

   document.addEventListener('DOMContentLoaded', function() {

   let titleBanner = document.querySelector('.title_banner');
   let logo = document.querySelector('.zzz_logo');

   titleBanner.addEventListener('click', function(event) {
   event.preventDefault(); 
   window.location.href = './index.html'; 
});
   logo.addEventListener('click', function(event) {
   event.preventDefault();
   window.location.href = './index.html'; 
});
});

/////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////// 만화 페이지 이동/////////////////////////////////////////////

  document.addEventListener('DOMContentLoaded', function() {
    let manga_page_Links = document.getElementsByClassName('manga_page_link');
  
    if (manga_page_Links.length > 0) {
      manga_page_Links[0].addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './만화페이지.html';
      });
    }
  });
  /////////////////////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////웹 소설 페이지 이동////////////////////////////////////////

  document.addEventListener('DOMContentLoaded', function() {
    let web_story_Link = document.getElementsByClassName('web_story_link');
  
    if (web_story_Link.length > 0) {
      web_story_Link[0].addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './웹소설_페이지.html';
      });
    }
  });
  /////////////////////////////////////////////////////////////////////////////////////////////

  document.addEventListener('DOMContentLoaded', function() {
    let dayCharts = document.querySelectorAll('.day_chart');
    let webtoonBox = document.querySelector('.webtoon_box');

    // 웹툰 데이터 (요일별로 작품 목록)
    let webtoonData = {
        '전체': [
            { img: './pot_img/an22.jpg', title: '수업합시다', artist: '어느 한 학생' },
            { img: './pot_img/toon2.webp', title: '이림이야기', artist: '천호냥' },
            { img: './pot_img/toon3.webp', title: '소꿉친구가 자꾸 괴롭혀!', artist: 'NAKTA' },
            { img: './pot_img/toon4.webp', title: '발화', artist: '영재영' },
            { img: './pot_img/toon5.webp', title: '연애경험없는 여기사에게 들이대 보았다', artist: '영재영' },
            { img: './pot_img/toon6.webp', title: '까마귀 기사', artist: 'govy' },
            { img: './pot_img/toon7.webp', title: '부랄친구', artist: '한라감귤' },
            { img: './pot_img/toon8.webp', title: '무책임 공주는 힘들어!', artist: '무선헤드셋, 빠타' },
            { img: './pot_img/toon9.webp', title: '게임은 살인이다', artist: '우왕이, 핫핑크' },
            { img: './pot_img/toon10.webp', title: '불멸의 날들', artist: '허긴개' }
        ],
        '월': [
            { img: './pot_img/an22.jpg', title: '수업합시다', artist: '어느 한 학생' },
            { img: './pot_img/toon2.webp', title: '이림이야기', artist: '천호냥' },
            { img: './pot_img/toon3.webp', title: '소꿉친구가 자꾸 괴롭혀!', artist: 'NAKTA' },
            { img: './pot_img/umin.jpg', title: '마루는 강쥐', artist: '모죠' }
        ],
        '화': [
            { img: './pot_img/toon4.webp', title: '발화', artist: '영재영' },
            { img: './pot_img/toon5.webp', title: '연애경험없는 여기사에게 들이대 보았다', artist: '영재영' },
            { img: './pot_img/toon6.webp', title: '까마귀 기사', artist: 'govy' },
        ],
        '수': [
            { img: './pot_img/toon7.webp', title: '부랄친구', artist: '한라감귤' },
            { img: './pot_img/toon8.webp', title: '무책임 공주는 힘들어!', artist: '무선헤드셋, 빠타' },
            { img: './pot_img/toon9.webp', title: '게임은 살인이다', artist: '우왕이, 핫핑크' },
        ],
        '목': [
            { img: './pot_img/toon10.webp', title: '불멸의 날들', artist: '허긴개' },
            { img: './pot_img/an22.jpg', title: '수업합시다', artist: '어느 한 학생' },
            { img: './pot_img/toon2.webp', title: '이림이야기', artist: '천호냥' },
        ],
        '금': [
            { img: './pot_img/toon3.webp', title: '소꿉친구가 자꾸 괴롭혀!', artist: 'NAKTA' },
            { img: './pot_img/toon4.webp', title: '발화', artist: '영재영' },
            { img: './pot_img/toon5.webp', title: '연애경험없는 여기사에게 들이대 보았다', artist: '영재영' },
        ],
        '토': [
            { img: './pot_img/toon6.webp', title: '까마귀 기사', artist: 'govy' },
            { img: './pot_img/toon7.webp', title: '부랄친구', artist: '한라감귤' },
            { img: './pot_img/toon8.webp', title: '무책임 공주는 힘들어!', artist: '무선헤드셋, 빠타' },
        ],
        '일': [
            { img: './pot_img/toon9.webp', title: '게임은 살인이다', artist: '우왕이, 핫핑크' },
            { img: './pot_img/toon10.webp', title: '불멸의 날들', artist: '허긴개' },
            { img: './pot_img/an22.jpg', title: '수업합시다', artist: '어느 한 학생' },
        ]
    };

    function createWebtoonList(day) {
        webtoonBox.innerHTML = '';
        let webtoons = webtoonData[day];

        webtoons.forEach(webtoon => {
            let webtoonSection = document.createElement('div');
            webtoonSection.classList.add('webtoon_section');

            let img = document.createElement('img');
            img.src = webtoon.img;
            img.alt = webtoon.title;
            img.classList.add('webtoon_img');

            let titleSpan = document.createElement('span');
            titleSpan.textContent = webtoon.title;

            let artistDiv = document.createElement('div');
            artistDiv.classList.add('artist_name');
            artistDiv.innerHTML = `<span>글 / 그림</span> <span>${webtoon.artist}</span>`;

            webtoonSection.appendChild(img);
            webtoonSection.appendChild(titleSpan);
            webtoonSection.appendChild(artistDiv);

            webtoonBox.appendChild(webtoonSection);
        });
    }

    createWebtoonList('전체');

    // 요일별 클릭 이벤트 처리
    dayCharts.forEach(dayChart => {
        dayChart.addEventListener('click', function(event) {
            event.preventDefault(); // 기본 링크 동작 방지
            const day = this.textContent;
            createWebtoonList(day);
        });
    });
});
