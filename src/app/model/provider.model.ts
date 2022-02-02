export interface  ProviderModel{
    _id: string,
    profile_image: string,
    provider_name: string,
    avg_rating: number,
    address: {
        label: string,
        lat: number,
        lon: number
    },
    provider_domain: [
        {
            label:string,
            code: string,
            provider_services: [
                {
                    code: string,
                    label: string,
                    price: number
                }
            ],
        },
    ],
    reviews:[
        {
            customer_id:string,
            customer_name: string,
            date: string,
            rating: number,
            comment: string,
            service_ref: string
        }
    ]
    
}



export interface FilteredProviderModel{
    _id:string,
    profile_image: string,
    provider_name: string,
    avg_rating: number,
    provider_domain: [
        {
            label:string,
            code: string,
            provider_services: [
                {
                    code: string,
                    label: string,
                    price: number
                }
            ],
        },
    ],
}