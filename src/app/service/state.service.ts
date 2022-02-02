import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { setAllProviders_Store, setCategorytree_Store, setfinalServicesContent, setServiceAvailablePlaces, setSubcategoryItems, } from '../store/Shared/shared.action';
import { getAllProviders, getAvailableServicePlaces, getCategorytree, getFinalServicescontent, getSubcategoryList,  } from '../store/shared/shared.selector';
import { AvailabePlacesState, CategoryTreeState, ProviderState, ServicesState, SubcategoryState, } from '../store/Shared/shared.state';
import {  setLoginToSignupSwitch, setPlacesSwitch, setSignuploginSwitch, setSubCategoriesSwitch } from '../store/switch/switch.action';
import * as CryptoJS from 'crypto-js'
import { environment } from '../../environments/environment';
import { setUser_exist, setUser_isLogin, setUser_location, setUser_token } from '../store/user/user.action';
import { getUser } from '../store/user/user.selector';
import { map, of } from 'rxjs';
import  jwt_decode from 'jwt-decode';
import {  getloginToSignup_SwitchState, getPlaces_SwitchState, getSignupLogin_SwitchState, getSubcatagories_SwitchState } from '../store/switch/switch.selector';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(
    private _store: Store<AppState>
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
  setUserCurrentLocation(content: {lat: number, lon: number}){
    return this._store.dispatch(setUser_location({state: content}))
  }
  getTokenObject(token: string): any{
    return jwt_decode(token)
  }
  getUserObject(){
    let user : any
     this.getUserToken().subscribe((res=>{
           user = this.getTokenObject(res)
     }))
     return of(user)
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



}
