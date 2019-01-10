import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
 
})
export class MenuItemComponent implements OnInit {

  //recebe os dados do component parent
 @Input() menuItem: MenuItem
 @Output() add = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
    this.add.emit(this.menuItem)//passando objeto para o component 
                               //parent apos ser desparado um evento
  }
}
