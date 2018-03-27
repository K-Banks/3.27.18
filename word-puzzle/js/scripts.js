var vowels = ['a', 'e', 'o', 'i', 'u'];

$(document).ready(function() {
  $('input').submit(function(event){
    event.preventDefault();
    var stringToHide = $('input#hidden-string').val();
    for (var i = 0; i < vowels.length; i++) {
      stringToHide =  $(stringToHide).replace(/vowels[i]/g, '-');
    }
    $('#hidden-string').hide();
    $('#puzzle')
  })
});
