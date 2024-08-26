import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourrequestsComponent } from './yourrequests.component';

describe('YourrequestsComponent', () => {
  let component: YourrequestsComponent;
  let fixture: ComponentFixture<YourrequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YourrequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourrequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
