let formulario = document.querySelector("#formulario");
let marcaInput = document.querySelector("#marca");
let modeloInput = document.querySelector("#modelo");
let tabla = document.querySelector("#tabla");
let msgerror = document.querySelector("#error");
let automoviles = [];

let imprimir = (automoviles) => {
    let msg = "<table class='table table-bordered'><thead><th>No</th><th>Marca</th><th>Modelo</th></thead>";
    msg += "<tbody>";
    let i = 0;
    while (i < automoviles.length) {
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${automoviles[i].modelo}</td>`;
        msg += `<td>${automoviles[i].marca}</td>`;
        msg += "</tr>";
        i++;
    }
    msg += "</tbody></table>";
    tabla.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    if (marcaInput.value.trim().length === 0 || modeloInput.value.trim().length === 0) {
        error = "Ingrese la marca y el modelo del automóvil";
        centinela = true;
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        let automovil = {
            marca: marcaInput.value.trim(),
            modelo: modeloInput.value.trim()
        };
        automoviles.push(automovil);
        imprimir(automoviles);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    marcaInput.value = "";
    modeloInput.value = "";
    marcaInput.focus();
}
