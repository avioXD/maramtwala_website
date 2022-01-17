import { RegisterReducer, SharedReducer, SubCatagoryReducer } from "./Shared/shared.reducer";
import { REGISTER_STATE_NAME, SHARED_STATE_NAME, SUB_CATAGORY_SET } from "./Shared/shared.selector";
import { SharedState, RegSetpState, SubCatState } from "./Shared/shared.state";
import { UserReducer } from "./user/user.reducer";
import { USER_STATE_NAME } from "./user/user.selector";
import { UserState } from "./user/user.state";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState,
    [USER_STATE_NAME] : UserState,
    [REGISTER_STATE_NAME]: RegSetpState,
    [SUB_CATAGORY_SET]: SubCatState
}

export const  appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [USER_STATE_NAME] : UserReducer,
    [REGISTER_STATE_NAME]: RegisterReducer,
    [SUB_CATAGORY_SET]:  SubCatagoryReducer
}