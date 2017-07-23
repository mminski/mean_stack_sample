import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgbComponent } from './bgb.component';

describe('BgbComponent', () => {
  let component: BgbComponent;
  let fixture: ComponentFixture<BgbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
