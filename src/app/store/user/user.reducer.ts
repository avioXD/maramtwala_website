import { createReducer, on } from '@ngrx/store';
import { setUser_exist, setUser_isLogin, setUser_location, setUser_token } from './user.action';
import { user_init } from './user.state';


const _userReducer = createReducer(
    user_init,
    on(setUser_location, (state, action)=>{
         return{
             ...state,
              location: action.state
         }
    }),
    on(setUser_token,(state, action)=>{
        return{
            ...state,
             token: action.state
        }
   }),
   on(setUser_isLogin,(state, action)=>{
    return{
        ...state,
         isLogin: action.state
    }
    }),
    on(setUser_exist,(state, action)=>{
        return{
            ...state,
            isuserexist: action.state
        }
    })
   
)

export function SelectUserReducer(state, action){
    return _userReducer(state,action)
}