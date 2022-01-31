export interface UserState{
    user_data: {
        status: string,
        token: string,
        data: any
    }, 
    isLogin: boolean
    location: LocationState
}
export interface LocationState{
    place: string,
    lat: number,
    lon:  number
}
export const  User_initialstate : UserState = {
    user_data : {
        status: "",
        token: '',
        data: {}
    },
    isLogin: false,
    location: { place: "Chose your city ", lat: 0, lon: 0}
}