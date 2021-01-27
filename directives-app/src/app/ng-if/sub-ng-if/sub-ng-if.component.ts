import { Component } from "@angular/core";

@Component({
  selector: "app-sub-ng-if",
  templateUrl: "./sub-ng-if.component.html",
})
export class SubNgIfComponent {

  constructor() {
    console.log("SubNgIfComponent");
  }

  ngOnDestroy(): void {
    console.log("SubNgIfComponent - Destroy");
  }
}
