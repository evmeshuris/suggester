$(document).ready(function () {
  $("form#suggester").submit(function (event) {
    //event.preventDefault();
    const startOverText = 'Start Over';

    if ($("#btnSubmit").html() == startOverText) {
      resetForm();
      return;
    }

    $("form#suggester").validate();

    const name = $("#name").val();
    const age = parseInt($("#age").val());
    const occupation = parseInt($("#occupation").val());
    const experience = parseInt($("#experience").val());
    const answer = $("input:radio[name=answer]:checked").val();

    if (experience > 10 && occupation === 4) {
      $('#brainfuck').show();
    } else if (age > 5 && age < 10 && occupation === 0) {
      $('#kids').show();
    } else if (occupation === 3 || occupation === 2) {
      $('#cs').show();
    } else if (answer === 'yes' && experience === 0) {
      $('#python').show();
    } else if (experience === 0 && age > 21) {
      $('#epicodus').show();
    }

    $("#btnSubmit").html(startOverText);

  });
});

function resetForm() {
  $("#name").val('');
  $("#age").val('');
  $("#occupation").val('')
  $("#experience").val('')
  $("input:radio[name=answer]:checked").val('');
  $("#python").hide();
  $("#cs").hide();
  $("#brainfuck").hide();
  $("#kids").hide();
  $("#epicodus").hide();
  $("#btnSubmit").html('Submit');
}

$(function() {
  $("form#suggester").validate({
    rules: {
      name: "required",
      age: "required",
      occupation: "required",
      experience: "required",
      finace: "required",
      age: {
        required: true,
        maxlength: 2
      },
      experience: {
        required: /^[0-9]+$/,
      }
    },
    messages: {
      name: "Please enter your firstname",
      age: {
        required: "Please enter your age",
        maxlength: "Don't you want to have a rest insted of learning programming language"
      },
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
