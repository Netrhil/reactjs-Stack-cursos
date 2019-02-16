import { Map as map } from 'immutable';
import { IS_LOADING } from "../actions-type/index";

const initialState = map({
    active: false
});

function isLoading( state = initialState, action ) {
    switch (action.type) {
        case IS_LOADING:
            return state.set('active', action.payload.value);
            break;
    
        default:
        return state;
            break;
    }
}

export default isLoading;