import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() toggleSideBarForMe:EventEmitter<any>= new EventEmitter()
  constructor() { }
  

  ngOnInit(): void {
  }

  toggleSideBar(){
    this.toggleSideBarForMe.emit()
  }

}
