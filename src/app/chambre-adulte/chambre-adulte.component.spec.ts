import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreAdulteComponent } from './chambre-adulte.component';

describe('ChambreAdulteComponent', () => {
  let component: ChambreAdulteComponent;
  let fixture: ComponentFixture<ChambreAdulteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreAdulteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreAdulteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
