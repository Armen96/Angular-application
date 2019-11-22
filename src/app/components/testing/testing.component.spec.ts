import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;
  let app: TestingComponent;

  beforeEach(async(() => {

    app = new TestingComponent();

    TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set new message', () => {
    app.updateMessage('Testing');
    expect(app.message).toBe('Testing');
  });

  it('should clear message', () => {
    app.resetMessage();
    expect(app.message).toBe('');
  });

});
