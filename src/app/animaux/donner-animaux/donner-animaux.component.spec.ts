import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnerAnimauxComponent } from './donner-animaux.component';

describe('DonnerAnimauxComponent', () => {
  let component: DonnerAnimauxComponent;
  let fixture: ComponentFixture<DonnerAnimauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnerAnimauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnerAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
