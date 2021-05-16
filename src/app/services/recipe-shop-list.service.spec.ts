import { TestBed } from '@angular/core/testing';

import { RecipeShopListService } from './recipe-shop-list.service';

describe('RecipeShopListService', () => {
  let service: RecipeShopListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeShopListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
