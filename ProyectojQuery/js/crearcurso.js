var formulario = document.getElementById('formulario');
const modalSuccess = new bootstrap.Modal(document.getElementById('modalSuccess'),);
var apibase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apicrer = "InsertarCursos.php";



$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();

        var datosEnviar = {
            "nombre": $('#nombre').val(),
            "descripcion": $('#descripcion').val(),
            "tiempo": $('#tiempo').val(),
            "usuario": "Santiago Ariza"
        }

        apiurl = apibase + apicrer;
        $.ajax({
            url: apiurl,
            type: 'POST',
            data: JSON.stringify(datosEnviar),
            contentType: 'application/json',
            success: function (datosrespuesta) {
                modalSuccess.modal('show');
                completeInsert();
            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});

// formulario.addEventListener('submit', function(e)
// {
//     e.preventDefault();

//     var datosEnviar = {
//         "nombre":document.getElementById('nombre').value,
//         "descripcion":document.getElementById('descripcion').value,
//         "tiempo":document.getElementById('tiempo').value,
//         "usuario":"Santiago Ariza"
//     }

//     apiurl = apibase + apicrer;
//     fetch(apiurl,
//         {
//             method:'POST',
//             body: JSON.stringify(datosEnviar)
//         })
//     .then(estructura => estructura.json())
//     .then((datosrespuesta) => {
//             modalSuccess.show(); 
//             completeInsert();
//         })
//     .catch(console.log);

      
// });

function completeInsert(){
    window.location = 'Listarcurso.html';
}

