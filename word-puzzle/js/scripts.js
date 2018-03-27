var vowels = ['a', 'e', 'o', 'i', 'u', 'A', 'E', 'I', 'O', 'U'];
var stringToHide = "";
var stringToAnswer = "";

// here es yeer pezzle


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
    $('#puzzle').text(stringToHide);
    $('#puzzle').show();
    $('.guess').show();
  });
  $('.guess').submit(function(event){
    event.preventDefault();
       debugger;
    var userAnswer = $('#answer').val();
    stringToHide = stringToHide.replace(stringToHide.charAt(1), stringToAnswer.charAt(2));
    console.log(stringToHide);
    for (var i = 0; i <= userAnswer.length; i++) {
      if (userAnswer.charAt(i) === stringToAnswer.charAt(i)) {
        stringToHide = stringToHide.replace(stringToHide.charAt(i), stringToAnswer.charAt(i));
        console.log(stringToHide);
      }
    }
    $('#puzzle').text(stringToHide);
    if (userAnswer === stringToAnswer) {
      $("#printAnswer").text("Good job!");
    } else {
      $("#printAnswer").text("So close! Keep trying.");
    }
  });
});
