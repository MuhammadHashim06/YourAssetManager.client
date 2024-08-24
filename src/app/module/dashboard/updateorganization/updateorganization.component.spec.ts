import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateorganizationComponent } from './updateorganization.component';

describe('UpdateorganizationComponent', () => {
  let component: UpdateorganizationComponent;
  let fixture: ComponentFixture<UpdateorganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateorganizationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateorganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
