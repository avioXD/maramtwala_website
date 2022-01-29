import { Component, OnInit , Input, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';
import { UserendService } from 'src/app/service/userend.service';
import { Places, SavedPlace } from '../../model/structure.model';
import { ToastrService } from 'ngx-toastr';
import { Store } from '@ngrx/store';
import { setUserCurrentLocation } from 'src/app/store/user/user.action';
import { AppState } from 'src/app/store/app.state';
import { LocationState } from 'src/app/store/user/user.state';
import { getUserLocation } from 'src/app/store/user/user.selector';
 
 

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss'],
 
})
export class PlacesComponent implements OnInit , OnDestroy{
  @Input() modalShow!:boolean
  @Output() modalShowEvent = new EventEmitter<boolean>()
  constructor(private placesService :  UserendService, 
    private toastr: ToastrService , private store: Store<AppState> ) {
     
   }
  places!:Places[]
  placesFetch : any
  savedPlace: LocationState;
  storedData!: LocationState
  ngOnInit(): void {
    this.placesFetch = this.placesService.getPlaces().subscribe((data: Places[])=>{
      this.places = data
      //console.log(this.places)
    })

    
    this.store.select(getUserLocation).subscribe((data : LocationState)=>{
    //console.log("Store Object in show", data)
    this.storedData = data 
  })
      
  }
  ngOnDestroy(){
      this.placesFetch.unsubscribe();
      this.modalShowEvent.emit(false);
  }
  onModalChange(e : boolean, ){
    this.modalShowEvent.emit(e)
    this.modalShow = e
    
  }
  onModalChangeWithLocation(e: boolean, location: Places ){
    this.modalShowEvent.emit(e)
    this.modalShow = e
    this.savedPlace  ={
      place : location.name,
      lat: 12.5,
      lon : 56.25
    }
     
    
    this.storedData
    //console.log(this.storedData)
    this.store.dispatch(setUserCurrentLocation({location: this.savedPlace}))

    let done = this.placesService.setMyLocation(this.savedPlace)
    done? this.toastr.success('Location Saved'): this.toastr.error('Location Error')
  }

}
