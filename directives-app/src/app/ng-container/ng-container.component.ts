import { Component, OnInit } from '@angular/core';
import { CompanyName, Names, Role } from '../utils/roles';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})

export class NgContainerComponent implements OnInit {
  users = [{
    login: Names[Names.John],
    role: Role.admin === 0 && 'admin',
    lastLogin: new Date('2/3/2020')
  }, {
    login: Names[Names.Bob],
    role: Role.admin === 0 && 'admin',
    lastLogin: new Date('13/1/2019')
  }, {
    login: Names[Names.Maria],
    role: Role.user === 1 && 'user',
    lastLogin: new Date('5/1/2019')
  }, {
    login: Names[Names.Pet],
    role: Role.user === 1 && 'user',
    lastLogin: new Date('2/1/2018')
  }
  ]
  filtered = this.users.filter(({ role }) => role === 'user')
  items = [
    {
      company_name: CompanyName[CompanyName.Microsoft], price: 3, sold: true, soldTo: [{
        name: Names[Names.Pet]
      }, {
        name: Names[Names.Maria]
      }]
    },
    {
      company_name: CompanyName[CompanyName.AirBnb], price: 1200, sold: false, soldTo: []
    },
    { company_name: CompanyName[CompanyName.Google], price: 100, sold: true, soldTo: [] }
  ]
  filteredItems = this.items.filter(({ sold }) => sold)

  constructor() { }

  ngOnInit() {
    console.log('componentDidMount ou useEffect');

  }
}
