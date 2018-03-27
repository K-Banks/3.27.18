
$(document).ready(function() {
  $("#clickMeDammit").submit(function(event) {
    var countBy = parseInt($("#countBy").val());
    var countTo = parseInt($("#countTo").val());
    var counter = parseInt($("#counter").val());
    for (counter; counter <= countTo; counter += countBy) {
      $(".insertNumbers").append('<li>' + counter + '</li>');
    }
    event.preventDefault();
  });
});
