import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-jsnumber",
  templateUrl: "./jsnumber.component.html",
  styleUrls: ["./jsnumber.component.css"]
})
export class JsnumberComponent implements OnInit {
  numtoletter = "";
  phrase = "";

  constructor() {}

  ngOnInit() {}

  onTransform() {
    // System for American Numbering
    let th_val = ["", "thousand", "million", "billion", "trillion"];
    // System for uncomment this line for Number of English
    // let th_val = ['','thousand','million', 'milliard','billion'];

    let dg_val = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine"
    ];
    let tn_val = [
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen"
    ];
    let tw_val = [
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety"
    ];

    // function toWordsconver(s) {
    //s = s.toString();
    let s: any = this.numtoletter;
    s = s.replace(/[\, ]/g, "");
    if (s != parseFloat(s)) return "not a number ";
    let x_val = s.indexOf(".");
    if (x_val == -1) x_val = s.length;
    if (x_val > 15) return "too big";
    let n_val = s.split("");
    let str_val = "";
    let sk_val = 0;
    for (let i = 0; i < x_val; i++) {
      if ((x_val - i) % 3 == 2) {
        if (n_val[i] == "1") {
          str_val += tn_val[Number(n_val[i + 1])] + " ";
          i++;
          sk_val = 1;
        } else if (n_val[i] != 0) {
          str_val += tw_val[n_val[i] - 2] + " ";
          sk_val = 1;
        }
      } else if (n_val[i] != 0) {
        str_val += dg_val[n_val[i]] + " ";
        if ((x_val - i) % 3 == 0) str_val += "hundred ";
        sk_val = 1;
      }
      if ((x_val - i) % 3 == 1) {
        if (sk_val) str_val += th_val[(x_val - i - 1) / 3] + " ";
        sk_val = 0;
      }
    }
    if (x_val != s.length) {
      let y_val = s.length;
      str_val += "point ";
      for (let i: number = x_val + 1; i < y_val; i++)
        str_val += dg_val[n_val[i]] + " ";
    }
    //return str_val.replace(/\s+/g, " ");
    this.phrase = this.numtoletter + " == " + str_val.replace(/\s+/g, " ");
    //}

    //console.log(this.numtoletter);
    //console.log(this.phrase);
    //this.phrase = "Hello " + toWordsconver(this.numtoletter);
  }
}
