import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-color-copy',
  templateUrl: './color-copy.component.html',
  styleUrls: ['./color-copy.component.css']
})
export class ColorCopyComponent implements OnInit {
  colorCopy: boolean = true;
  @Input() itemCopiado;
  constructor() { }

  ngOnInit() {


  }

}
