export interface UserState{
    auth_token: string, 
    username: string,
    dob: string,
    location: LocationState
}
export interface LocationState{
    place: string,
    lat: number,
    lon:  number
}
export const  User_initialstate : UserState = {
    auth_token : "",
    username : "",
    dob: "",
    location: { place: "Chose your city ", lat: 0, lon:0}
}