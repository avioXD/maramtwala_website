import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
 
@Component({
  selector: 'app-select-provider',
  templateUrl: './select-provider.component.html',
  styleUrls: ['./select-provider.component.scss']
})
export class SelectProviderComponent implements OnInit {
  pageId: string;
@Input() providers:any[]
@Output() sendProviderEvent = new EventEmitter<any>()
  constructor() { }
  ngOnInit(): void {
     
  }
  selectedprovider: boolean[] = [false]
  onProviderSelect(user, i){
    this.selectedprovider = [false]
    this.selectedprovider[i] = true 
    this.sendProviderEvent.emit(user)
  }
}
