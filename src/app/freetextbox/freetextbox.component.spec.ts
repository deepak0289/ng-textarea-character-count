import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FreetextboxComponent } from './freetextbox.component';

describe('FreetextboxComponent', () => {
  let component: FreetextboxComponent;
  let fixture: ComponentFixture<FreetextboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreetextboxComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreetextboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should show Maximum Character Limit when textbox is empty',() => {
    component.charactersMaximumLimit = 5000;
    component.textAdded = "";
    component.ngOnInit();
    expect(component.charactersRemaining).toBe(5000);
  });

  it('Should show Remaining Character Limit when textbox is partially filled',() => {
    component.charactersMaximumLimit = 5000;
    component.textAdded = "abcd";
    component.ngOnInit();
    expect(component.charactersRemaining).toBe(4996);
  })
});
