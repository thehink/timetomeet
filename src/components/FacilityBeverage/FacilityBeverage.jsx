import React from 'react';

import venueData from '../../data/venue_data.json';

export default class FacilityBeverage extends React.Component {

  state = {
    tags: venueData.plantFoodBeverages
  }

  renderListItem(item){
    return (<li key={`food_${item.id}`}>{item.name}</li>);
  }

  render () {
    return (
      <div className="facility">
        <p className="name">Name</p>
        <ul>
          {this.state.tags.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}
