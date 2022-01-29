import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import { microserviceContent } from 'src/app/model/Structure.model';
import { UserendService } from 'src/app/service/userend.service';
@Component({
  selector: 'app-sub-catagory-page',
  templateUrl: './sub-catagory-page.component.html',
  styleUrls: ['./sub-catagory-page.component.scss']
})
export class SubCatagoryPageComponent implements OnInit {

  constructor(private userService : UserendService) { }
  events1: any[];
  img = "url('../../../assets/images/background2.jpg')"
  val: number = 3

  pageContent: microserviceContent
 
  ngOnInit(): void {
    this.events1 = [
      {status: 'Submit the request', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
      {status: 'Verify the identity of your location', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
      {status: 'Check for available engineer', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
      {status: 'Pickup or home service within 30min', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'},
      {status: 'Raise the issue ', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'},
      {status: 'Fixed the problem in given time ', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'},
      {status: 'Payment done', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
  ];
  
   
 

  }

}
