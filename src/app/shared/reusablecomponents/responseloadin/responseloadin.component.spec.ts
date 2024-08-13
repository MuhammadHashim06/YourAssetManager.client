import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseloadinComponent } from './responseloadin.component';

describe('ResponseloadinComponent', () => {
  let component: ResponseloadinComponent;
  let fixture: ComponentFixture<ResponseloadinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponseloadinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponseloadinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
