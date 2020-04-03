import { Component, OnInit, Input } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';
import Swal from 'sweetalert2';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colorCopy = false;
  navegarPagina: number;
  dataColores: any;
  totalPages = 1;
  constructor(
    private colorService: ColorService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {

    this.colorCopy = true;
    this.getColor(1);
  }

  paginacionChange(event) {
    this.colorCopy = true;
    this.getColor(event);
  }

  copiado(event) {

    this.colorCopy = !event;

  }

  getColor(nPage: number = 1) {
    this.spinner.show();
    this.colorService.getColor(nPage).subscribe(respServiceColor => {

      const modeloColors = new Color(JSON.parse(JSON.stringify(respServiceColor)));

      this.dataColores = modeloColors['data'];

      this.totalPages = modeloColors['totalPages'];
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 400);

    }, err => {
      this.spinner.hide();
      Swal.fire({
        title: 'Error!',
        text: 'Ha ocurrido un erro interno, al invocar el servicio123',
        icon: 'error',
        confirmButtonText: 'Cerrar'
      })
    });
  }
}
