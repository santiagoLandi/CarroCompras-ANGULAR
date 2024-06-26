import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PescaListComponent } from './pesca-list.component';

describe('PescaListComponent', () => {
  let component: PescaListComponent;
  let fixture: ComponentFixture<PescaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PescaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PescaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
