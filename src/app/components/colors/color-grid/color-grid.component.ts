import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';


@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.css']
})
export class ColorGridComponent implements OnInit {
  dataColor: Color;

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.getColor();
  }

  getColor(nPage: number = 2) {
    this.colorService.getColor(nPage).subscribe(respServiceColor => {

      const dataColors = new Color(JSON.parse(JSON.stringify(respServiceColor)));

      // tslint:disable-next-line: no-string-literal
      this.dataColor = dataColors['data'];
      console.log('hjhjhjhjjh', this.dataColor);
    });
  }

}
