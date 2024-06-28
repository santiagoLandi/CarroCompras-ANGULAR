import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PescaAboutComponent } from './pesca-about.component';

describe('PescaAboutComponent', () => {
  let component: PescaAboutComponent;
  let fixture: ComponentFixture<PescaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PescaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PescaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
