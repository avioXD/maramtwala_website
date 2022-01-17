import { Component, OnInit } from '@angular/core';
import { UserendService } from 'src/app/service/userend.service';
import { City, Catagory, SavedPlace, Offers, Exclusive} from '../../model/structure.model';
 
//
import { Store } from '@ngrx/store';
import { getUserLocation } from 'src/app/store/user/user.selector';
import { AppState } from 'src/app/store/app.state';
import { LocationState } from 'src/app/store/user/user.state';
import { setSubCatagory } from 'src/app/store/Shared/shared.action';
import { SubCatState, Sub_model } from 'src/app/store/Shared/shared.state';


 


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  
  
   
  
  val: any
  cities!: City[];
  catagories: Catagory[] ;
  modalShow: boolean = false
  currentLocation !: LocationState;
  offers!: Offers[]; 
  exclusiveTemp!: Exclusive[]


  constructor(private clientService: UserendService,private store : Store<AppState> ) { 

  }
   
  ngOnInit(): void {
     this.clientService.getMainCatagory().subscribe((value: Catagory[])=>{
      console.log(value)
      this.catagories = value
      console.log(this.catagories)
  })

  this.clientService.getMyLocation().subscribe((location: SavedPlace)=>{
       console.log("Saved",location)
       this.currentLocation = location
  });

  //offers: 
  this.clientService.getOfferList().subscribe((data:Offers[])=>{
    this.offers = data
  })
  //excluve data set : 
  this.clientService.getExclTemp().subscribe((data:Exclusive[])=>{
    this.exclusiveTemp = data
  })
  //state management
    this.store.select(getUserLocation).subscribe((data : LocationState)=>{
      this.currentLocation =  data 
   })

 
  }
  onModalChange(e:boolean){
    this.modalShow = e
    console.log("Modal State: " ,this.modalShow)
  }

  onOpenSubCat(items: Sub_model[]){
    let x : SubCatState = {
      lists: items
    }
    this.store.dispatch(setSubCatagory({items: x}))
  }

  


}
