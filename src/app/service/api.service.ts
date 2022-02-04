import { Injectable, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';
import { StateService } from './state.service';
import * as CryptoJS from 'crypto-js'

const BASE_URL = environment.apiKey
const production = false
 

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  constructor(private _http: HttpClient, private _state: StateService) { }
  getEncryptString(message: string){
    return  CryptoJS.AES.encrypt(message, environment.web_salt).toString();
  }
  getDecryptString(message: string){
    const bytes  = CryptoJS.AES.decrypt(message, environment.web_salt);
    return bytes.toString(CryptoJS.enc.Utf8);
  }

  /***API calls****** */
  _getHomeCategory_API(): any{
    if(!production){
        return this._http.get('../../assets/dummy_data/category.json').pipe(map((res:any)=> {
          this._state.setCategoryTree(res)
          console.log(res)
          return res
        }))
    }else{
      return this._http.get(BASE_URL+'/api/v1/category').pipe(map((res:any)=> {
        if( res.status == 'success') {
          this._state.setCategoryTree(res.data )
        }
        console.log(res.data)
        return  res.data  
      }))
    }
  }

  _getSubCategoryContentById_API(pageid: string){
    if(!production){
       return this._http.get('../../assets/dummy_data/subcatagory_byid.json').pipe(map((res:any)=> 
        res.filter(x=> x.code == this.getDecryptString(pageid))[0]
       ))
  }else{
     return this._http.get(BASE_URL+'/api/v1/subcategory/content/'+this.getDecryptString(pageid)).pipe(map((res:any)=> res.status == 'success'? res.data: res,(err)=>{
            console.log(err)
        }))
  }
  }

  __getFinalSubCategoryServiceList_API(pageid:string): void{
    if(production){
      this._http.get('../../assets/dummy_data/subCategory_byid.json').pipe(map(res=> res)).subscribe((result:any)=>{    
        this._state.setFinalServicesList(result)
        return true
      },(err)=>{
        console.log(err)
        return false
      })
  }else{
   this._http.get(BASE_URL+'/api/v1/service/'+this.getDecryptString(pageid)).pipe(map((res:any)=> {
      if( res.status == 'success') return  res.data  
        },(err)=>{
          console.log(err)
        })).subscribe((result:any)=>{    
      this._state.setFinalServicesList(result)
      return true
    },(err)=>{
      console.log(err)
      return false
    })
  }
  }

  _getServiceAvailablePlaces_API(){
    if(!production){
      return this._http.get('../../assets/dummy_data/places.json').pipe(map(res=> res)) 
    }else{
     return this._http.get(BASE_URL+'/api/v1/places').pipe(map((res:any)=> {
      if( res.status == 'success') {
        this._state.setAvailablePlacesList(res.data)
        return  res.data 
      }
      return res.data
    },(err)=>{
        console.log(err)
    }))
   }
  }

  __getProviderByServiceCode_API(content:{servicecode: string , location: {lat: number, lon: number}}){
      if(production){
        return this._http.get('../../assets/dummy_data/Providers/AllProviders.json')
      }else{
       return this._http.post(BASE_URL+'/api/v1/provider', content.location ).pipe(map((res:any)=>{
          if(res.status == 'success'){
           return res.data
          }else{
            throw new Error("Failed");
          }
    },(err)=>{
      console.log(err)
      return false
    })).subscribe((result)=>{
         this._state.setAllProvidersList(result)
         return true
    },(err)=>{
      console.log(err)
    })
      }
  }
  _getProviderByPageId_API(params: string){
    const pagecode = this.getDecryptString(params)
    if(production){
         return this._http.get('../../assets/dummy_data/Providers/AllProviders.json')
    }else{
      return this._http.get(BASE_URL+'/api/v1/provider' ).pipe(map((res:any)=>{
        let pos 
        if(res.status == 'success'){
         pos = res.data.map(x=>
           x.provider_domain.filter(f=> f.code.includes(pagecode)) == x
         )
        }else{
          throw new Error("Failed");
        }
        return pos
  },(err)=>{
    console.log(err)
    return false
  }))
    }
  }

  _getOfferList_API(){
    if(production){
      return this._http.get('../../assets/dummy_data/offer_set.json')
    }else{
      return this._http.get('../../assets/dummy_data/offer_set.json')
    }
  }
  _getExclusiveOffers(){
    if(production){
      return this._http.get('../../assets/dummy_data/exclusive_set.json')
    }else{
      return this._http.get('../../assets/dummy_data/exclusive_set.json')
    }
  }
 


 


}
