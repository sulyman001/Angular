import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToItunesComponent } from './how-to-itunes.component';

describe('HowToItunesComponent', () => {
  let component: HowToItunesComponent;
  let fixture: ComponentFixture<HowToItunesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToItunesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToItunesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
