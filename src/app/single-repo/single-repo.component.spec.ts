import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleRepoComponent } from './single-repo.component';

describe('SingleRepoComponent', () => {
  let component: SingleRepoComponent;
  let fixture: ComponentFixture<SingleRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
