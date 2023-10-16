import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToAmazonComponent } from './how-to-amazon.component';

describe('HowToAmazonComponent', () => {
  let component: HowToAmazonComponent;
  let fixture: ComponentFixture<HowToAmazonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowToAmazonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowToAmazonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
