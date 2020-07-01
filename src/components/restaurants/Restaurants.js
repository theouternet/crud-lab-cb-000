import React, { Component } from 'react';

class Restaurants extends Component {
  render() {
    
  const { restaurants, deleteRestaurant } = this.props;

    const renderRestaurants = restaurants.map(r => <Restaurant key={r.id} restaurant={r} delete={deleteRestaurant} />)
    
    return(
      <ul>
      
        {renderRestaurants}
 
 </ul>
    );
  }
};

export default Restaurants;