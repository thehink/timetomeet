import React from 'react';

export default class FacilityBeverage extends React.Component {

	state = {
		tags: venueData.plantFoodBeverages
	}

  renderListItem(item){
    return (<li key={`food_${ item.id }`}>{ item.name }</li>);
  }

  render () {

		if(this.state.length == 0){
			return (<div></div>);
		}

    return (
      <div className="facility">
        <p className="name">{ lang.venueFoodBeverage }</p>
        <ul>
          {this.state.tags.map(this.renderListItem)}
        </ul>
      </div>
    );
  }
}
