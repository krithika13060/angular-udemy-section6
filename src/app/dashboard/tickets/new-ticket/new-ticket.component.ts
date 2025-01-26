import { AfterViewInit, Component, ElementRef, OnInit, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form ?: ElementRef<HTMLFormElement>;
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
// @Ouput add = new EventEmitter<>();
  add = output<{title: string; text: string}>();

  ngAfterViewInit() {
      console.log('Afterviewinit'); //guareanteed to access elements throught viewchild
      //guaranteed temp is initialxed and ang is able to select elements thru view chiuld
      console.log(this.form?.nativeElement); //wil get the html element
  }
  ngOnInit(){
    console.log('ngOnInittt');
    console.log(this.form?.nativeElement); //undefined
  }



// onSubmit(titleElement: HTMLInputElement){
//   // console.log('siubmitted', titleElement.value);
//   console.dir(titleElement);
//   const enteredTitle = titleElement.value;
//   console.log(enteredTitle);
// }

// using only what is needed without passing whole object
onSubmit(title: string, ticketText: string){
  // console.log('siubmitted', titleElement.value);
  console.log(title);
  console.log(ticketText);
  // form.reset(); //clears all inpiut elementsw inside the form

  this.form?.nativeElement.reset(); //since we need form from elementRef

// pushing new tickets
this.add.emit({title: title, text: ticketText});

}
}
