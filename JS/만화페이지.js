///////////////////////////////////버튼 클릭시 색깔바뀜///////////////////////////////////////////
         
document.addEventListener('DOMContentLoaded', function() {
  let dayCharts = document.getElementsByClassName('day_chart');

  Array.from(dayCharts).forEach(dayChart => {
    dayChart.addEventListener('click', function() {
      // 요일차트 클릭
      Array.from(dayCharts).forEach(dc => {
        dc.style.backgroundColor = '';
        dc.style.color = '';
      });

      this.style.backgroundColor = '#00ad90';
      this.style.color = 'white';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tagNames = document.getElementsByClassName('tag_name');

  Array.from(tagNames).forEach(tagName => {
    tagName.addEventListener('click', function() {
      // 태그 클릭
      Array.from(tagNames).forEach(tn => {
        tn.style.backgroundColor = '';
        tn.style.color = '';
      });

      this.style.backgroundColor = '#00ad90';
      this.style.color = 'white';
    });
  });
});
  /////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////검색창/////////////////////////////////

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
  //////////////////////////////////////////////////////////////////////

  ////////////////////////////////////메인 페이지 이동//////////////////////////////////////

  document.addEventListener('DOMContentLoaded', function() {
    let mainLinks = document.getElementsByClassName('main_link');
  
    Array.from(mainLinks).forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = './index.html';
      });
    });
  });

  ////////////////////////////////////////////////////////////////////////////////////////////
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
  let dayCharts = document.getElementsByClassName('day_chart');
  let mangaBox = document.querySelector('.manga_box');
  let mangaData = {
      '전체': [
          { src: './pot_img/1247.jpg', title: '히카루가 죽은 여름' },
          { src: './pot_img/단다단/vol_0015.jpg', title: '단다단' },
          { src: './pot_img/사카모토데이즈/vol_0019.jpg', title: '사카모토데이즈' },
          { src: './pot_img/카구라바치/cover_w480.jpg', title: '카구라바치' },
          { src: './pot_img/헌터x헌터/vol_0038.jpg', title: '헌터x헌터' },
          { src: './pot_img/onepicec.jpg', title: '원피스' },
          { src: './pot_img/botch.jpg', title: '봇치 더 록!' },
          { src: './pot_img/bluelock.jpg', title: '블루록' },
          { src: './pot_img/naheeah.jpg', title: '나의 히어로 아카데미아' },
          { src: './pot_img/zom100.jpg', title: '좀100' },
          { src: './pot_img/ilsang.jpg', title: '일상' },
          { src: './pot_img/vol_0134.jpg', title: '모브사이코 100' },
      ],
      '신작': [
          { src: './pot_img/카구라바치/cover_w480.jpg', title: '카구라바치' },
          { src: './pot_img/zom100.jpg', title: '좀100' },
          { src: './pot_img/1247.jpg', title: '히카루가 죽은 여름' },
          { src: './pot_img/단다단/vol_0015.jpg', title: '단다단' },
          { src: './pot_img/사카모토데이즈/vol_0019.jpg', title: '사카모토데이즈' },
          { src: './pot_img/botch.jpg', title: '봇치 더 록!' },
          { src: './pot_img/bluelock.jpg', title: '블루록' },
      ],
      '완결': [
          { src: './pot_img/naheeah.jpg', title: '나의 히어로 아카데미아' },
          { src: './pot_img/ilsang.jpg', title: '일상' },
          { src: './pot_img/vol_0134.jpg', title: '모브사이코 100' },
      ],
      '연재': [
          { src: './pot_img/단다단/vol_0015.jpg', title: '단다단' },
          { src: './pot_img/사카모토데이즈/vol_0019.jpg', title: '사카모토데이즈' },
          { src: './pot_img/헌터x헌터/vol_0038.jpg', title: '헌터x헌터' },
          { src: './pot_img/onepicec.jpg', title: '원피스' },
          { src: './pot_img/bluelock.jpg', title: '블루록' },
          { src: './pot_img/1247.jpg', title: '히카루가 죽은 여름' },
          { src: './pot_img/카구라바치/cover_w480.jpg', title: '카구라바치' },
          { src: './pot_img/botch.jpg', title: '봇치 더 록!' },
          { src: './pot_img/zom100.jpg', title: '좀100' },
      ],
      '주간': [
          { src: './pot_img/1247.jpg', title: '히카루가 죽은 여름' },
          { src: './pot_img/단다단/vol_0015.jpg', title: '단다단' },
          { src: './pot_img/사카모토데이즈/vol_0019.jpg', title: '사카모토데이즈' },
          { src: './pot_img/카구라바치/cover_w480.jpg', title: '카구라바치' },
          { src: './pot_img/헌터x헌터/vol_0038.jpg', title: '헌터x헌터' },
          { src: './pot_img/onepicec.jpg', title: '원피스' },
          { src: './pot_img/botch.jpg', title: '봇치 더 록!' },
          { src: './pot_img/bluelock.jpg', title: '블루록' },
          { src: './pot_img/naheeah.jpg', title: '나의 히어로 아카데미아' },
          { src: './pot_img/zom100.jpg', title: '좀100' },
          { src: './pot_img/ilsang.jpg', title: '일상' },
          { src: './pot_img/vol_0134.jpg', title: '모브사이코 100' },
      ],
      '월간': [
          { src: './pot_img/1247.jpg', title: '히카루가 죽은 여름' },
          { src: './pot_img/단다단/vol_0015.jpg', title: '단다단' },
          { src: './pot_img/사카모토데이즈/vol_0019.jpg', title: '사카모토데이즈' },
          { src: './pot_img/카구라바치/cover_w480.jpg', title: '카구라바치' },
          { src: './pot_img/헌터x헌터/vol_0038.jpg', title: '헌터x헌터' },
          { src: './pot_img/onepicec.jpg', title: '원피스' },
          { src: './pot_img/botch.jpg', title: '봇치 더 록!' },
          { src: './pot_img/bluelock.jpg', title: '블루록' },
          { src: './pot_img/naheeah.jpg', title: '나의 히어로 아카데미아' },
          { src: './pot_img/zom100.jpg', title: '좀100' },
          { src: './pot_img/ilsang.jpg', title: '일상' },
          { src: './pot_img/vol_0134.jpg', title: '모브사이코 100' },
      ],
  };

  for (let i = 0; i < dayCharts.length; i++) {
      dayCharts[i].addEventListener('click', function() {
          let keyword = this.textContent;
          let selectedManga = mangaData[keyword];

          if (selectedManga) {
              mangaBox.innerHTML = '';
              selectedManga.forEach(manga => {
                  let mangaItem = document.createElement('div');
                  mangaItem.classList.add('mang_list');
                  mangaItem.innerHTML = `
                      <img src="${manga.src}" alt="" class="manga_img">
                      <span>${manga.title}</span>
                  `;
                  mangaBox.appendChild(mangaItem);
              });
          }
      });
  }
});