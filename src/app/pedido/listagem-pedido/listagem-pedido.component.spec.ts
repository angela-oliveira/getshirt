import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPedidoComponent } from './listagem-pedido.component';

describe('ListagemClienteComponent', () => {
  let component: ListagemPedidoComponent;
  let fixture: ComponentFixture<ListagemPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
