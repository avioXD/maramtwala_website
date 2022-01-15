export interface SharedState{
    switch: boolean
}

export const shared_initialstate: SharedState = {
    switch: false
}
export interface RegSetpState {
    level: number
}
export const Register_initialstate: RegSetpState = {
    level: 1
}