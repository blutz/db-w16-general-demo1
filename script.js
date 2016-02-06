$(document).ready(function() {

  $('#db-title').click(function() {
    $('#modal').removeClass('hidden');
  });

  $('#modal').click(function() {
    $(this).addClass('hidden');
  });

  $('.modal-box').click(function(e) {
    e.stopPropagation();
  });

});
