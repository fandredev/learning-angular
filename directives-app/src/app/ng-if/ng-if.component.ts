import { Component } from "@angular/core";

@Component({
  selector: "app-ng-if",
  templateUrl: "./ng-if.component.html",
  styleUrls: ["./ng-if.component.scss"]
})
export class NgIfComponent {
  showName = false
  showAddress = false
  showPhone = false
  showAge = false

  constructor() { }
}
