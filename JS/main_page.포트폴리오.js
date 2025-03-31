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

///////////////////////////////슬라이드///////////////////////////////////

swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

////////////////////////////////////////////////////////////////////////////
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

//////////////////////////////////////만화 페이지 이동////////////////////////////////////////

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
    let webtoonImages = document.querySelectorAll('.web_Monday_img, .web_Tuseday_img, .web_Wednesday_img, .web_Thursday_img, .web_Friday_img, .web_Saturday_img, .web_Sunday_img');
    let popupMenus = document.querySelectorAll('.popup_menu');

    webtoonImages.forEach(function(image) {
        image.addEventListener('click', function(event) {
            let imageSrc = event.target.src;

            popupMenus.forEach(function(popup) {
                let popupImage = popup.querySelector('.web_img1');
                if (popupImage && popupImage.src === imageSrc) {
                    popup.style.display = 'block';
                    let clickHandler = function(event) {
                        if (!popup.contains(event.target) && event.target !== image) {
                            popup.style.display = 'none';
                            document.removeEventListener('click', clickHandler);
                        }
                    };
                    document.addEventListener('click', clickHandler);
                } else {
                    popup.style.display = 'none';
                }
            });
        });
    });
});
	
	// 요일 이미지
	let contents_02 = [
		{ seq: 1, img: "./pot_img/web1.PNG", title:"만화 title", subject:"subject01", usage:"15세 이용 관람가", hashtag:"일상, 코믹", desc: "작가 1번의 코믹 창작 만화", writer: "printer-01", price: 10000 },
		{ seq: 2, img: "./pot_img/web2.PNG", title:"만화 title", subject:"subject01", usage:"15세 이용 관람가", hashtag:"일상, 코믹", desc: "작가 1번의 코믹 창작 만화", writer: "printer-02", price: 11000 },
		{ seq: 3, img: "./pot_img/web3.PNG", title:"만화 title", subject:"subject01", usage:"15세 이용 관람가", hashtag:"일상, 코믹", desc: "작가 1번의 코믹 창작 만화", writer: "printer-03", price: 12000 },
		{ seq: 4, img: "./pot_img/web4.PNG", title:"만화 title", subject:"subject01", usage:"15세 이용 관람가", hashtag:"일상, 코믹", desc: "작가 1번의 코믹 창작 만화", writer: "printer-04", price: 13000 },
		{ seq: 5, img: "./pot_img/web5.PNG", title:"만화 title", subject:"subject01", usage:"15세 이용 관람가", hashtag:"일상, 코믹", desc: "작가 1번의 코믹 창작 만화", writer: "printer-05", price: 14000 },
		{ seq: 6, img: "./pot_img/web6.PNG", title:"만화 title", subject:"subject01", usage:"15세 이용 관람가", hashtag:"일상, 코믹", desc: "작가 1번의 코믹 창작 만화", writer: "printer-06", price: 15000 },
		{ seq: 7, img: "./pot_img/web7.PNG", title:"만화 title", subject:"subject01", usage:"15세 이용 관람가", hashtag:"일상, 코믹", desc: "작가 1번의 코믹 창작 만화", writer: "printer-06", price: 15000 },
	];
