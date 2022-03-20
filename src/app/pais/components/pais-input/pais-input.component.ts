import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';




@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  ngOnInit(): void {
    this.debuncer
      .pipe(
        debounceTime(300)
      ).subscribe(valor => {
        this.onDebounce.emit(valor)
      });
  }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debuncer: Subject<string> = new Subject();

  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino);

  }
  teclaPresionada() {
    this.debuncer.next(this.termino)
  }


}
