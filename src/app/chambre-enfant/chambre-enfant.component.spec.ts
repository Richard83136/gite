import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreEnfantComponent } from './chambre-enfant.component';

describe('ChambreEnfantComponent', () => {
  let component: ChambreEnfantComponent;
  let fixture: ComponentFixture<ChambreEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreEnfantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
