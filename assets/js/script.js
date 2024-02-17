const numSH = document.getElementsByClassName("numSH");

$("#form").on("submit", function (event) {
  event.preventDefault();
  const numSH = $("#numSH").val();
  buscarSH(numSH);
});

function buscarSH(numSH) {
  numSH = +numSH;
  $.ajax({
    dataType: "json",
    type: "GET",
    url: `https://www.superheroapi.com/api.php/2619421814940190/${numSH}`,

    success: function (data) {
      let conexiones = `${data.connections["group-affiliation"]} ${data.connections["relatives"]}`;
      let biography = `${data.biography["full-name"]} ${data.biography["alter-ego"]} ${data.biography["aliases"]} ${data.biography["place-of-birth"]}`;
      let appearance = `${data.appearance["eye-color"]} ${data.appearance["gender"]} ${data.appearance["height"]} ${data.appearance["weight"]}`;
      let datoSH = `
        <div class="container">
            <h2>Super Heroe</h2>
            <div class="card my-3" style="max-width: 540px">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${data.image.url}" class="img-fluid rounded-start" alt="..." id="imgSH"/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title" id="nameSH">${data.name}</h5>
                        <p class="card-text" id="alterEgoSH">${biography}</p>
                        <hr>
                        <p class="card-text" id="descriptionSH">Publicado por: ${data.biography.publisher}</p>
                        <hr>
                        <p class="card-text " id="primeraAparicionSH">Primera aparicion: ${data.biography["first-appearance"]}</p>
                        <hr>
                        <p class="card-text" id="alturaSH">Altura:  ${data.appearance.height}</p>
                        <hr>
                        <p class="card-text" id="pesoSH">Peso: ${data.appearance.weight}</p>
                        <hr>
                        <p class="card-text" id="conexioneSH">Conexiones: ${conexiones}</p>
                        <p><small class="text-body-secondary">Last updated 3 mins ago</small</p>

                    </div>
                </div>
            </div>
        </div> `;
        $(".datosSH").append(datoSH);
        grafico(data.powerstats);
    },
    error: function (error) {
      alert(` no se encontro el Super Heroe ${numSH}`);
    },
  });
  return this;
}

function grafico(data) {
    let ejes = [];
    let grafico = `
    <div class="Grafico container">
        <canvas id="myChart" width="400" height="400"></canvas>
        </div>`;
  return this;
}
