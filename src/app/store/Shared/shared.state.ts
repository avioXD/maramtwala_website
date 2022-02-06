 
 
/////// Shared Storage /////////////
 


export interface CategoryTreeState{
    label:string,
    code: string,
    image_url: string,
    subcategory: SubcategoryState[]
}

export interface SubcategoryState{
    label:string,
    code: string,
}
export interface  ServicesState{
    label: string,
    code: string,
    image_url: string
}

export interface SubcategoryPageState{
    label: string,
    image_url: string,
    assign: any,
    services: ServicesState[]
}

export interface AvailabePlacesState{
    logo: string,
    name: string,
    code: string
}
export interface ProviderState{
    providerId: string,
    provider_name: string,
    profile_img: string,
    address: {
        local: string,
        place: string,
        lat: number,
        lng: number
    },
    provider_rating: number,
    phone_no: string,
    id: string,
    code: string,
    label: string,
    price: number,
    distance: number
}
export interface CartState{
    provider: ProviderState
    time: Date,
    count: number
}

/*******ROOT***** */
export interface AppSharedStoreState{
    category_tree: CategoryTreeState[],
    final_services_content:  ServicesState[],
    available_service_places: AvailabePlacesState[],
    subCategoryList: SubcategoryState[],
    window_width: number,
    subcatagory_page_content: any,
    selected_service_code: string,
    cartItem : CartState[]
}
export const appSharedStore_init:AppSharedStoreState = {
    category_tree: [],
    final_services_content: [],
    available_service_places: [],
    subCategoryList: [],
    window_width: 250000,
    subcatagory_page_content: {},
    selected_service_code: '',
    cartItem: []
}
