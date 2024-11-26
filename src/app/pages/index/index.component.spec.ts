import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { IndexComponent } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponent;
  let fixture: ComponentFixture<IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the correct text', () => {
    //Arrange
    const expectedMessage = "Testing the correct message";

    //Act
    component.message = expectedMessage;
    fixture.detectChanges();

    //Assert
    const paragraph = fixture.debugElement.query(By.css("[data-test-message]"));

    expect(paragraph).toBeTruthy();
    expect((paragraph.nativeElement as HTMLParagraphElement).textContent).toBe(expectedMessage);
  });
});
