import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataloadingComponent } from './dataloading.component';

describe('DataloadingComponent', () => {
  let component: DataloadingComponent;
  let fixture: ComponentFixture<DataloadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataloadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataloadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
