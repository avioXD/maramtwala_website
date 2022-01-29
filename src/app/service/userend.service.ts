import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavedPlace } from '../model/Structure.model';
import { Observable, of } from 'rxjs';
import { isDevMode } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { microserviceContent } from '../model/Structure.model';
import { ProviderModel } from '../model/ProviderModel';
import { SelectedMicroserviceState } from '../store/Shared/shared.state';


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
      return this.http.get("../../assets/dummy_data/Services.json") 
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
      //console.log(this.myLocation)
      
      return true
  }
  getMyLocation(){
    //console.log("Getting Location ....")
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
  getPageContent(contentId: string){
    this.http.get('../../assets/dummy_data/microservice_data.json').pipe(
      filter((x: microserviceContent) => x.code == contentId),
      map((content: microserviceContent)=> {return of(content)})
    )
    return null
  }
  getFashionPageData() {
    if(isDevMode()){
       return this.http.get('../../assets/dummy_data/Fashion&Alternation/Fashion_Service.json')
    }else{
      return  null
    }
  }

  getProviderByCode(code: string){
    if(isDevMode()){
    return this.http.get('../../assets/dummy_data/Providers/AllProviders.json').pipe(map((val:ProviderModel[], i) => { 
        const pro = val.map(pre=>{
          let arrayRatings = pre.reviews.map(rev=> rev.rating)
          //console.log(arrayRatings)
          var sum = 0;
          for( var x = 0; x < arrayRatings.length; x++ ){
           sum += arrayRatings[x], 10 //don't forget to add the base
          } 
          var avg = sum/arrayRatings.length;
          pre.avg_rating = Math.floor(avg)
          return pre
      })
     // console.log("Values",pro)
      return pro
    }))
   }else{
     return  null
   }
  }

  
  getProviderByArray(code: SelectedMicroserviceState[]){
    return this.http.get('../../assets/dummy_data/Providers/AllProviders.json')
  }


}
