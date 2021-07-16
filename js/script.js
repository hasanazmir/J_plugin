
$('.timer').countTo();



new WOW().init();


// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


 $(function () {
        $('.text-2').textillate({
            loop: true
        });
    });