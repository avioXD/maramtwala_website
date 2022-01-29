 

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

export interface BookingStepState{
   resource:{ switch: boolean,
    microservices:  Sub_model[]
   }
}
export const BookingStep_init = {
    resource:{switch: false,
    microservices: [
        {label: "" ,code: ""}
    ]
    }
}

export  const selectedMicroService_init : SelectedMicroserviceState [] = [{
    label:"", 
    code :""
}]
export interface SelectedMicroserviceState{
  label:string, 
  code :string
    
}

export interface Catagory{
    label: string,
    image_url: string,
    items:[ {
        label: string,
        code : string
    }],
    routerLink: string
}

export interface  Sub_model{
    label: string,
    code: string
  }
export interface MicroserviceCatState{
    Microservice: Catagory,
}
export const Microservice_init : MicroserviceCatState ={
    Microservice: {
        label: "",
        image_url: "",
        items:[ {
            label: "",
            code : ""
        }],
        routerLink: ""
    }
}