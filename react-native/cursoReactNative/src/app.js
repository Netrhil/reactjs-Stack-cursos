import React, { Component } from 'react';
import {
    Text
   } from 'react-native';
import Home from './screens/containers/home';
import Header from './sections/components/header';
import SuggestionList from './videos/containers/suggestion-list';
import CategoryList from './videos/containers/category-list';
import Movie from '../src/screens/containers/movie';
import API from "../src/utils/api";
import { connect } from 'react-redux'

class AppLayout extends Component {
    async componentDidMount () {
        const suggestionList = await API.getSuggestion(10);
        const categoryList = await API.getMovies();
        /* this.setState({
            suggestionList: movies,
            categoryList : categories
        }); */

        this.props.dispatch({
            type: "SET_SUGGESTION_LIST",
            payload: {
            suggestionList
            }
        });

        this.props.dispatch({
            type: "SET_CATEGORY_LIST",
            payload: {
            categoryList
            }
        });
    }


  render() {
    if(this.props.selectedMovie){
        return <Movie/>
    }

    return (
        <Home>
            <Header/>
            <Text> buscador 2 </Text>
            <Text> categorias </Text>
            <CategoryList/>
            <SuggestionList/>
        </Home>
    )
  }
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(AppLayout);
