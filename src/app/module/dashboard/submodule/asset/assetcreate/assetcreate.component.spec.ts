import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcreateComponent } from './assetcreate.component';

describe('AssetcreateComponent', () => {
  let component: AssetcreateComponent;
  let fixture: ComponentFixture<AssetcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetcreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
