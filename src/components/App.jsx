import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

const API_KEY = '34987673-53a1ac1b7d785a5acf3fd9f70';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    loading: false,
    showModal: null,
    totalItems: 0,
  };

  loadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      () => {
        this.getImages(this.state.searchQuery);
      }
    );
  };

  getImages = async query => {
    let showPage = this.state.page;
    if (this.state.searchQuery !== query) {
      this.setState({ images: [], page: 1, totalItems: 0 });
      showPage = 1;
    }
    this.setState({ loading: true, searchQuery: query });

    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${query}&page=${showPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const resObject = response.data;

      this.setState(prevState => ({
        images: [...prevState.images, ...resObject.hits],
        totalItems: resObject.totalHits,
        loading: false,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      this.setState({ loading: false });
    }
  };

  showModal = id => {
    this.setState({ showModal: id });
  };

  hideModal = () => {
    this.setState({ showModal: null });
  };

  render() {
    const showMore = this.state.images.length !== this.state.totalItems;
    let showImage = null;
    if (this.state.showModal) {
      showImage = this.state.images.filter(
        image => image.id === this.state.showModal
      )[0];
    }

    return (
      <div className="App">
        <SearchBar getImages={this.getImages} />
        <ImageGallery showModal={this.showModal} images={this.state.images} />
        {showMore && <Button loadMore={this.loadMore} />}
        {this.state.loading && <Loader />}
        {this.state.showModal && (
          <Modal hideModal={this.hideModal} image={showImage} />
        )}
      </div>
    );
  }
}
export default App;
