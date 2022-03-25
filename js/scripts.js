$(document).ready(function () {
  $("#suggester").submit(function (event) {
    event.preventDefault();
    const startOverText = 'Start Over';

    if ($("#btnSubmit").html() == startOverText) {
      resetForm();
      return;
    }

    $("#suggester").validate();

    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const occupation = parseInt($("#occupation").val());
    const experience = parseInt($("#experience").val());
    const finance = $("input:radio[name=finance]:checked").val();

    if (experience > 10 && occupation === 4) {
      showResult(name, 'Brainfuck');
    } else if (age >= 5 && age < 10 && occupation === 0) {
      showResult(name, 'Codding for Kids');
    } else if (occupation === 3 || occupation === 2 || occupation === 6) {
      showResult(name, 'C#');
    } else if (finance === 'yes' && experience === 0 && age > 21) {
      showResult(name, 'Python');
    } else {
      showResult(name, 'Epicodus');
    }

    $("#btnSubmit").html(startOverText);

  });
});

function showResult(name, language) {
  $("#spanResName").text(name);
  $("#spanResLang").text(language);
  $('#divResult').show();
}

function resetForm() {
  $("#name").val('');
  $("#age").val('');
  $("#occupation").val('')
  $("#experience").val('')
  $("input:radio[name=answer]:checked").val('');
  $("#divResult").hide();
  $("#btnSubmit").html('Submit');
}

