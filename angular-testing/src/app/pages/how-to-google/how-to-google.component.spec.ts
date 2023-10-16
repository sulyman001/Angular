import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToGoogleComponent } from './how-to-google.component';

describe('HowToGoogleComponent', () => {
  let component: HowToGoogleComponent;
  let fixture: ComponentFixture<HowToGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToGoogleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
