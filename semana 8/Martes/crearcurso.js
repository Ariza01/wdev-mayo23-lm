var formulario = document.getElementById('formulario')
const myModal = new bootstrap.Modal(document.getElementById('modalId'))
formulario.addEventListener('submit', function(e)
{
    e.preventDefault();
    alert('creando');
})
