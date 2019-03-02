import React from 'react';
import {
    View,
    Text
} from 'react-native';

//High order component que conecta navigation con las propiedades 
import { withNavigation } from 'react-navigation';

function Name(props) {
    return(
        <View>
            <Text> {props.navigation.getParam('name')} </Text>
        </View>
    )
}

// Funciona similar a connect de redux
export default withNavigation(Name);
