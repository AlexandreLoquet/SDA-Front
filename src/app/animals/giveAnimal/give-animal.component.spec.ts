import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveAnimalComponent } from './give-animal.component';

describe('DonnerAnimauxComponent', () => {
  let component: GiveAnimalComponent;
  let fixture: ComponentFixture<GiveAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
