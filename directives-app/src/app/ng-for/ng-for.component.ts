import { Component } from "@angular/core";
import { cities, Peoples } from "../utils";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.scss"]
})
export class NgForComponent {

  names: Array<string> = [Peoples.Ana, Peoples.John, Peoples.Maria, Peoples.Mark]
  cities = cities

  constructor() { }

}
