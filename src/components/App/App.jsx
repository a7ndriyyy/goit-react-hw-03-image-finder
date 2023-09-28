import React, { Component } from 'react';
import css from './App.module.css'

import Searchbar from 'components/Searchbar';
class App extends Component {
  state = {
    query: '',
    page: 1,
    totalPages: 1,
    images: [],
    isLoading: false,
    isModalOpen: false,
    largeImageUrl: '',
  };
   handleSearch = searchValue => {
    if (searchValue !== '') {
      if (searchValue !== this.state.query) {
        this.setState({ query: searchValue, page: 1, images: [] });
      } else {
        this.setState({ query: searchValue }, () => {});
      }
    }
  };
   render() {
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.handleSearch} />
      </div>
    );
  }
}
export default App;