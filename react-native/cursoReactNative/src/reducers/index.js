import {
    combineReducers
} from 'redux';

import navigation from './navigation';
import videos from './videos';


//Combina los reducer del appNavigation y de la app
const reducer = combineReducers({
    videos,
    navigation
});

export default reducer;