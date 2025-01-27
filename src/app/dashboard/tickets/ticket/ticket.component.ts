import { Component, input, signal, output } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data = input.required<Ticket>();

  // configuration options
  // 1. alias
  // data = input.required<Ticket>({alias: 'name'});
  // 2. transform - to clean up or change type of the input value
  // data = input.required<Ticket>({transform: (value) => value});

  // for decoratior - @Input({alias: 'name'}) data: Ticket;
  // @Output('alias name)
  // configuration options nds

  // detailsVisible = false;
  detailsVisible = signal(false);
  close = output();

  onToggleDetails(){
    // this.detailsVisible.set(!this.detailsVisible);
    this.detailsVisible.update((wasVisible)=> !wasVisible); //by default passes the current signal value, accepts function as an argument
  }

  onMarkAsCompleted(){
    this.close.emit();
  }
}