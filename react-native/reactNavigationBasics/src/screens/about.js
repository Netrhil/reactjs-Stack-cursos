import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default class About extends Component {

    handlePress = () => {

        // El segundo parametro de navigate permite enviar info
        this.props.navigation.navigate('Profile', {
            name: 'Josee'
        })
    }
    
    render() {
        return (
        <View style={styles.container}>
            <Text> About </Text>
            <Button
                title="Ir al profile"
                onPress={this.handlePress}
            />
        </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

