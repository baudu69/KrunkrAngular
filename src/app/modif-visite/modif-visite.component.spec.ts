import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifVisiteComponent } from './modif-visite.component';

describe('ModifVisiteComponent', () => {
  let component: ModifVisiteComponent;
  let fixture: ComponentFixture<ModifVisiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifVisiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
