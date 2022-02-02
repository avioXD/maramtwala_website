import { AppSharedStoreState } from "./shared.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';

/**** Shared Store Selector********* */

 export const  APP_SHARED_STORE_NAME = 'appstore'
 const _selectedAppSharedStore = createFeatureSelector<AppSharedStoreState>(APP_SHARED_STORE_NAME)

export const getCategorytree =  createSelector(_selectedAppSharedStore, (state)=>{
    return state.category_tree
})
export const getSubcategoryList =  createSelector(_selectedAppSharedStore, (state)=>{
    return state.subCategoryList
})
export const getAllProviders =  createSelector(_selectedAppSharedStore, (state)=>{
    return state.all_providers
})
export const getFinalServicescontent =  createSelector(_selectedAppSharedStore, (state)=>{
    return state.final_services_content
})
export const getAvailableServicePlaces =  createSelector(_selectedAppSharedStore, (state)=>{
    return state.available_service_places
})

