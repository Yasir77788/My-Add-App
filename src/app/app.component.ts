import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular App';
  image:string = "./pic.jpg";
  isValid:boolean = false;

  onClickMe($event: any){
    console.log("clicked", $event);
  }
}
