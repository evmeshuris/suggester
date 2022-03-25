$(document).ready(function () {
  $("form#suggester").submit(function (event) {
    event.preventDefault();
    const startOverText = 'Start Over';

    if ($("#btnSubmit").html() == startOverText){
      resetForm();
      return;
    }

    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const ocupation = parseInt($("#ocupation").val());
    const experiense = parseInt($("#experiense").val());
    const answer = $("input:radio[name=answer]:checked").val();

    // if (ocupation === 4) {
    //   return alert("CS");
    // }
    // } else if (secondVal + thirdVal <= firstVal) {
    //   return alert("NOT a triangle");
    // } else if (firstVal + thirdVal <= secondVal) {
    //   return alert("NOT a triangle");
    // } 
    if (experiense > 10 && ocupation === 4) {
      $('#brainfuck').show();
    } else if (age < 18) {
      $('#python').show();
    } else if (ocupation === 3 || ocupation === 2) {
      $('#cs').show();
    } else if (answer === 'yes' && experiense === 0) {
      $('#python').show();
    }

    $("#btnSubmit").html(startOverText);
    
  });
});

function resetForm(){
  $("#age").val('');
  $('#python').hide();
  $("#btnSubmit").html('Submit');
}
// const result = add(name, number2);
//     $("#output").text(result);