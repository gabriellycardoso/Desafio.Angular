import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolosMaciosComponent } from './bolos-macios.component';

describe('BolosMaciosComponent', () => {
  let component: BolosMaciosComponent;
  let fixture: ComponentFixture<BolosMaciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolosMaciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolosMaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
