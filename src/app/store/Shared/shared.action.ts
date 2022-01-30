import { createAction, props } from '@ngrx/store';
import { Catagory } from 'src/app/model/Structure.model';
import { BookingStepState, SelectedMicroserviceState } from './shared.state';

export const SET_LOGIN_DIALOG_SWITCH = '[shared state] switch login page'
export const REGISTER_SETPS = '[shared state] register steps'
export const MICROSERVICE_CATAGORY_MODAL = '[shared state] microservice catagory'
export const BOOKING_MODAL_SWITCH = '[shared state] booking modal switch'
export const BOOKED_SERVICES = '[shared state] booked services'



export const setLoginDialogSwitch = createAction(
    SET_LOGIN_DIALOG_SWITCH,
    props<{toggle: boolean}>()
)
export const setRegitrationStepsAction = createAction(
    REGISTER_SETPS,
    props<{step: number}>()
)
export const setMicroserviceCatagory = createAction(
   MICROSERVICE_CATAGORY_MODAL,
    props<{Microservice:Catagory}>()
)


export const setBokingModalSwitch = createAction(
    BOOKING_MODAL_SWITCH,
    props<{resource: BookingStepState}>()
)


export const setSelectedMicroservice = createAction(
    BOOKED_SERVICES,
    props<{selected_state: SelectedMicroserviceState[]}>()
)


