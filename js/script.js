$(document).ready(function() {
  let massNameA =[];
  let massNameB = [];
  let massNameC = [];

    $('#btn1').click(function() {

      $("#names .name").text(function (index, text)
      {
        if (text[0] === "A")
        {
          massNameA.push(text);
        }
        if (text[0] === "B")
        {
          massNameB.push(text);
        }
        if (text[0] === "C")
        {
          massNameC.push(text);
        }
      });

      $('#groups :header').replaceWith(function() {
        return `<h3>${$(this).text()}</h3>`;
      });

      $('#A').append("<ul id='Aclass'></ul>");
      massNameA.forEach(element => {
        $('#Aclass').append(`<li>${element}</li>`);
      });

      $('#B').append("<ul id='Bclass'></ul>");
      massNameB.forEach(element => {
        $('#Bclass').append(`<li>${element}</li>`);
      });

      $('#C').append("<ul id='Cclass'></ul>");
      massNameC.forEach(element => {
        $('#Cclass').append(`<li>${element}</li>`);
      });

      $(this).prop('disabled', true);
    });

    $('#btn2').click(function() {
      $('#Bclass').children().prepend("second ");
      $('#Cclass').children().append(" third");
      $('#Aclass li:odd').css({"color" : "red", "font-size" : "20px"});
      $('#Bclass li:odd').css({"color" : "red", "font-size" : "20px"});
      $('#Cclass li:odd').css({"color" : "red", "font-size" : "20px"});
    });
})