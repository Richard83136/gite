import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreAdulte1Component } from './chambre-adulte1.component';

describe('ChambreAdulte1Component', () => {
  let component: ChambreAdulte1Component;
  let fixture: ComponentFixture<ChambreAdulte1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreAdulte1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreAdulte1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
