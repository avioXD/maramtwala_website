import { RegisterReducer, SharedReducer } from "./Shared/shared.reducer";
import { REGISTER_STATE_NAME, SHARED_STATE_NAME } from "./Shared/shared.selector";
import { SharedState, RegSetpState } from "./Shared/shared.state";
import { UserReducer } from "./user/user.reducer";
import { USER_STATE_NAME } from "./user/user.selector";
import { UserState } from "./user/user.state";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState,
    [USER_STATE_NAME] : UserState,
    [REGISTER_STATE_NAME]: RegSetpState
}

export const  appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [USER_STATE_NAME] : UserReducer,
    [REGISTER_STATE_NAME]: RegisterReducer
}