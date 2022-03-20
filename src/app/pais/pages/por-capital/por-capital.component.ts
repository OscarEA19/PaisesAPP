import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  hayError: boolean = false;
  paisesCountry: Country[] = [];
  @Input() place: String = 'Buscar capital';

  buscarPorCapital(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPorCapital(termino).subscribe(paises => {
      this.paisesCountry = paises;

    },
      (err) => {
        this.hayError = true;
        this.paisesCountry = [];

      }

    );

  }

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

}
