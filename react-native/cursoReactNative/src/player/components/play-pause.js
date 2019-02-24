import React from 'react';
import {
    TouchableHighlight, // Mientras tienes el dedo encima 
    TouchableOpacity, // cuando haces tap
    TouchableWithoutFeedback,
    Text,
    StyleSheet
} from 'react-native';

export default function PlayPause(props) {
    return(
        <TouchableHighlight
            onPress={props.onPress}
            style={styles.container}
            underlayColor='#70b124'
            hitSlop={{ //Genera mas espacio para touch
                left: 5,
                top: 5,
                bottom: 5,
                right: 5
            }} 
        >
            {
                props.paused ?    
                <Text style={styles.button}> Play </Text>
                :
                <Text style={styles.button}> Pause </Text>
            }
        </TouchableHighlight>
        
    )
}

const styles = StyleSheet.create({
    button: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        height: 10,
        marginRight: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'gray'
    }
  
})
