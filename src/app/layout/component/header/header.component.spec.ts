import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderColorComponent } from './header.component';

describe('HeaderColorComponent', () => {
  let component: HeaderColorComponent;
  let fixture: ComponentFixture<HeaderColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderColorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
