export interface ServicePageModel{
            despo: string,
            assign: {label: string, icon: string}
            code: string,
            label : string,
            image_url :  string,
            service_offered: [{
                label:string,
                code:""
            }
            ]
            blogs: [
                {
                    label: string,
                    content: string[]
                }
    ]
}
