import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor:pointer;
    }
    
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paisesCountry: Country[] = [];
  paisesSugeridos: Country[] = [];
  sugerencia: boolean = false;

  constructor(private paisService: PaisService) {

  }

  buscar(termino: string) {

    this.hayError = false;
    this.termino = termino;


    this.paisService.buscar(termino)
      .subscribe((paises) => {
        console.log(paises);
        this.paisesCountry = paises;


      },


        (err) => {
          this.hayError = true;
          this.paisesCountry = [];


        });
  }
  sugerencias(termino: string) {

    this.termino = termino
    this.hayError = false
    this.sugerencia = true;
    this.paisService.buscar(termino).
      subscribe(

        paises => this.paisesSugeridos = paises.splice(0, 5),

        (err) => this.paisesSugeridos = []


      );





  }
  buscarSugerido(termino: string) {
    this.buscar(termino);


  }


}
