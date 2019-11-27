import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpConnComponent } from './http-conn.component';

describe('HttpConnComponent', () => {
  let component: HttpConnComponent;
  let fixture: ComponentFixture<HttpConnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpConnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpConnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
