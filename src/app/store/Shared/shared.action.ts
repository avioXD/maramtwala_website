import { createAction, props } from '@ngrx/store';
import { CategoryTreeState, AvailabePlacesState, ServicesState,   ProviderState, SubcategoryState, CartState } from './shared.state';


////// shared storage //////////

export const APP_SHARED_STORAGE = '[Shared Storage] store data'
export const setCategorytree_Store = createAction(
    '[Shared Storage] store category' ,
    props<{state: CategoryTreeState[]}>()
)
export const setSubcategoryItems = createAction(
    '[Shared Storage] store  subcategory',
    props<{state: SubcategoryState[]}>()
)

export const setfinalServicesContent = createAction(
    '[Shared Storage] store FinalServiceContent',
    props<{state: ServicesState[]}>()
)
export const setServiceAvailablePlaces = createAction(
    '[Shared Storage] store Available Places',
    props<{state: AvailabePlacesState[]}>()
)
export const setWindowWidth = createAction(
    '[Shared Storage] store Available Places',
    props<{state: number}>()
)
export const setSubcategoryPageContent = createAction(
    '[Shared Storage] store subcategorypagecontent  ',
    props<{state: number}>()
)
export const setSelectedServiceCode = createAction(
    '[Shared Storage] store selected service code  ',
    props<{state: string}>()
)
export const setCartedItems = createAction(
    '[Shared Storage] store cart  ',
    props<{state: CartState[]}>()
)



