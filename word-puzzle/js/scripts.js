var vowels = ['a', 'e', 'o', 'i', 'u'];
var stringToHide = "";
var stringToAnswer = "";

$(document).ready(function() {
  $('#form').submit(function(event){
    // debugger
    event.preventDefault();
    stringToHide = $('input#hidden-string').val();
    stringToAnswer = stringToHide;
    for (var i = 0; i < vowels.length; i++) {
      var vowelCheck = vowels[i];
      for (var j = 0; j < stringToHide.length; j++) {
        if (stringToHide.charAt(j) === vowelCheck) {
          stringToHide = stringToHide.replace(stringToHide.charAt(j), '-');
          console.log(stringToHide);
        }
      }
    }
    console.log(stringToHide);
    $('#hidden-string').hide();
    $('p').append(stringToHide);
    $('p').show();
    $('.guess').show();
  });
});
