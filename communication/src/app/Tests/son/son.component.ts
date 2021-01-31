import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CompanyName } from '../../utils';
import { ServiceBind } from './../../input-binding/service.service';
import { Client as I_Client } from './service.model';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss']
})
export class SonComponent {
  clients: I_Client<string, boolean, number> = {
    name: CompanyName[CompanyName.hub],
    have_employees: true,
    age_company: 15
  }
  arrClient: I_Client<string, boolean, number>[] = [this.clients]

  @Input() public name = ''
  @Output() e = new EventEmitter

  constructor(private serviceBind: ServiceBind) { }

  ngOnInit(): void {
    this.serviceBind.log('didMount/useEffect...');
  }

  newEventEmmiterByFather(): void {
    this.e.emit();
  }


}
