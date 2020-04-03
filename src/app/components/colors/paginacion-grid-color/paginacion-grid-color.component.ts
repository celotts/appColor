import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-paginacion-grid-color',
  templateUrl: './paginacion-grid-color.component.html',
  styleUrls: ['./paginacion-grid-color.component.css']
})
export class PaginacionGridColorComponent implements OnInit {
  nPagina = 1;
  @Input() pagesTotal;

  // tslint:disable-next-line: no-output-rename
  @Output('navegacion')
  change: EventEmitter<number> = new EventEmitter<number>();
  // tslint:disable-next-line: no-output-rename
  @Output('copiar')
  copiado: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  changePage(accion) {
    this.copiado.emit(false);
    switch (accion) {
      case 'siguiente': {
        if (this.nPagina < this.pagesTotal) {
          this.nPagina += 1;
          this.change.emit(this.nPagina);
        }
        break;
      }
      case 'anterior': {
        if (this.nPagina > 1) {
          this.nPagina -= 1;
          this.change.emit(this.nPagina);
        }
        break;
      }
    }
  }
}
