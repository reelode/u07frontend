import { TestBed } from '@angular/core/testing';

import { RecipeListStorageService } from './recipe-list-storage.service';

describe('RecipeListStorageService', () => {
  let service: RecipeListStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeListStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
