$(document).ready(function() {
    $('.figs').each(function () {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
        $(this).css("background-color", hue);
    });
});

var $figs = $('.figs');
function figs() {
  var min_fig_count = 20, 
      max_fig_count = 60,
      min_fig_size = 3,
      max_fig_size = 12;
  var figCount = min_fig_count + Math.floor(Math.random() * (max_fig_count + 1));

$figs.find('.figs').each(function(){
  var size_rand = min_figs_size + Math.floor(Math.random() * (max_figs_size + 1));
  var pos_rand = Math.floor(Math.random() * 101);
});
