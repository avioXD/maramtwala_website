import { createAction, props } from '@ngrx/store';
import { CategoryTreeState, AvailabePlacesState, ServicesState,   ProviderState, SubcategoryState } from './shared.state';


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
export const setAllProviders_Store = createAction(
    '[Shared Storage] store  Allproviders' ,
    props<{state: ProviderState[]}>()
)
export const setfinalServicesContent = createAction(
    '[Shared Storage] store FinalServiceContent',
    props<{state: ServicesState[]}>()
)
export const setServiceAvailablePlaces = createAction(
    '[Shared Storage] store Available Places',
    props<{state: AvailabePlacesState[]}>()
)


