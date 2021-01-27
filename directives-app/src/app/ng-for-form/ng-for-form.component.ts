import { Component } from "@angular/core";
import { cities } from "../utils";

@Component({
  selector: "app-ng-for-form",
  templateUrl: "./ng-for-form.component.html",
  styleUrls: ["./ng-for-form.component.scss"]
})
export class NgForFormComponent {
  name = ""
  address = ""
  city = ""
  age = ""
  phone = ""

  cities = cities
  clients: any = []

  constructor() { }

  save(): void {
    const createdItems: {
      name: string
      address: string
      city: string
      age: string
      phone: string
    } = {
      name: this.name,
      address: this.address,
      city: this.city,
      age: this.age,
      phone: this.phone,
    };
    this.clients.push(createdItems);
    this.cancel();

    console.log(this.clients);

  }
  cancel(): void {
    this.name = "";
    this.address = "";
    this.age = "";
    this.city = "";
    this.phone = "";
  }

  deleteItem(i: number): void {
    if (Array.isArray(this.clients)) this.clients.splice(i, 1);
    console.log(this.clients);
  }
}
