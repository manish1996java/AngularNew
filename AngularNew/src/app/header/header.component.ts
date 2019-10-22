import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id:number;
  editMode = false;
  authencateduser = false;
  // @Output() selectedLink = new EventEmitter<string>();

  // constructor() {console.log('constructor'); }
  constructor(private route:ActivatedRoute,private authservice:AuthService){}
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
      }
    )
    this.authservice.authenticatedListener.subscribe((result)=>{
        this.authencateduser = result;
    })
  }
  logout(){
    
    this.authservice.onLogout();
  }

  // onSelect(headerLink:string){
  //   this.selectedLink.emit(headerLink);
  // }
}
