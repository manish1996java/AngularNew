import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularNew';
  selectLink:string = 'recipes';

  onSelectLink(selectedLink:string){
    this.selectLink=selectedLink;
    console.log(selectedLink);
  }
}
