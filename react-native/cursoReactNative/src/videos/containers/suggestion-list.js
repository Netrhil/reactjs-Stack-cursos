import React, { Component } from 'react';
import { 
    FlatList,
    Text
 } from "react-native";
 import Layout from '../components/suggestion-list-layout';
 import Empty from '../components/empty';
 import Separator from '../components/vertical-separator';
 import Suggestion from '../components/suggestion';

export default class SuggestionList extends Component {

  renderEmpty = () => <Empty text="No hay Elementos en la lista"/>;
  itemSeparator = () => <Separator/>;
  renderItem = ({item}) => {
    return(
      <Suggestion {...item}/>
    )
  }

  render() {
    const list = [
        {
            title: 'leo',
            key: '1'
        },
        {
            title: 'nidas',
            key: '2'
        },
    ]

    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator} 
          renderItem={ this.renderItem }
        />
      </Layout>
    )
  }
}

