let formulario = document.querySelector("#formulario");
let minutosInput = document.querySelector("#minutos");
let segundosInput = document.querySelector("#segundos");
let tabla = document.querySelector("#tabla");
let msgerror = document.querySelector("#error");
let tiempos = [];

let calcularVelocidad = (minutos, segundos) => {
    const distancia = 1500; // Distancia en metros
    let tiempo = segundos + minutos * 60;
    let velocidad = distancia / tiempo;
    return velocidad.toFixed(2);
}

let imprimir = (tiempos) => {
    let msg = "<table class='table table-bordered'><thead><th>No</th><th>Minutos</th><th>Segundos</th><th>Velocidad (m/s)</th></thead>";
    msg += "<tbody>";
    let i = 0;
    while (i < tiempos.length) {
        let tiempo = tiempos[i];
        let velocidad = calcularVelocidad(tiempo.minutos, tiempo.segundos);
        msg += "<tr>";
        msg += `<td>${i + 1}</td>`;
        msg += `<td>${tiempo.minutos}</td>`;
        msg += `<td>${tiempo.segundos}</td>`;
        msg += `<td>${velocidad}</td>`;
        msg += "</tr>";
        i++;
    }
    msg += "</tbody></table>";
    tabla.innerHTML = msg;
}

formulario.addEventListener("submit", (event) => {
    let centinela = false;
    let error = "";
    let minutos = parseInt(minutosInput.value);
    let segundos = parseInt(segundosInput.value);

    if (isNaN(minutos) || minutos < 0 || isNaN(segundos) || segundos < 0 || segundos >= 60) {
        error = "Ingrese valores válidos para minutos y segundos.";
        centinela = true;
    }

    if (minutos === 0 && segundos === 0) {
        return; // Termina la ejecución si se ingresa 0:0
    }

    if (centinela) {
        msgerror.innerHTML = error;
    } else {
        tiempos.push({ minutos, segundos });
        imprimir(tiempos);
        limpiar();
    }

    event.preventDefault();
});

let limpiar = () => {
    minutosInput.value = "";
    segundosInput.value = "";
    minutosInput.focus();
    msgerror.innerHTML = "";
}