import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutColorComponent } from './layout.component';

describe('LayoutColorComponent', () => {
  let component: LayoutColorComponent;
  let fixture: ComponentFixture<LayoutColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutColorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
