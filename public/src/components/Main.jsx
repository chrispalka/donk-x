import React, { component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './List.jsx';
import Favorites from './Favorites.jsx';
import Navigation from './Navigation.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";



class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchResults: [],
      favoriteResults: {},
      savedFavorites: {},
      favoriteView: false
    }
  }

  onChange = (e) => {
    const store = this.state;
    store[e.target.name] = e.target.value;
    this.setState(store);
  }


  handleSearch = (e) => {
    let results;
    e.preventDefault();
    const data = new FormData()
    data.append('search', this.state.search);
    fetch('/search', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(data => {
        const result = [];
        data = data.productList
        data.forEach((x) => {
          result.push((({ name, url, highest_bid, last_sale, media }) => ({ name, url, highest_bid, last_sale, media }))(x))
        })
        this.setState({ searchResults: result })
      })
  }

  handleFavorite = (favorite) => {
    const sneakerName = favorite[0];
    const highestBid = favorite[1];
    const lastSale = favorite[2];
    const url = favorite[3];
    const image = favorite[4];
    console.log('url from handleFavorite: ', url)
    console.log('image from handleFavorite: ', image)
    const data = new FormData();
    const favoriteStore = this.state.favoriteResults;
    const savedFavorites = this.state.savedFavorites
    if (favoriteStore[sneakerName] === undefined || favoriteStore[sneakerName].status === false) {
      console.log('Shoe does not exist in favoriteStore.. Settings status true')
      favoriteStore[sneakerName] = {
        status: true,
        highestBid: highestBid,
        lastSale: lastSale,
        url: url,
        media: image,
        username: this.props.username
      };
      savedFavorites[sneakerName] = true;
      this.setState(favoriteStore);
      this.setState(savedFavorites);
      data.append('name', sneakerName)
      for (var k in favoriteStore[sneakerName]) {
        data.append(k, favoriteStore[sneakerName][k])
      }
      fetch('/favorite', {
        method: 'POST',
        body: data
      })
    } else {
      console.log('Shoe exists in favoriteStore.. Settings status false')
      favoriteStore[sneakerName].status = false;
      favoriteStore[sneakerName].username = this.props.username;
      savedFavorites[sneakerName] = false;
      this.setState(savedFavorites);
      data.append('name', sneakerName)
      for (var k in favoriteStore[sneakerName]) {
        data.append(k, favoriteStore[sneakerName][k])
      }
      fetch('/favorite', {
        method: 'POST',
        body: data
      })
      delete favoriteStore[sneakerName]
    }
  }

  renderFavorites = () => {
    const favoriteStore = this.state.favoriteResults;
    const savedFavorites = this.state.savedFavorites;
    const data = new FormData();
    const results = [];
    const dataObj = {}
    data.append('name', this.props.username);
    fetch('/renderfavorite', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(data => {
        for (var i = 0; i < data.result.length; i++) {
          let currentItem = data.result[i]
          favoriteStore[currentItem.name] = {
            status: true,
            highestBid: currentItem.highestbid,
            lastSale: currentItem.lastsale,
            url: currentItem.url,
            media: currentItem.media,
          }
          savedFavorites[currentItem.name] = true;
        }
        this.setState(savedFavorites);
        this.setState(favoriteStore);
      })
    this.setState(state => ({
      favoriteView: !this.state.favoriteView
    }));
  }

  render() {
    if (!this.state.favoriteView) {
      return (
        <div className="container">
        <Navigation />

          <span className="favorite"><FontAwesomeIcon icon={faStar} onClick={this.renderFavorites} /></span>
          <form onSubmit={this.handleSearch}>
            <div className="form-group">
              <input type="text" className="form-control" name="search" value={this.state.search} onChange={this.onChange} placeholder="Lets find some sneakers!"></input>
            </div>
          </form>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Highest Bid</th>
                <th scope="col">Last Sale</th>
              </tr>
            </thead>
            <List searchResults={this.state.searchResults} favoriteResults={this.state.favoriteResults} handleFavorite={this.handleFavorite} />
          </table>
        </div>
      )
    } else if (!Object.entries(this.state.favoriteResults).length < 1) {
      return (
        <div className="container">
          {h1}
          <span className="favorite"><FontAwesomeIcon icon={['fas', 'home']} onClick={this.renderFavorites} /></span>
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Name</th>
                <th scope="col">Highest Bid</th>
                <th scope="col">Last Sale</th>
              </tr>
            </thead>
            <Favorites favoriteResults={this.state.favoriteResults} savedFavorites={this.state.savedFavorites} handleFavorite={this.handleFavorite} />
          </table>
        </div>
      )
    } else {
      return (
        <div className="container">
          {h1}
          <span className="favorite"><FontAwesomeIcon icon={['fas', 'home']} onClick={this.renderFavorites} /></span>
          <h3>Come back when you have added some favorites!</h3>
        </div>
      )
    }
  }
}

export default Main;