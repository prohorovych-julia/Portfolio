(function () {
    const slides = [
      '<p class="grey-p">"I really like to please myselfe with good wine with a rich taste. Therefore, from time to time, I order wine directly from the CaliWines winery. I also buy Chardonnay and Cabernet for family holidays. We are completely delighted with the amazing taste of these wines, which we want to enjoy endlessly."</p>',
      '<p class="grey-p">"We were to hold a responsible event with a buffet table and wanted to surprise our guests with some local products. I recalled that we have the CaliWines winery in California and ordered 10 bottles of Chardonnay. Our guests were delighted and asked for the name of the producer!"</p>',
      '<p class="grey-p">"Our restaurant has been cooperating with this winery for over 10 years. We order the whole range of wines from them. We are completely satisfied with the quality of the wine supplied to us. And our guests often choose CaliWines from our wine menu."</p>'
    ];
  
    let currentSlideIdx = 0;
  
    function showCurrentSlide() {
      const slideConteiner = document.querySelector('.carousel-reviews .slide');
      slideConteiner.innerHTML = slides[currentSlideIdx];
    }
  
    function previousSlide() {
      currentSlideIdx--;
      if (currentSlideIdx < 0)
        currentSlideIdx = slides.length-1;
      showCurrentSlide();
    }
   
    function nextSlide() {
      currentSlideIdx++;
      if (currentSlideIdx >= slides.length) currentSlideIdx = 0;
      showCurrentSlide();
    }
    showCurrentSlide();
  
    document.querySelector('.carousel-reviews .arrow-previous-slide')
    .addEventListener('click', previousSlide);
  
      document.querySelector('.carousel-reviews .arrow-next-slide')
    .addEventListener('click', nextSlide);
  
  })();
  
  