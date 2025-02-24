import { TestBed } from '@angular/core/testing';

import { ProductStaticService } from './product-static.service';

describe('ProductStaticService', () => {
  let service: ProductStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
