// import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';

// @Component({
//   selector: 'app-server-status',
//   standalone: true,
//   imports: [],
//   templateUrl: './server-status.component.html',
//   styleUrl: './server-status.component.css',
//   // host:{
//   //   id: 'status'
//   // }
// })
// export class ServerStatusComponent implements OnInit {
//   // implements OnInit - tpo debiug error
//   currentStatus: 'online' | 'offline' | 'unknown' = 'offline';
//   // private interval?: ReturnType<typeof setInterval>; //for ngOnDestory method

//   private destroyRef = inject(DestroyRef);
//   constructor(){
   
//   }
//   ngOnInit(){
//     // console.log('NG ON INIT');
//     // this.interval = setInterval(()=> { //flor ng ondestro
//    const interval = setInterval(()=> {
//       const rnd = Math.random(); //between 0-1: 0-0-99999..
//       if (rnd < 0.5){
//         this.currentStatus = 'online';
//       }
//       else if(rnd < 0.9){
//         this.currentStatus = 'offline';
//       }
//       else{
//         this.currentStatus = 'unknown';
//       }
//     }, 5000);

//     //wil be exece before destroying
//     this.destroyRef.onDestroy(()=> {
//       clearInterval(interval);
//     })
//   }

//   ngAfterViewInit(){
//     // console.log('NG AFTER VIEW INIT');
//   }

//   // ngOnDestroy(): void {
//   //     //to clean up the interval if the comp is removed in future to prevent memory leak
//   //   clearTimeout(this.interval);
//   // }
// }


// changing to signals - 135 video
import { Component, DestroyRef, OnDestroy, OnInit, signal, inject, effect } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  // host:{
  //   id: 'status'
  // }
})
export class ServerStatusComponent implements OnInit {
  // implements OnInit - tpo debiug error
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // private interval?: ReturnType<typeof setInterval>; //for ngOnDestory method

  private destroyRef = inject(DestroyRef);
  constructor(){
  //  console.log(this.currentStatus()); //wil not change for changing content
  //no subscription by Ang

  effect(()=>
  console.log(this.currentStatus())); //wil get new logs 
  //for cleanup - onCleanup argument is passed
  // effect((onCleanup) => {
  //   const tasks = getTasks();
  //   const timer = setTimeout(() => {
  //     console.log(`Current number of tasks: ${tasks().length}`);
  //   }, 1000);
  //   onCleanup(() => {
  //     clearTimeout(timer);
  //   });
  // });
  
  }
  ngOnInit(){
    // console.log('NG ON INIT');
    // this.interval = setInterval(()=> { //flor ng ondestro
   const interval = setInterval(()=> {
      const rnd = Math.random(); //between 0-1: 0-0-99999..
      if (rnd < 0.5){
        this.currentStatus.set('online');
      }
      else if(rnd < 0.9){
        this.currentStatus.set('offline');
      }
      else{
        this.currentStatus.set('unknown');
      }
    }, 5000);

    //wil be exece before destroying
    this.destroyRef.onDestroy(()=> {
      clearInterval(interval);
    })
  }

  ngAfterViewInit(){
    // console.log('NG AFTER VIEW INIT');
  }

  // ngOnDestroy(): void {
  //     //to clean up the interval if the comp is removed in future to prevent memory leak
  //   clearTimeout(this.interval);
  // }
}
