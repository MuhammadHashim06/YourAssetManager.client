import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterequestsComponent } from './createrequests.component';

describe('CreaterequestsComponent', () => {
  let component: CreaterequestsComponent;
  let fixture: ComponentFixture<CreaterequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreaterequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaterequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
