import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';
import Name from '../profile/components/name';

export default class Profile extends Component {


    handlePress = () => {
        this.props.navigation.navigate('Home')
    }


    //Se pueden modificar los parametros
    setParams = () => {
        this.props.navigation.setParams({
            name: 'Netrhil'
        })
    }

    // Hacer override de las opciones 
    static navigationOptions = ({navigation}) => {
      return {
        title: `${navigation.getParam('name')} ${navigation.getParam('age', 27)}`
      }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text> Profile </Text>
                <Button
                    title="Ir a la home"
                    onPress={this.handlePress}
                />

                <Button
                    title="Cambiar nombre"
                    onPress={this.setParams}
                />
                <Name/>
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

