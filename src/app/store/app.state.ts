
import { RegisterReducer, SharedReducer, MicroserviceCatagoryReducer, SharedBookingModalReducer, SelectedMicroServiceReducer } from "./Shared/shared.reducer";
import { REGISTER_STATE_NAME, SHARED_STATE_NAME, MICROSERVICE_CATAGORY_SET, SHARED_BOOKING_MODAL_STATE, SELECTED_MICROSERVICE_NAME } from "./Shared/shared.selector";
import { SharedState, RegSetpState, MicroserviceCatState, BookingStepState, SelectedMicroserviceState } from "./Shared/shared.state";
import { UserReducer } from "./user/user.reducer";
import { USER_STATE_NAME } from "./user/user.selector";
import { UserState } from "./user/user.state";

export interface AppState {
    [SHARED_STATE_NAME]: SharedState,
    [USER_STATE_NAME] : UserState,
    [REGISTER_STATE_NAME]: RegSetpState,
    [MICROSERVICE_CATAGORY_SET]: MicroserviceCatState
    [SHARED_BOOKING_MODAL_STATE]: BookingStepState,
    [SELECTED_MICROSERVICE_NAME]: SelectedMicroserviceState[]
}

export const  appReducer = {
    [SHARED_STATE_NAME]: SharedReducer,
    [USER_STATE_NAME] : UserReducer,
    [REGISTER_STATE_NAME]: RegisterReducer,
    [MICROSERVICE_CATAGORY_SET]:  MicroserviceCatagoryReducer,
    [SHARED_BOOKING_MODAL_STATE]: SharedBookingModalReducer,
    [SELECTED_MICROSERVICE_NAME]:  SelectedMicroServiceReducer
}