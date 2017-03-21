import React from 'react';

export default class DescriptionData extends React.Component {

	componentDidMount(){

	}

  render () {
    return (
			<div className="venue_descr v_info">
				<div className="heading">
					<h2 className="name">Om Anläggning 2</h2>
				</div>
				<div id="description_data">
					<p>{ venueData.plantFacts }</p>
				</div>
			</div>
    );
  }
}
