import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {
  //'EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN', 'EEU', 'AL', 'ASEAN', 'CAIS','CEFTA','NAFTA','SAARC'
  regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  regionAcitva: string = '';
  paises: Country[] = [];



  constructor(private paisService: PaisService) { }

  activarRegion(region: string) {

    if (region == this.regionAcitva) { return };

    this.regionAcitva = region;
    this.paises = [];

    this.paisService.buscarRegion(this.regionAcitva).subscribe(paises => {
      this.paises = paises;
    });

  }



}
