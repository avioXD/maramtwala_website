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

export interface  Sub_model{
    label: string,
    code: string
  }
export interface SubCatState{
    lists: Sub_model[]
}
export const Sub_catagory_init : SubCatState ={
    lists: [ {
        label: '',
        code: ''
    }]
}