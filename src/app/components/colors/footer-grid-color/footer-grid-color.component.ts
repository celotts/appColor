import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-grid-color',
  templateUrl: './footer-grid-color.component.html',
  styleUrls: ['./footer-grid-color.component.css']
})
export class FooterGridColorComponent implements OnInit {
  nPagina = 1;
  constructor() { }

  ngOnInit() {
  }


  siguiente() {
    console.log('fhgkjsdfhgksfd');
  }

  anterior() {
    console.log('hyuryturyturury');
  }
}
