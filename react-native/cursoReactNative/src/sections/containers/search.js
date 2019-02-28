import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';

import API from '../../../src/utils/api';


class Search extends Component {

    state = {
        text: ''
    }

    handleSubmit = async () => {
        const movies = await API.searchMovie(this.state.text);
        this.props.dispatch({
            type: 'SET_SELECTED_MOVIE',
            payload: {
                movie: movies[0]
            }
        });
    }

    handleChangeText = (text) => {
        this.setState({
            text
        })
    }

    render() {
        return (
            <TextInput
                placeholder="Busca tu pelicula favorita"
                autoCorrect={false}
                autoCapitalize="none"
                underlineColorAndroid="transparent"
                onSubmitEditing={this.handleSubmit}
                onChangeText={this.handleChangeText}
                style={styles.input}
            />
        )
    }
}

export default connect(null)(Search)

const styles = StyleSheet.create({
  input: {
      padding: 15,
      fontSize: 15,
      borderWidth: 1,
      borderColor: '#eaeaeaea'
  }
})



