var vowels = ['a', 'e', 'o', 'i', 'u', 'A', 'E', 'I', 'O', 'U'];
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
        }
      }
    }
    $('#hidden-string').hide();
    $('#puzzle').append(stringToHide);
    $('#puzzle').show();
    $('.guess').show();
  });
  $('.guess').submit(function(event){
    event.preventDefault();
    var userAnswer = $('#answer').val();
    if (userAnswer){
      console.log(userAnswer);
      if (userAnswer === stringToAnswer){
        $("#printAnswer").text("Good job!");
      } else {
        $("#printAnswer").text("Silly rabbit! Try again.");
      }
    }
  })
});
