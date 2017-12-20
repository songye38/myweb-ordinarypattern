// external js: masonry.pkgd.js, imagesloaded.pkgd.js

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
});
//initFiltersHeight();
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry(); 
});