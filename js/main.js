$(function(){
    $('.slider').slick({
      arrows: false,
      fade: true,
      autoplay: 3000,
      dots:true
    
    });
  });


  $('.header-btn').on('click', function(){
     $('.menu').addClass('active');   
  });

  $('.close-btn').on('click', function(){
    $('.menu').removeClass('active');
  });


  $('.menu__list a').on('click', function(e){
    
    //console.log(this.hash);

    if(this.hash !==''){
      e.preventDefault();

      const hash= this.hash;

       $('html, body').animate ({
        scrollTop: $(hash).offset().top

       }, 
       800
       );
    }

  });

  new WOW().init();


 

  

//   var output = $('.number'),
//     start = 0,
//     end = 2.1,
//     timer = setInterval(function () {
//         output.text(start++ + '%');
//         if (start > end) {
//             clearInterval(timer);
//         }
//     }, 50);





// $(window).scroll(function () { // Когда страница прокручивается
//     var scrTop = $(window).scrollTop();
//       if(scrTop>$('.numbers').offset().top - $(window).height()  ) {
//           numAnimate();
//       }
//   });
//   function numAnimate () {
//       var number = 0;
//       setInterval(function () {
//           number= number + 0.3;
//           if (number<=2.1) { $('.numbers').text(number); };
//       }, 100);
//   };