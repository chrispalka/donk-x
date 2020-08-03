import React, { component } from "react";
import FavoritesEntry from './FavoritesEntry.jsx'

class Favorites extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.renderFavorites()
  }

  render(){
    return(
      <tbody>
      {Object.keys(this.props.favoriteResults).map((shoe, i) =>
        <FavoritesEntry name={shoe} highestBid={this.props.favoriteResults[shoe].highestBid} lastSale={this.props.favoriteResults[shoe].lastSale} media={this.props.favoriteResults[shoe].media} url={this.props.favoriteResults[shoe].url} handleFavorite={this.props.handleFavorite} savedFavorites={this.props.savedFavorites} key={i} />
      )}
    </tbody>
    )
  }

}

export default Favorites;
