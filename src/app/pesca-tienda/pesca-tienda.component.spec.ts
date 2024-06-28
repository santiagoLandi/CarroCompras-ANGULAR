import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PescaTiendaComponent } from './pesca-tienda.component';

describe('PescaTiendaComponent', () => {
  let component: PescaTiendaComponent;
  let fixture: ComponentFixture<PescaTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PescaTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PescaTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
