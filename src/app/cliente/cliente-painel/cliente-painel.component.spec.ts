import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientePainelComponent } from './cliente-painel.component';

describe('ClientePainelComponent', () => {
  let component: ClientePainelComponent;
  let fixture: ComponentFixture<ClientePainelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientePainelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
