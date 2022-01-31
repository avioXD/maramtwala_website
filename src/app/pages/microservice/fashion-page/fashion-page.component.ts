import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';
import { UserendService } from 'src/app/service/userend.service';
import { FashionServicePageModel } from 'src/app/model/MicroservicePageModel';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setBokingModalSwitch } from 'src/app/store/Shared/shared.action';
import { AppState } from 'src/app/store/app.state';
import { AuthService } from 'src/app/service/auth.service';
 

@Component({
  selector: 'app-fashion-page',
  templateUrl: './fashion-page.component.html',
  styleUrls: ['./fashion-page.component.scss']
})
export class FashionPageComponent implements OnInit {

  constructor(private _ClientService: UserendService,
     private _Activatedroute:ActivatedRoute,
     private store: Store<AppState>,
     private _auth: AuthService
     ) { }
  events1: any[];
  img: string = ""
  pageData: FashionServicePageModel
  pageID: string

  topFourService = [{
             label: "Repair",
            img_url: "../../../../assets/catagroy_images/fashion/img2.jpg",
            low_price: 120
      }]

  ngOnInit(): void {


    //getting page routing
      this._Activatedroute.paramMap.subscribe(params =>{
        this.pageID = params.get("code")
        //console.log("Pageid",this.pageID)
        //get page content
        this._ClientService.getFashionPageData().subscribe((data: FashionServicePageModel[])=>{
          //geting page data by filtering
        let storeData: FashionServicePageModel[] =  data.filter((x)=>{
           return x.code ==  this._auth.decodeHashKey(this.pageID)
         })
         this.pageData = storeData[0]
         this.img = `url(${this.pageData.image_url})`
         this.topFourService.splice(0)

         //
          this.pageData.service_offered.forEach((item,i)=>{
            if(i<4){
            this.topFourService.push({
              label: item.label,
              img_url:  `../../../../assets/catagroy_images/fashion/img${i+1}.jpg`,
              low_price: 120
            })  
          }
          })
      })
      })


      
      
    

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

  onBookingProceed(){
    let resource = {
      resource:{
        switch: true,
        microservices: this.pageData.service_offered
      }
    }
    this.store.dispatch(setBokingModalSwitch({resource:resource}))
  }



}
