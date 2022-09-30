let month, day, year;

const button = document.getElementById("Calc");

function eventHandler(){ // Ejecuta las funciones al hacer clic en el botón
    readInputDate();

    let ok = 0;
    monthRead > 12 ? alert("Mes no válido"): ok++;
    dayRead > 31 ? alert("Día no válido"): ok++;
    (dayRead > 28 && monthRead == 2) ? alert("¡Febrero sólo tiene 28 días!") : ok++;
    if (ok === 3) calcula(day,month,year);
}

function readInputDate(){ // Función para leer fecha de entrada
    monthRead = document.getElementById("month").value;
    dayRead = document.getElementById("day").value;
    yearRead = document.getElementById("year").value;

}


function calcula(day=dayRead,month=monthRead,year=yearRead) { //Verifica si es día habil
    let dia = (new Date(year, month-1, day)).getDay();
    let message = "";
    document.getElementById("resultado").innerHTML = " ";

    switch (dia) {
        case 0:
            message = "¡Suertudotx! Cae en domingo ;) (Día inhábil)";
            break;
        case 6:
            message = "¡Saca las cheves! Cae en sábado ;) (Día inhábil)";
            break;
        default:
            message = "Día hábil :(";
    }
    document.getElementById("resultado").innerHTML = message;
}
