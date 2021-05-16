import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeShopListComponent } from './recipe-shop-list.component';

describe('RecipeShopListComponent', () => {
  let component: RecipeShopListComponent;
  let fixture: ComponentFixture<RecipeShopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeShopListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeShopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
