import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibElementComponent } from './lib-element.component';

describe('LibElementComponent', () => {
  let component: LibElementComponent;
  let fixture: ComponentFixture<LibElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
