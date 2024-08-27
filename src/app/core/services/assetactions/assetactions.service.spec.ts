import { TestBed } from '@angular/core/testing';

import { AssetactionsService } from './assetactions.service';

describe('AssetactionsService', () => {
  let service: AssetactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
