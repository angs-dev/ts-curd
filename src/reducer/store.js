import {SET_STORE, SERACH_STORE, ADD_CUSTOMER,STORE_UPDATED, SET_STORE_CUSTOMER_COUNT, SET_STORE_CUSTOMER_DETAIL} from '../../src/actions/actions';

export  default function store (state= [], action={}){
    switch(action.type){
        case  SET_STORE :
           return [action.store]
    
        case  SET_STORE_CUSTOMER_COUNT :
                return [action.store]

        case  SET_STORE_CUSTOMER_DETAIL :
                    return [action.store]

        case ADD_CUSTOMER:
            return [
              ...state,
              action.store
            ];
        
        case STORE_UPDATED:
            return state.map(item => {
                    if (item.ID === action.store.data.ID) return action.store;
                    return [... state, item];
                  });

        case  SERACH_STORE :
            const index = state.findIndex(item => item.ID === action.store.data.ID);
            if (index > -1) {
              return state.map(item => {
                if (item.ID === action.store.data.ID) return action.store;
                return [... state, item];
              });
            } else {
              return [
                ...state,
                action.store
              ];
            }
       default: return state;
    }
}