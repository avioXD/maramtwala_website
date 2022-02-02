
import { SelectSharedStoreReducer } from "./shared/shared.reducer";
import { APP_SHARED_STORE_NAME } from "./shared/shared.selector";
import { AppSharedStoreState  } from "./Shared/shared.state";
import { SelectSwitchReducer } from "./switch/switch.reducer";
import { SWITCH_STATE_NAME } from "./switch/switch.selector";
import { SwitchState } from "./switch/switch.state";
import { SelectUserReducer } from "./user/user.reducer";
import { USER_STATE_NAME } from "./user/user.selector";
import { UserState } from "./user/user.state";

export interface AppState {
    [USER_STATE_NAME] : UserState,
    [SWITCH_STATE_NAME] : SwitchState
    [APP_SHARED_STORE_NAME]: AppSharedStoreState
}

export const  appReducer = {
    [USER_STATE_NAME] : SelectUserReducer,
    [SWITCH_STATE_NAME] : SelectSwitchReducer,
    [APP_SHARED_STORE_NAME]: SelectSharedStoreReducer
}