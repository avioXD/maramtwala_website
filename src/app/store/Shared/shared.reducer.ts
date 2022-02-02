import { setCategorytree_Store, setAllProviders_Store, setfinalServicesContent, setServiceAvailablePlaces, setSubcategoryItems } from "./shared.action"
import { createReducer, on } from '@ngrx/store';
import { appSharedStore_init } from "./shared.state";



/***Shared Storage Reducer********** */

const _selectSharedStoreReducer = createReducer(
    appSharedStore_init,
    on(setCategorytree_Store, (state,action)=>{
        return {
            ...state,
            category_tree: action.state
        }
    }),
    on(setAllProviders_Store, (state,action)=>{
        return {
            ...state,
            all_providers: action.state
        }
    }),
    on(setfinalServicesContent, (state,action)=>{
        return {
            ...state,
            final_services_content: action.state
        }
    }),
    on(setServiceAvailablePlaces, (state,action)=>{
        return {
            ...state,
            available_service_places: action.state
        }
    }),
    on(setSubcategoryItems, (state,action)=>{
        return {
            ...state,
            subCategoryList: action.state
        }
    }),

)

export function SelectSharedStoreReducer(state, action){
    return  _selectSharedStoreReducer(state, action)
}
