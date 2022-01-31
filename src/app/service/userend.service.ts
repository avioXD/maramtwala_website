import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavedPlace } from '../model/Structure.model';
import { Observable, of } from 'rxjs';
import { isDevMode } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { microserviceContent } from '../model/Structure.model';
import { FilteredProviderModel, ProviderModel } from '../model/ProviderModel';
import { SelectedMicroserviceState } from '../store/Shared/shared.state';
import { PostOrder } from '../model/UserModel';

const base_url = 'https://marammatwala-api.herokuapp.com'
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

  createHashKey(code){
    return code
 }
 decodeHashKey(code){
  return code
 }


  getMainCatagory(){
    return this.http.get("../../assets/dummy_data/catagory.json") 
  }
  getPlaces(){
    return this.http.get("../../assets/dummy_data/our_locations.json")
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
    return this.http.get('../../assets/dummy_data/offer_set.json')
  }

  getExclTemp(){
    return this.http.get('../../assets/dummy_data/exclusive_set.json')
  }
  getPageContent(contentId: string){
    this.http.get('../../assets/dummy_data/microservice_data.json').pipe(
      filter((x: microserviceContent) => x.code == contentId),
      map((content: microserviceContent)=> {return of(content)})
    )
    return null
  }
  getFashionPageData() {
    return this.http.get('../../assets/dummy_data/Fashion&Alternation/Fashion_Service.json')
  }

  getProviderByCode(code: string){
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
  }

  compareArray(arr1,arr2){
    const intersection = arr1.filter(element => arr2.includes(element));
    return intersection
  }
   defferArray(arr1,arr2){
     const inter = arr1.filter(element => arr2.includes(element));
      
   }
  getProviderByArray(code: SelectedMicroserviceState[]){
    return this.http.get('../../assets/dummy_data/Providers/AllProviders.json').pipe(map((val: ProviderModel[])=>{
     let FINAL : FilteredProviderModel ;
     let pro = val.map(pre=>{
      pre.provider_domain.filter(res=>{
           let  a = this.compareArray(res.provider_services.map(x=> x.code), code.map(x=> x.code))
           console.log("a",a)
      })
          //  FINAL = {
          //   _id:pre._id,
          //   profile_image: pre.profile_image,
          //   provider_name: pre.provider_name,
          //   avg_rating: pre.avg_rating,
          //   provider_domain:   
          //  }
         })
          
         return pro
    }))
  }

  getProviderByProductCode(code: string){
    return  this.http.post(`${base_url}/api/v1/provider`, {lat: 0, lon: 0}).pipe(map((res:any)=>{
           if(res.status == 'success'){
           return res.data.map(x=>{
                if(x.code == code) return x
                else null
              })
           }
     },(err)=>{
       console.log(err)
     }))
  }
  getAllproviders(){
    return  this.http.post(`${base_url}/api/v1/provider`, {lat: 0, lon: 0}).pipe(map((res:any)=>{
      if(res.status == 'success'){
      return res.data
      }
},(err)=>{
  console.log(err)
}))
  }

  submitOrder(order:PostOrder){
    return this.http.post(`${base_url}/api/v1/requestService`,order)
  }


}
