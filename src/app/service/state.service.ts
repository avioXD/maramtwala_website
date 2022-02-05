import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { setAllProviders_Store, setCategorytree_Store, setfinalServicesContent, setServiceAvailablePlaces, setSubcategoryItems, setSubcategoryPageContent, setWindowWidth, } from '../store/Shared/shared.action';
import { getAllProviders, getAvailableServicePlaces, getCategorytree, getFinalServicescontent, getSubcategoryList, getSubcategorypageContent, getWindowWidth,  } from '../store/shared/shared.selector';
import { AvailabePlacesState, CategoryTreeState, ProviderState, ServicesState, SubcategoryState, } from '../store/Shared/shared.state';
import {  setLoginToSignupSwitch, setPlacesSwitch, setSelectProviderSwitch, setSideMenuSwitch, setSignuploginSwitch, setSubCategoriesSwitch } from '../store/switch/switch.action';
import * as CryptoJS from 'crypto-js'
import { environment } from '../../environments/environment';
import { setUser_exist, setUser_isLogin, setUser_location, setUser_token } from '../store/user/user.action';
import { getUser } from '../store/user/user.selector';
import { map, of } from 'rxjs';
import  jwt_decode from 'jwt-decode';
import {  getloginToSignup_SwitchState, getPlaces_SwitchState, getSelectProvider_SwitchState, getSideMenu_SwitchState, getSignupLogin_SwitchState, getSubcatagories_SwitchState } from '../store/switch/switch.selector';
import { ActivatedRoute } from '@angular/router';
import { LocationState } from '../store/user/user.state';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    private _store: Store<AppState>,
    private _activeRoute: ActivatedRoute
    ) { }

    getEncryptString(message: string){
      return  CryptoJS.AES.encrypt(message, environment.web_salt).toString();
    }
    getDecryptString(message: string){
      const bytes  = CryptoJS.AES.decrypt(message, environment.web_salt);
      const res = bytes.toString(CryptoJS.enc.Utf8);
      console.log(res)
      return res
    }
    ////////
   //*****SHARED SWITCH***************** */
  
  setSwitch_signuplogin(state: boolean){
      return this._store.dispatch(setSignuploginSwitch({state: state}))
  }
  getSwitch_signuplogin(){
    return this._store.select(getSignupLogin_SwitchState)
  }
  setSwitch_places(state: boolean){
    return this._store.dispatch(setPlacesSwitch({state: state}))
  }
  getSwitch_places(){
    return this._store.select(getPlaces_SwitchState)
  }
  setSwitch_subCategory(state: boolean){
    return this._store.dispatch(setSubCategoriesSwitch({state: state}))
  }
  getSwitch_subCategory(){
    return this._store.select(getSubcatagories_SwitchState)
  }
  setLoginToSignUp(state: boolean){
    return this._store.dispatch(setLoginToSignupSwitch({state: state}))
  }
  getLoginToSignUp(){
    return this._store.select(getloginToSignup_SwitchState)
  }
  setSwitchSideMenu(state: boolean){
    return this._store.dispatch(setSideMenuSwitch({state: state}))
  }
  getSwitchSideMenu(){
   return this._store.select(getSideMenu_SwitchState)
  }
  setSelectProviderModalState(state: boolean){
    return this._store.dispatch(setSelectProviderSwitch({state: state}))
  }
  getSelectProviderModalState(){
    return this._store.select(getSelectProvider_SwitchState)
  }
  /************** */
  ////
  /*****SHARED USER***** */

  setUserToken(token: string){
      return this._store.dispatch(setUser_token({state: token}))
  }
  getUserToken(){
    return this._store.select(getUser).pipe(map(res=> res.token))
  }
  setUserIsLogin(state: boolean){
    return this._store.dispatch(setUser_isLogin({state: state}))
  }
  getUserIsLogin(){
    return this._store.select(getUser).pipe(map(res=> res.isLogin))
  }
  setIsNewUser(state: boolean){
    localStorage.setItem(environment.STORAGE_KEY.LOCAL_REGISTERD_USER, this.getEncryptString(`${state}`))
    return this._store.dispatch(setUser_exist({state: state}))
  }
  getIsNewUser(){
    const result  =  this.getDecryptString(localStorage.getItem(environment.STORAGE_KEY.LOCAL_REGISTERD_USER))
    this._store.dispatch(setUser_exist({state: Boolean(result)}))
    return this._store.select(getUser).pipe(map(res=> res.isuserexist))
  }
  setUserCurrentLocation(content: LocationState){
    this._store.dispatch(setUser_location({state: content}))
     
  }
  getUserCurrentLocation(){
    return this._store.select(getUser).pipe(map(res=> res.location))
  }
  getTokenObject(token: string): any{
    return jwt_decode(token)
  }
  getUserObject(){
    let user : any
     this.getUserToken().subscribe((res=>{
           user = this.getTokenObject(res)
     }))
     return of(user.user)
  }
  isTokenValid(date: number){
      return new Date() <  new Date(date*1000) 
  }
  setToken(token: string){
    const newtoken = this.getEncryptString(token)
    localStorage.setItem(environment.STORAGE_KEY.LOCAL_USER_TOKEN, newtoken)
    this.setUserToken(token)
  }
  getTokenLocal(){
    const res = localStorage.getItem(environment.STORAGE_KEY.LOCAL_USER_TOKEN)  
     if(res){
       return this.getDecryptString(res)
     }
      return ''
  }
   

  /****************** */
  /*******SHARED STORE*********** */
  setCategoryTree(content: CategoryTreeState[]){
    return this._store.dispatch(setCategorytree_Store({state: content}))
  }
  getCategoryTree(){
    return this._store.select(getCategorytree)
  }
  setAllProvidersList(content: ProviderState[]){
    return this._store.dispatch(setAllProviders_Store({state: content}))
  }
  getAllProvidersList(){
    return  this._store.select(getAllProviders)
  }
  setSubcategoryList(content: SubcategoryState[]){
    return this._store.dispatch(setSubcategoryItems({state: content}))
  }
  getSubcategoryList(){
    return  this._store.select(getSubcategoryList)
  }
  setFinalServicesList(content: ServicesState[]){
    return this._store.dispatch(setfinalServicesContent({state: content}))
  }
  getFinalServicesList(){
    return this._store.select(getFinalServicescontent)
  }
  setAvailablePlacesList(content: AvailabePlacesState[] ){
    return this._store.dispatch(setServiceAvailablePlaces({state: content}))
  }
  getAvailablePlacesList(){
    return this._store.select(getAvailableServicePlaces)
  }
  setWindowSize(content: number){
    return this._store.dispatch(setWindowWidth({state: content}))
  }
  getWindowSize( ){
    return this._store.select(getWindowWidth)
  }
  setpageContent(content: any){
    this._store.dispatch(setSubcategoryPageContent({state: content}))
  }
  getPageContent(){
    return this._store.select(getSubcategorypageContent)
  }

  /*******Get distance between two place******** */
  getDistanceBetweenByLatLon(content:{user:{lat:number, lon: number},provider:{lat: number, lon: number}}){
     // The math module contains a function
        // named toRadians which converts from
        // degrees to radians.
        let lat1 = content.user.lat
        let lat2 = content.provider.lat
        let lon1 = content.user.lon
        let lon2 = content.provider.lon


        lon1 =  lon1 * Math.PI / 180;
        lon2 = lon2 * Math.PI / 180;
        lat1 = lat1 * Math.PI / 180;
        lat2 = lat2 * Math.PI / 180;
   
        // Haversine formula
        let dlon = lon2 - lon1;
        let dlat = lat2 - lat1;
        let a = Math.pow(Math.sin(dlat / 2), 2)
                 + Math.cos(lat1) * Math.cos(lat2)
                 * Math.pow(Math.sin(dlon / 2),2);
               
        let c = 2 * Math.asin(Math.sqrt(a));
   
        // Radius of earth in kilometers. Use 3956
        // for miles
        let r = 6371;
   
        // calculate the result
        return(c * r);
  }
  getCurrentGeoLocation(){
    if(navigator.geolocation){
      return navigator.geolocation.getCurrentPosition((position)=>{
        if(position){
          let location : LocationState = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
          this.setUserCurrentLocation(location)
        }
      return true
      })
    }else{
      return false
    }
  }
  

}
