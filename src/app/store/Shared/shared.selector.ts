import { RegSetpState, SharedState } from "./shared.state";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubCatState } from "./shared.state";

export const SHARED_STATE_NAME = 'shared';
const getSharedState = createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoginModalSwitch = createSelector(getSharedState, (state)=>{
    return state.switch
} )




export const REGISTER_STATE_NAME = 'register';

const getRegisterFeatures = createFeatureSelector<RegSetpState>(REGISTER_STATE_NAME);

export const getRegisterState = createSelector(getRegisterFeatures, (state)=>{
    return state.level
})



export const SUB_CATAGORY_SET = 'catagories';

const getSubcat = createFeatureSelector<SubCatState>(SUB_CATAGORY_SET)

export const getSubCatagoryState = createSelector(getSubcat, (state)=>{
    return state.lists
})