import { createNavigationReducer } from 'react-navigation-redux-helpers';
import AppNavigator from '../app-navigator';

// Envuelve al componente AppNavigator con un reducer
const navigationReducer = createNavigationReducer(AppNavigator);

export default navigationReducer;

