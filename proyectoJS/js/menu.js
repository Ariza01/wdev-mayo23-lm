 menuprincipal.innerHTML += `
<nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <a class="navbar-brand" href="index.html">Inicio</a>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
                <a class="nav-link active" href="listarcurso.html" aria-current="page">Listar Curso<span class="visually-hidden">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://paginas-web-cr.com/ApiPHP/">Api</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">cursos</a>
                <div class="dropdown-menu" aria-labelledby="dropdownId">
                    <a class="dropdown-item" href="listarcurso.html">Listar Curso</a>
                    <a class="dropdown-item" href="crearcurso.html">Curso</a>
                </div>
            </li>
        </ul>
    </div>
</nav>`;