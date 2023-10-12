var formulario = document.querySelector('formulario');

const myModalCrear = new bootstrap.Modal(document.getElementById('myModalCrear'));

var apiBase = "https://paginas-web-cr.com/ApiPHP/apis/";
var apiCrear = "InsertarGrupo.php";

var urlCrear = apiBase + apiCrear;

$(document).ready(function () {
    $(btnenviar).click(function (e) { 
        e.preventDefault();
        
        var datosEnviar = {
            "nombre": $("#nombre").val(),
            "usuario": "Santiago Ariza"
        }

        $.ajax({
            type: "POST",
            url: urlCrear,
            data: JSON.stringify(datosEnviar),
            dataType: "json",
            success: function (response) {
                completarInsertar()
            },
            error: function ( xhr, textStatus, errorThrown){
                console.log("Error", errorThrown);
            }
        });

        function completarInsertar(){
            window.location = 'ListarGrupo.html'
        }
        
    });
   
});