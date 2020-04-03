import { Component, OnInit, Input } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Color } from 'src/app/models/color';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  colorCopy: boolean = false;
  navegarPagina: number;
  dataColores: any;
  totalPages = 1;
  constructor(private colorService: ColorService) { }

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
    this.colorService.getColor(nPage).subscribe(respServiceColor => {

      const modeloColors = new Color(JSON.parse(JSON.stringify(respServiceColor)));

      this.dataColores = modeloColors['data'];

      this.totalPages = modeloColors['totalPages'];

    });
  }
}
