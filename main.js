/*слайдер партнеров*/
$(function () {
  
    $('#slide').scrollbox({
      direction: 'h',
      distance: 130
    });
    $('#slide-backward').click(function () {
      $('#slide').trigger('backward');
    });
    $('#slide-forward').click(function () {
      $('#slide').trigger('forward');
    });
  });