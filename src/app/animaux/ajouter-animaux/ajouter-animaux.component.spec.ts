import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterAnimauxComponent } from './ajouter-animaux.component';

describe('AjouterAnimauxComponent', () => {
  let component: AjouterAnimauxComponent;
  let fixture: ComponentFixture<AjouterAnimauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterAnimauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
