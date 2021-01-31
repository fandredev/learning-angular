import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ServiceService as Log } from './../../service.service';


type Colors = ['accent', 'warn', 'primary']
export interface LifeCycleEvent {
  id: number
  name: string
  color: string
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name = ''
  @Input() age = 0
  @Input() food = ''

  public events: LifeCycleEvent[] = []
  next_event_id = 0
  private interval_ref: number

  colors: Colors = ['accent', 'warn', 'primary']

  constructor(public loggedByConsole: Log) {
    this.newEvent('constructor');
    this.interval_ref = window.setInterval(() => loggedByConsole.log('Interval'), 2000);
    // tdd ngOnDestroy
  }

  /**
   * Metódo para inicialização. Primeiro metódo a ser carregado.
   * "Igual" a useEffect/didMount
   */
  ngOnInit(): void {
    console.log(this.name, 'ngOnInit');
    this.newEvent('ngOnInit');
  }

  /**
   * @param changes - Objeto utilizado para capturar valores dos atributos
   * Chamado sempre que ocorrer mudança nos seus atributos
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes.name, 'Mudança no name. - Metódo ngOnChanges');
    this.newEvent('ngOnChanges');
    // if (changes.name) {
    //   console.log('old name:', changes.name.previousValue); // Valor antigo no input
    //   console.log('new name:', changes.name.currentValue); // Valor recente no input
    // }
    // for (const i in changes) {
    //   console.log(i);
    //   console.log(changes[i]);
    // }
  }

  ngAfterContentInit(): void {
    console.log(this.name, 'AfterContentInit');
    this.newEvent('AfterContentInit');
  }
  /**
   * Apos toda a view do componente/filhos ser iniciada, invoque essa função
   */
  ngAfterViewInit(): void {
    console.log(this.name, 'ngAfterViewInit');
    this.newEvent('ngAfterViewInit');
  }

  /**
   * Quando o componente some, o componente é 'destruído'.
   * Fazer limpezas nos atributos, metódos, desalocações etc
   */
  ngOnDestroy(): void {
    console.log(this.name, 'ngOnDestroy');
    clearInterval(this.interval_ref);
    this.newEvent('ngOnDestroy');
  }

  newEvent(name: string): void {
    const id = this.next_event_id++;
    this.events.push({
      id,
      color: this.colors[id % this.colors.length],
      name
    });
    const timer = 3000 + this.events.length * 2000;

    setTimeout(() => {
      const idx = this.events.findIndex(e => e.id === id);
      if (idx >= 0)
        this.events.splice(idx, 1);
    }, timer);
  }
}
