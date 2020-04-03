import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorCopyComponent } from './color-copy.component';

describe('ColorCopyComponent', () => {
  let component: ColorCopyComponent;
  let fixture: ComponentFixture<ColorCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
