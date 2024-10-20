import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTrapicheComponent } from './crear-trapiche.component';

describe('CrearTrapicheComponent', () => {
  let component: CrearTrapicheComponent;
  let fixture: ComponentFixture<CrearTrapicheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearTrapicheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTrapicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
