import { Component } from '@angular/core';
import { menu } from '../../../core/constant/constant';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {


  menu= menu
  constructor(){

  }

}
