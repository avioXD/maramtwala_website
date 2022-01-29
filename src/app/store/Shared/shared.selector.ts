import { BookingStepState, RegSetpState, SelectedMicroserviceState, SharedState } from "./shared.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MicroserviceCatState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared';
const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoginModalSwitch = createSelector(getSharedState, (state)=>{
    return state.switch
} )

export const SHARED_BOOKING_MODAL_STATE = 'bookingstate'
const getBookingModalSharedState = createFeatureSelector<BookingStepState>(SHARED_BOOKING_MODAL_STATE);
export const getBookingModalState = createSelector(getBookingModalSharedState, (state)=>{
    return state
} )

export const REGISTER_STATE_NAME = 'register';

const getRegisterFeatures = createFeatureSelector<RegSetpState>(REGISTER_STATE_NAME);

export const getRegisterState = createSelector(getRegisterFeatures, (state)=>{
    return state.level
})



export const MICROSERVICE_CATAGORY_SET = 'catagories';

const getMicroserviceCat = createFeatureSelector<MicroserviceCatState>(MICROSERVICE_CATAGORY_SET)

export const getMicroerviceCatagoryState = createSelector(getMicroserviceCat, (state)=>{
    return state
})


export const SELECTED_MICROSERVICE_NAME= 'selectedservice'

const getSelectedMicroserviceList = createFeatureSelector<SelectedMicroserviceState[]>(SELECTED_MICROSERVICE_NAME)

export const getSelectedMicroServiceList = createSelector(getSelectedMicroserviceList, (state)=>{
    return state
})