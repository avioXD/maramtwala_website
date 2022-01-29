import { Component, Input, OnInit } from '@angular/core';
import { Sub_model } from 'src/app/store/Shared/shared.state';
 
@Component({
  selector: 'app-select-microservice',
  templateUrl: './select-microservice.component.html',
  styleUrls: ['./select-microservice.component.scss']
})
export class SelectMicroserviceComponent implements OnInit {
  @Input() catagories:Sub_model[]
  constructor( ) { }
  selectedCatagories: Sub_model[]
  ngOnInit(): void {
     
  }

}
