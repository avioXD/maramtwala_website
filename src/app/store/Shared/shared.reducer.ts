import { setLoginDialogSwitch, setRegitrationStepsAction, setMicroserviceCatagory, setBokingModalSwitch, setSelectedMicroservice } from "./shared.action"
import { createReducer, on } from '@ngrx/store';
import { BookingStep_init, Register_initialstate, selectedMicroService_init, shared_initialstate } from "./shared.state";
import { Microservice_init, MicroserviceCatState } from "./shared.state";

const _sharedReducer = createReducer(
    shared_initialstate,
    on(setLoginDialogSwitch, (state, action)=>{
        return {
            ...state,
            switch: action.toggle
        };
    })
);


const _sharedBookingModalReducer = createReducer(
    BookingStep_init,
     on(setBokingModalSwitch, (state, action)=>{
        return {
            resource: action.resource.resource
        }
    })
)

const _RegisterStepsReducer = createReducer(
    Register_initialstate,
    on(setRegitrationStepsAction, (state, action)=>{
        return{
            level: action.step
        }
    })
)

const _MicroserviceCatagoryReducer = createReducer(
    Microservice_init,
     on(setMicroserviceCatagory,(state, action)=>{
         return{
             Microservice: action.Microservice
         }
     })
)


const _selectedMicroServiceReducer = createReducer(
    selectedMicroService_init,
    on(setSelectedMicroservice, (state,action)=>{
        return action.selected_state
    })
)


export function RegisterReducer(state, action){
    return _RegisterStepsReducer(state,action)
}
export function SharedBookingModalReducer(state, action){
    return _sharedBookingModalReducer(state,action)
}


export function SharedReducer(state, action){
    return _sharedReducer(state, action)
}

export function MicroserviceCatagoryReducer(state, action){
    return  _MicroserviceCatagoryReducer(state, action)
}


export function SelectedMicroServiceReducer(state, action){
    return  _selectedMicroServiceReducer(state, action)
}
