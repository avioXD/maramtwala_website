export interface FashionServicePageModel{
            content: {
                question: string,
                points: string[]
            },
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
