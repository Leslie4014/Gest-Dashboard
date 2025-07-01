import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BotonesEmpresaComponent } from './botones-empresa';

describe('BotonesEmpresaComponent', () => {
  let component: BotonesEmpresaComponent;
  let fixture: ComponentFixture<BotonesEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonesEmpresaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BotonesEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

