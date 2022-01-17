import { setLoginDialogSwitch, setRegitrationStepsAction, setSubCatagory } from "./shared.action"
import { createReducer, on } from '@ngrx/store';
import { Register_initialstate, shared_initialstate } from "./shared.state";
import { Sub_catagory_init, SubCatState } from "./shared.state";

const _sharedReducer = createReducer(
    shared_initialstate,
    on(setLoginDialogSwitch, (state, action)=>{
        return {
            ...state,
            switch: action.toggle
        };
    })
);
const _RegisterStepsReducer = createReducer(
    Register_initialstate,
    on(setRegitrationStepsAction, (state, action)=>{
        return{
            level: action.step
        }
    })
)

const _SubCatagoryReducer = createReducer(
     Sub_catagory_init,
     on(setSubCatagory,(state, action)=>{
         return{
             lists: action.items.lists
         }
     })
)



export function RegisterReducer(state, action){
    return _RegisterStepsReducer(state,action)
}

export function SharedReducer(state, action){
    return _sharedReducer(state, action)
}

export function SubCatagoryReducer(state, action){
    return _SubCatagoryReducer(state, action)
}
