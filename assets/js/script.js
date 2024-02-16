const numSH = document.getElementById("numSH");

$(document).ready(function () {
  $('.btn').click(function () {
    $(this).bucarSH(numSH.value);
  });
});
