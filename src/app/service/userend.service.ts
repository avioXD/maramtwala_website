import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavedPlace } from '../model/Structure.model';
import { Observable, of } from 'rxjs';
import { isDevMode } from '@angular/core';




@Injectable({
  providedIn: 'root'
})


export class UserendService {

  myLocation :SavedPlace = {
    place: "Kolkata",
    lat: 10.2,
    lon: 80.2
  }
  observable!:Observable<SavedPlace>
  

  constructor(private http: HttpClient) { }
  getMainCatagory(){
    if(isDevMode()){
      return this.http.get("../../assets/dummy_data/our_service.json") 
    } else{
      return null;
    } 
  }
  getPlaces(){
    if(isDevMode()){
    return this.http.get("../../assets/dummy_data/our_locations.json")
    }else{
      return null;
    }
  }
  setMyLocation(location: SavedPlace){
      this.myLocation = location
      console.log(this.myLocation)
      
      return true
  }
  getMyLocation(){
    console.log("Getting Location ....")
     return of(this.myLocation)
  }
  getOfferList(){
    if(isDevMode()){
    return this.http.get('../../assets/dummy_data/offer_set.json')
    }else{
      return null;
    }
  }

  getExclTemp(){
    if(isDevMode()){
      return this.http.get('../../assets/dummy_data/exclusive_set.json')
      }else{
        return null;
      } 
  }



}
