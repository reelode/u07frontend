import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeShopItemComponent } from './recipe-shop-item.component';

describe('RecipeShopItemComponent', () => {
  let component: RecipeShopItemComponent;
  let fixture: ComponentFixture<RecipeShopItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeShopItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeShopItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
