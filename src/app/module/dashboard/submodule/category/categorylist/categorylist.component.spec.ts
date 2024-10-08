import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorylistComponent } from './categorylist.component';

describe('CategorylistComponent', () => {
  let component: CategorylistComponent;
  let fixture: ComponentFixture<CategorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategorylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
