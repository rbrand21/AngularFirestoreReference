import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCollectionComponent } from './get-collection.component';

describe('GetCollectionComponent', () => {
  let component: GetCollectionComponent;
  let fixture: ComponentFixture<GetCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
