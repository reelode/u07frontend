import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecipeContainerComponent } from './search-recipe-container.component';

describe('SearchRecipeContainerComponent', () => {
  let component: SearchRecipeContainerComponent;
  let fixture: ComponentFixture<SearchRecipeContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchRecipeContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRecipeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
