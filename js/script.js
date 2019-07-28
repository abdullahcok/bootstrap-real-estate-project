
$(document).ready(function () {
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });


  ///magnific popups
    $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',

      gallery: {
          enabled: true
      }
        // other options
    });

});
