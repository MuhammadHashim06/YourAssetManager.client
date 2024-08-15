import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseloadingComponent } from './responseloading.component';

describe('ResponseloadingComponent', () => {
  let component: ResponseloadingComponent;
  let fixture: ComponentFixture<ResponseloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseloadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
