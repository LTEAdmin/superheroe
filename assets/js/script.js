const numSH = document.getElementsByClassName("numSH");

$("#form").on("submit", function (event) {
    event.preventDefault();
    const numSH = +$("#numSH").val();
    let Super=buscarSH(numSH);
}
);
