import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiURL: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flags,population');
  }


  constructor(private http: HttpClient) { }

  buscar(termino: string): Observable<Country[]> {

    const url = ` ${this.apiURL}/name/${termino}`

    return this.http.get<Country[]>(url, { params: this.httpParams });

  }
  buscarPorCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${termino}`
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }
  getPaisPorCodigo(id: string): Observable<Country> {
    const url = `${this.apiURL}/alpha/${id}`
    return this.http.get<Country>(url);
  }
  buscarRegion(region: string): Observable<Country[]> {
    const url = `${this.apiURL}/regionalbloc/${region}`;
    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

}
