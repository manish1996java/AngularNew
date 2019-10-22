import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetailItemComponent } from './recipe-detail-item.component';

describe('RecipeDetailItemComponent', () => {
  let component: RecipeDetailItemComponent;
  let fixture: ComponentFixture<RecipeDetailItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeDetailItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
