import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.css']
})
export class ColorGridComponent implements OnInit {

  @Input() dataColors;
  @Input() colorCopiado: any = false;

  // tslint:disable-next-line: no-output-rename
  @Output('copiar')
  copiado: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
  }

  copiar(i) {
    this.spinner.show();
    const COLOR_A_COPIAR = document.getElementById('colorCopy-' + i);
    const SELECCION = document.createRange();
    SELECCION.selectNodeContents(COLOR_A_COPIAR);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(SELECCION);
    const RES = document.execCommand('copy');
    window.getSelection().removeRange(SELECCION);

    console.log('Se ha copiado el color:' + SELECCION);

    this.copiado.emit(true);
    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 400);

  }


}
