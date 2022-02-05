import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PrimeIcons} from 'primeng/api';
import { ApiService } from 'src/app/service/api.service';
import { StateService } from 'src/app/service/state.service';
import { ServicesState } from 'src/app/store/shared/shared.state';

@Component({
  selector: 'app-sub-category-page',
  templateUrl: './sub-category-page.component.html',
  styleUrls: ['./sub-category-page.component.scss']
})
export class SubCategoryPageComponent implements OnInit {
  constructor(
     
     private _state: StateService,
     private _api: ApiService,
      private _activeRouter: ActivatedRoute
     ) { }
  howWeWork!: any[];
  img: string = ""
  pageData!: any
  whyRepair: string[]
  pagecode!: string;
  servicesList: ServicesState[]  
      ngOnInit(): void {
        this._activeRouter.paramMap.subscribe(paraMap=>{
            this.pagecode = paraMap.get('code')
            this._api._getSubCategoryContentById_API(this.pagecode).subscribe(res=>{
              // console.log("pageData",res)
               this.pageData = res 
               this.img = `url(${this.pageData.image_url})`
               this._api._getFinalSubCategoryServiceList_API(this.pagecode).subscribe((res: any)=>{
                  this.servicesList = res
               },(err)=>{
                 console.log(err)
               })
             })
       
       })
      // console.log("pagecode",this.pagecode) 
         
       this.whyRepair = [
        "Repair saves money",
        "Repair saves environment",
        "Repair create jobs",
        "Repair promote localization “Vocal for Local”",
        "Repair is sustainable",
        "Always Ready Support from service provider"
    ]
      this.howWeWork = [
        {status: 'Select Service', date: '15/10/2020 10:30', icon: PrimeIcons.SHOPPING_CART, color: '#9C27B0', image: 'game-controller.jpg'},
        {status: 'Check for available provider', date: '15/10/2020 14:00', icon: PrimeIcons.COG, color: '#673AB7'},
        {status: 'Select your provider', date: '15/10/2020 16:15', icon: PrimeIcons.ENVELOPE, color: '#FF9800'},
        {status: 'Pickup or home service within 30min', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'},
        {status: 'Get your work done', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'},
        {status: 'Done the payment', date: '16/10/2020 10:00', icon: PrimeIcons.CHECK, color: '#607D8B'}
    ];
  }
  ngAfterViewInit(): void{
    
  }

  onSelectService(sid: string){
    this._state.setSelectedServiceCode(sid)
    this._state.setSelectProviderModalState(true)
  }
   


}
