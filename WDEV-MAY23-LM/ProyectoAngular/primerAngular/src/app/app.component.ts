import { Component, OnInit } from '@angular/core';
import { Cursos } from './models/cursos';
import { Respuestacursos } from './models/respuestacursos';
// import importar librerias o clases
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  //Atributos
  title = 'primerAngular';

  // arregloDatos: Cursos[] = [
  //   { id: "1", nombre : "html5", descripcion : "111", tiempo : "1", usuario : "Santiago"},
  //   { id: "2", nombre : "css3", descripcion : "222", tiempo : "22", usuario : "Santiago"},
  //   { id: "3", nombre : "js", descripcion : "333", tiempo : "333", usuario : "Santiago"},
  //   { id: "4", nombre : "jquery", descripcion : "444", tiempo : "444", usuario : "Santiago"},
  //   { id: "5", nombre : "bootstrap", descripcion : "555", tiempo : "5555", usuario : "Santiago"}
  // ]
  

  arregloDatos: Cursos[] = [];


  constructor(private http: HttpClient) {}


  // ngOnInit(): void {
  //   //this.obtenerDatos();
  // }


  obtenerDatos(){
    const url = "https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php"


    this.http.get<Respuestacursos>(url).subscribe(
      (response) => {
        this.arregloDatos = response.data;
        console.log(response.data);
      },
      (error) =>{
        console.error('Error en la carga de datos', error);
      }
    )

  }
  ngOnInit() {
    this.obtenerDatos();
  }
  enviarSolicitudPost() {
    const url = 'https://paginas-web-cr.com/ApiPHP/apis/ListaCurso.php';

    // Datos que deseas enviar en la solicitud POST
    const data = {
      parametro1: 'valor1',
      parametro2: 'valor2'
      // Agrega más datos segun tus necesidades 
    };

    //Configura las cabeceras para la solicitud POST
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Ajusta el tipo de contenido segun el requerimiento
    })

    // Realiza la solicitud POST
    this.http.post(url, data, {headers}).subscribe(
      (response) => {
        // Maneja la respuesta de la API
        console.log('respuesta de la API:', response);
      },
      (error) => {
        // Maneja los errores de la solicitud
        console.error('Errer:', error);
      }
    );
  }

}


