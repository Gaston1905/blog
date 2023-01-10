import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudArticlesComponent } from './crud-articles.component';

describe('CrudArticlesComponent', () => {
  let component: CrudArticlesComponent;
  let fixture: ComponentFixture<CrudArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudArticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
