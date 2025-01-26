import {
  Component,
  HostBinding,
  HostListener,
  input,
  inject,
  ElementRef,
  ViewEncapsulation,
  ContentChild,
  contentChild,
  afterRender,
  afterNextRender,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  // can always use host
  // accepts obj - maps key value pairs to host
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  // another aprocah to bind class to host - hostbinding
  // @HostBinding('class') className = 'control'; //not to confise - className, wothing () as parameters = actual parameter to be given
  // @HostListener('click') onClick(){
  //   console.log('cklikedd krii');
  // }

  // accessionh host element programatically
  private el = inject(ElementRef);
  // reference to element
  //displays what ang knows about this compo
  //properties of DOM elementsw
  label = input.required<string>();
  onClick() {
    console.log('clicked hii');
    console.log(this.el); //prints this host name
    console.log(this.control());
  }


  // contentchild
  // @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>

  // contentchild signla
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  ngAfterContentInit(){
    console.log('control - ngcontwntFTER');
    // console.log(this.control());
  }


  constructor(){
    afterRender(() =>{
      console.log('render'); //whenerv er any changes occur
      //the functions that should happene when anything, changes anywhere
    });
    afterNextRender(()=>{
      console.log('afternextrender');
      //defines functions after the next chnage anywhere
    });
  }
}
