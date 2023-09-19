document.addEventListener("DOMContentLoaded", function () {
    const infoList = document.getElementById("infoList");

    // Recuperar datos del LocalStorage y mostrarlos
    const storedData = JSON.parse(localStorage.getItem("personalInfo")) || [];

    function mostrarDatosEnLista(datos) {
        infoList.innerHTML = ""; // Limpiar la lista antes de mostrar los datos

        for (const dato of datos) {
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.innerHTML = `<strong>Nombre:</strong> ${dato.nombre}, <strong>Apellidos:</strong> ${dato.apellidos}, <strong>Edad:</strong> ${dato.edad}, <strong>Altura:</strong> ${dato.altura} cm, <strong>País:</strong> ${dato.pais}`;
            infoList.appendChild(listItem);
        }
    }

    mostrarDatosEnLista(storedData);

    // Limpiar LocalStorage (opcional)
    document.getElementById("limpiarLocalStorage").addEventListener("click", function () {
        localStorage.removeItem("personalInfo");
        infoList.innerHTML = ""; // Limpiar la lista
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const infoList = document.getElementById("infoList");

    // Recuperar datos del LocalStorage y mostrarlos
    const storedData = JSON.parse(localStorage.getItem("personalInfo")) || [];

    function mostrarDatosEnLista(datos) {
        infoList.innerHTML = ""; // Limpiar la lista antes de mostrar los datos

        for (let i = 0; i < datos.length; i++) {
            const dato = datos[i];
            const listItem = document.createElement("li");
            listItem.classList.add("list-group-item");
            listItem.innerHTML = `<strong>Nombre:</strong> ${dato.nombre}, <strong>Apellidos:</strong> ${dato.apellidos}, <strong>Edad:</strong> ${dato.edad}, <strong>Altura:</strong> ${dato.altura} cm, <strong>País:</strong> ${dato.pais}`;
            
            // Agregar un botón para eliminar el formulario
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("btn", "btn-danger", "btn-sm", "float-end");
            deleteButton.textContent = "Eliminar";
            deleteButton.addEventListener("click", function () {
                // Eliminar el formulario del arreglo
                storedData.splice(i, 1);
                // Actualizar el LocalStorage
                localStorage.setItem("personalInfo", JSON.stringify(storedData));
                // Mostrar nuevamente los datos
                mostrarDatosEnLista(storedData);
            });
            listItem.appendChild(deleteButton);
            
            infoList.appendChild(listItem);
        }
    }

    mostrarDatosEnLista(storedData);

    // Limpiar LocalStorage (opcional)
    document.getElementById("limpiarLocalStorage").addEventListener("click", function () {
        localStorage.removeItem("personalInfo");
        infoList.innerHTML = ""; // Limpiar la lista
    });
});





