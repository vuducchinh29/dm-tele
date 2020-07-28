import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../theme';

//STYLES
const styles = StyleSheet.create({
  searchContainer: {
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  searchRow: {
    backgroundColor: theme.colors.searchBackground,
    flexDirection: 'row',
    borderRadius: 5,
    height: 45,
    alignItems: 'center',
    paddingHorizontal: 10
  },

  searchInputStyle: {
    paddingHorizontal: 30,
    backgroundColor: theme.colors.searchBackground,
    fontSize: 15,
    height: 45,
    flex: 1,
    color: theme.colors.searchText
  }
});

class SearchInput extends Component {
  onChangeSearchText = (value) => {
    this.props.getSearchText(value)
  }
  render() {
    /* Deconstruction */
    const { searchContainer, searchInputStyle, searchRow } = styles;
    return (
      /* The main Container component */
      <View style={searchContainer}>
        {/* The Row Container component */}
        <View style={searchRow}>
          {/* The text Input which we write in it */}
          <Icon size={20} name={'search'} color={theme.colors.searchIcon} />
          <TextInput 
            maxLength={10} 
            placeholder="Search" 
            style={searchInputStyle} 
            onChangeText = {(text) => this.onChangeSearchText(text)}
          />
        </View>
      </View>
    );
  }
}

export default SearchInput;
