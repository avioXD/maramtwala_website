export interface UserState{
    token:  string, 
    isLogin: boolean, 
    isuserexist: boolean
    location: LocationState
}
export interface LocationState{
    lat: number,
    lon:  number
}
export const  user_init : UserState = {
    token: '',
    isLogin: false,
    location: {  lat: 0, lon: 0 },
    isuserexist: false
}