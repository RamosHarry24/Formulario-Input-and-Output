import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpersonasComponent } from './rpersonas.component';

describe('RpersonasComponent', () => {
  let component: RpersonasComponent;
  let fixture: ComponentFixture<RpersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
