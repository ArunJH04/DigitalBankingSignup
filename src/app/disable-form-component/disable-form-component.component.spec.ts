import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableFormComponentComponent } from './disable-form-component.component';

describe('DisableFormComponentComponent', () => {
  let component: DisableFormComponentComponent;
  let fixture: ComponentFixture<DisableFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
