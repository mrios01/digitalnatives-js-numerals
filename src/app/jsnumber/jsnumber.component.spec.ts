import { TestBed, ComponentFixture } from "@angular/core/testing";
import { JsnumberComponent } from "./jsnumber.component";

let component: JsnumberComponent;
let fixture: ComponentFixture<JsnumberComponent>;

describe("JsnumberComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsnumberComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsnumberComponent);
    component = fixture.debugElement.componentInstance;
  });

  it(`should display a phrase describing a number 'js-numerals'`, () => {
    component.numtoletter = "7";
    component.onTransform();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toEqual("7 == seven ");
  });

  it(`should display a phrase describing a number 'js-numerals'`, () => {
    component.numtoletter = "42";
    component.onTransform();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toEqual(
      "42 == forty two "
    );
  });

  it(`should display a phrase describing a number 'js-numerals'`, () => {
    component.numtoletter = "2001";
    component.onTransform();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toEqual(
      "2001 == two thousand one "
    );
  });

  it(`should display a phrase describing a number 'js-numerals'`, () => {
    component.numtoletter = "1999";
    component.onTransform();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toEqual(
      "1999 == one thousand nine hundred ninety nine "
    );
  });

  it(`should display a phrase describing a number 'js-numerals'`, () => {
    component.numtoletter = "17999";
    component.onTransform();
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector("h3").textContent).toEqual(
      "17999 == seventeen thousand nine hundred ninety nine "
    );
  });
});
