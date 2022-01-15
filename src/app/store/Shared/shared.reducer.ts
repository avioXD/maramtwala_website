import { setLoginDialogSwitch, setRegitrationStepsAction } from "./shared.action"
import { createReducer, on } from '@ngrx/store';
import { Register_initialstate, shared_initialstate } from "./shared.state";


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



export function RegisterReducer(state, action){
    return _RegisterStepsReducer(state,action)
}

export function SharedReducer(state, action){
    return _sharedReducer(state, action)
}

