var vowels = ['a', 'e', 'o', 'i', 'u'];
var stringToPrint = "";
var stringToHide = "";

$(document).ready(function() {
  $('#form').submit(function(event){
    debugger
    event.preventDefault();
    stringToHide = $('input#hidden-string').val();
    for (var i = 0; i < vowels.length; i++) {
      stringToPrint = stringToHide.replace(new RegExp(vowels[i], 'g'), "-");
    }
    console.log(stringToHide);
    console.log(stringToPrint);
    $('#hidden-string').hide();
    $('p').append(stringToPrint);
    $('p').show();
  });
});
