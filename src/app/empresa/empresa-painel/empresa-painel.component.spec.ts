import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaPainelComponent } from './empresa-painel.component';

describe('EmpresaPainelComponent', () => {
  let component: EmpresaPainelComponent;
  let fixture: ComponentFixture<EmpresaPainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaPainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaPainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
