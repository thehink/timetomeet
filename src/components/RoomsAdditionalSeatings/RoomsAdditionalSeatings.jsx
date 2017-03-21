import React from 'react';

export default class RoomsAdditionalSeatings extends React.Component {

	state = {
		tags: venueData.seats
	}

	renderItem(item){
		return (<li key={item.id}>{ item.name }</li>);
	}

  render () {

		if(!this.state.tags.length){
			return (<div></div>);
		}

    return (
      <div className="facility">
				<p className="name">{ lang.venueSeatings }</p>
				<ul>
					{ this.state.tags.map(this.renderItem) }
				</ul>
      </div>
    );
  }
}
