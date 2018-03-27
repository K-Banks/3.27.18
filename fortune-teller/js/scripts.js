var alignmentCounter = 0;

$(document).ready(function(){
  $("#formSubmission").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=patsy]:checked").each(function(){
      alignmentCounter += parseInt($(this).val());
    });
    if (alignmentCounter < 0) {
      $(".evil").show();
      $(".neutral").hide();
      $(".good").hide();
    } else if (alignmentCounter === 0) {
      $(".neutral").show();
      $(".evil").hide();
      $(".good").hide();
    } else if (alignmentCounter > 0) {
      $(".good").show();
      $(".neutral").hide();
      $(".evil").hide();
    }
    alignmentCounter = 0;
  });
});
