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
  
        this.style.backgroundColor = '#FA8258';
        this.style.color = 'white';
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    let tagNames = document.getElementsByClassName('tag_name');
  
    Array.from(tagNames).forEach(tagName => {
      tagName.addEventListener('click', function() {
        // 태그 클릭
        Array.from(tagNames).forEach(tn => {
          tn.style.backgroundColor = '';
          tn.style.color = '';
        });
  
        this.style.backgroundColor = '#FA8258';
        this.style.color = 'white';
      });
    });
  });
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
      let mangaBox = document.getElementsByClassName('manga_box')[0];
  
      let webNovelData = {
          '전체': [
              { src: './pot_img/webs1.jpg', title: '천재 공학자는 투자가 너무 쉽다' },
              { src: './pot_img/webs2.jpg', title: '무림에서 카페로 힐링합니다' },
              { src: './pot_img/webs3.jpg', title: '아포칼립스 전쟁양복' },
              { src: './pot_img/webs4.jpg', title: '방구석 소환사의 시골 힐링 라이프' },
              { src: './pot_img/webs5.jpg', title: '배신 당한 짐꾼은 복수를 꿈꾼다' },
              { src: './pot_img/webs6.jpg', title: '그림을 그린 비밀 각성자를 찾습니다' },
              { src: './pot_img/webs7.jpg', title: '소설 속 네크로맨서는 뼈를 줍는다' },
              { src: './pot_img/webs8.jpg', title: '소원을 빈적없는데 신에게 선택받았다' },
              { src: './pot_img/webs9.jpg', title: '아포칼립스에서 나만 자원 무한' },
              { src: './pot_img/webs10.jpg', title: '나는 악마에게 기도했다' },
              { src: './pot_img/webs11.jpg', title: '약초 밭 깡촌 명의' },
              { src: './pot_img/webs12.jpg', title: '프렐류드와 왈츠' }
          ],
          '신작': [
              { src: './pot_img/webs12.jpg', title: '프렐류드와 왈츠' },
              { src: './pot_img/webs11.jpg', title: '약초 밭 깡촌 명의' },
              { src: './pot_img/webs10.jpg', title: '나는 악마에게 기도했다' },
              { src: './pot_img/webs9.jpg', title: '아포칼립스에서 나만 자원 무한' },
              { src: './pot_img/webs8.jpg', title: '소원을 빈적없는데 신에게 선택받았다' },
              { src: './pot_img/webs7.jpg', title: '소설 속 네크로맨서는 뼈를 줍는다' },
              { src: './pot_img/webs6.jpg', title: '그림을 그린 비밀 각성자를 찾습니다' },
              { src: './pot_img/webs5.jpg', title: '배신 당한 짐꾼은 복수를 꿈꾼다' },
              { src: './pot_img/webs4.jpg', title: '방구석 소환사의 시골 힐링 라이프' },
              { src: './pot_img/webs3.jpg', title: '아포칼립스 전쟁양복' },
              { src: './pot_img/webs2.jpg', title: '무림에서 카페로 힐링합니다' },
              { src: './pot_img/webs1.jpg', title: '천재 공학자는 투자가 너무 쉽다' }
          ],
          '이벤트': [
              { src: './pot_img/webs3.jpg', title: '아포칼립스 전쟁양복' },
              { src: './pot_img/webs6.jpg', title: '그림을 그린 비밀 각성자를 찾습니다' },
              { src: './pot_img/webs9.jpg', title: '아포칼립스에서 나만 자원 무한' },
              { src: './pot_img/webs12.jpg', title: '프렐류드와 왈츠' },
              { src: './pot_img/webs1.jpg', title: '천재 공학자는 투자가 너무 쉽다' },
              { src: './pot_img/webs4.jpg', title: '방구석 소환사의 시골 힐링 라이프' },
              { src: './pot_img/webs7.jpg', title: '소설 속 네크로맨서는 뼈를 줍는다' },
              { src: './pot_img/webs10.jpg', title: '나는 악마에게 기도했다' },
              { src: './pot_img/webs2.jpg', title: '무림에서 카페로 힐링합니다' },
              { src: './pot_img/webs5.jpg', title: '배신 당한 짐꾼은 복수를 꿈꾼다' },
              { src: './pot_img/webs8.jpg', title: '소원을 빈적없는데 신에게 선택받았다' },
              { src: './pot_img/webs11.jpg', title: '약초 밭 깡촌 명의' }
          ],
          '연재': [
              { src: './pot_img/webs5.jpg', title: '배신 당한 짐꾼은 복수를 꿈꾼다' },
              { src: './pot_img/webs10.jpg', title: '나는 악마에게 기도했다' },
              { src: './pot_img/webs1.jpg', title: '천재 공학자는 투자가 너무 쉽다' },
              { src: './pot_img/webs6.jpg', title: '그림을 그린 비밀 각성자를 찾습니다' },
              { src: './pot_img/webs11.jpg', title: '약초 밭 깡촌 명의' },
              { src: './pot_img/webs2.jpg', title: '무림에서 카페로 힐링합니다' },
              { src: './pot_img/webs7.jpg', title: '소설 속 네크로맨서는 뼈를 줍는다' },
              { src: './pot_img/webs12.jpg', title: '프렐류드와 왈츠' },
              { src: './pot_img/webs3.jpg', title: '아포칼립스 전쟁양복' },
              { src: './pot_img/webs8.jpg', title: '소원을 빈적없는데 신에게 선택받았다' },
              { src: './pot_img/webs4.jpg', title: '방구석 소환사의 시골 힐링 라이프' },
              { src: './pot_img/webs9.jpg', title: '아포칼립스에서 나만 자원 무한' }
          ],
          '주간': [
              { src: './pot_img/webs8.jpg', title: '소원을 빈적없는데 신에게 선택받았다' },
              { src: './pot_img/webs4.jpg', title: '방구석 소환사의 시골 힐링 라이프' },
              { src: './pot_img/webs12.jpg', title: '프렐류드와 왈츠' },
              { src: './pot_img/webs3.jpg', title: '아포칼립스 전쟁양복' },
              { src: './pot_img/webs7.jpg', title: '소설 속 네크로맨서는 뼈를 줍는다' },
              { src: './pot_img/webs1.jpg', title: '천재 공학자는 투자가 너무 쉽다' },
              { src: './pot_img/webs5.jpg', title: '배신 당한 짐꾼은 복수를 꿈꾼다' },
              { src: './pot_img/webs9.jpg', title: '아포칼립스에서 나만 자원 무한' },
              { src: './pot_img/webs2.jpg', title: '무림에서 카페로 힐링합니다' },
              { src: './pot_img/webs6.jpg', title: '그림을 그린 비밀 각성자를 찾습니다' },
              { src: './pot_img/webs10.jpg', title: '나는 악마에게 기도했다' },
              { src: './pot_img/webs11.jpg', title: '약초 밭 깡촌 명의' }
          ],
          '월간': [
              { src: './pot_img/webs11.jpg', title: '약초 밭 깡촌 명의' },
              { src: './pot_img/webs10.jpg', title: '나는 악마에게 기도했다' },
              { src: './pot_img/webs9.jpg', title: '아포칼립스에서 나만 자원 무한' },
              { src: './pot_img/webs8.jpg', title: '소원을 빈적없는데 신에게 선택받았다' },
              { src: './pot_img/webs7.jpg', title: '소설 속 네크로맨서는 뼈를 줍는다' },
              { src: './pot_img/webs6.jpg', title: '그림을 그린 비밀 각성자를 찾습니다' },
              { src: './pot_img/webs5.jpg', title: '배신 당한 짐꾼은 복수를 꿈꾼다' },
              { src: './pot_img/webs4.jpg', title: '방구석 소환사의 시골 힐링 라이프' },
              { src: './pot_img/webs3.jpg', title: '아포칼립스 전쟁양복' },
              { src: './pot_img/webs2.jpg', title: '무림에서 카페로 힐링합니다' },
              { src: './pot_img/webs1.jpg', title: '천재 공학자는 투자가 너무 쉽다' },
              { src: './pot_img/webs12.jpg', title: '프렐류드와 왈츠' }
          ]
      };
  
      function updateMangaBox(data) {
          mangaBox.innerHTML = '';
          data.forEach(item => {
              let mangaItem = document.createElement('div');
              mangaItem.classList.add('mang_list');
              mangaItem.innerHTML = `
                  <img src="${item.src}" alt="" class="manga_img">
                  <div class="name_box">
                      <span>${item.title}</span>
                  </div>
              `;
              mangaBox.appendChild(mangaItem);
          });
      }
      for (let i = 0; i < dayCharts.length; i++) {
          dayCharts[i].addEventListener('click', function() {
              let chartName = this.textContent;
              if (webNovelData[chartName]) {
                  updateMangaBox(webNovelData[chartName]);
              }
          });
      }
  });