import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimalsComponent } from './add-animals.component';

describe('AjouterAnimauxComponent', () => {
  let component: AddAnimalsComponent;
  let fixture: ComponentFixture<AddAnimalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
