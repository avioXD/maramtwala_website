export interface City {
    name: string,
    code: string
}
export interface Catagory{
    label: string,
    image_url: string,
    items:[ {
        label: string,
        code : string
    }]
}

export interface SavedPlace{
    place: string,
    lat: number,
    lon: number
}

export interface Places{
    name: string,
    code: string,
    logo: string
}
export interface Offers{
     offer_title : string,
     offer_image: string,
     offer_desc: string,
     offer_tag: string
}

export interface Exclusive{
    exclusive_set_name: string,
    service: [
        {
            ex_img: string,
            info: string
        }
    ]
}
 