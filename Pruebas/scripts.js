document.addEventListener("DOMContentLoaded", function () {
    const infoForm = document.getElementById("infoForm");

    infoForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellidos = document.getElementById("apellidos").value;
        const edad = document.getElementById("edad").value;
        const altura = document.getElementById("altura").value;
        const pais = document.getElementById("pais").value;

        // Recuperar datos existentes del LocalStorage o inicializar un arreglo vacío
        const storedData = JSON.parse(localStorage.getItem("personalInfo")) || [];

        // Agregar los nuevos datos al arreglo
        storedData.push({
            nombre: nombre,
            apellidos: apellidos,
            edad: edad,
            altura: altura,
            pais: pais
        });

        // Guardar el arreglo actualizado en el LocalStorage
        localStorage.setItem("personalInfo", JSON.stringify(storedData));

        // Redirigir a mostrar.html
        window.location.href = "mostrar.html";
    });
});
