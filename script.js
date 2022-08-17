function myfunction(){
    if(document.getElementById('header').style.display!=='none'){
        document.getElementById('header').style.display='none';
    }
    else{
        document.getElementById('header').style.display='block';
    }
}

      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 10,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 