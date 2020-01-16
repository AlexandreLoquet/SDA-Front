import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyAnimalComponent } from './modify-animal.component';

describe('ModifierAnimauxComponent', () => {
  let component: ModifyAnimalComponent;
  let fixture: ComponentFixture<ModifyAnimalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyAnimalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
