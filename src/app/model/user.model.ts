export interface UserRegisterModel{
    f_name: string,
    l_name: string,
    phone_no: string,
    alternate_no: string,
    email: string,
    address: string,
    profile:string
}

export interface ServiceRequest{
    
    providerId: string,

}

export interface otpVerifyModel{
    phone:  string,
    code: number,
}

export interface PostUserOrderModel {
    serviceDetailId : string,
    userId: string
}

export interface BillDetails{
provider: any,
service: any,
}