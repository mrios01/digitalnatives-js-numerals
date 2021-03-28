import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jsnumber",
  templateUrl: "./jsnumber.component.html",
  styleUrls: ["./jsnumber.component.css"]
})
export class JsnumberComponent implements OnInit {
  numtoletter = 0;

  constructor() {}

  ngOnInit() {}

  onTransform() {
    console.log(this.numtoletter);
  }
}
