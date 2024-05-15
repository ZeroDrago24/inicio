document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var nombre = document.getElementById("nombre").value.toUpperCase();
    var apellidos = document.getElementById("apellidos").value.toUpperCase();
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var nombreInicial = nombre[0].toLowerCase();
    var apellidosIniciales = apellidos.split(" ").map(apellido => apellido[0].toLowerCase()).join("");

    var añoNacimiento = fechaNacimiento.split("/")[0].slice(-2);

    var correoGenerado = nombreInicial + apellidosIniciales + añoNacimiento + "@gmail.com";

    alert("El correo electrónico generado es: " + correoGenerado);
});
