import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataloadinComponent } from './dataloadin.component';

describe('DataloadinComponent', () => {
  let component: DataloadinComponent;
  let fixture: ComponentFixture<DataloadinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataloadinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataloadinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
