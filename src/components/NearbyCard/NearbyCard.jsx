import React from 'react';

import './NearbyCard.scss';

export default class NearbyCard extends React.Component {
  render () {

		const {
			distance,
			factsAboutPlant,
			images,
			lat,
			lon,
			name,
			nameForUrl,
			plantId
		} = this.props.venue;

    return (
			<div className="nearby-card">
				<img className="image" src={images[0].image} />

				<h2>{ name }</h2>

				<div className="desc">
					<div className="desc-icon icon person"></div>
					<div className="desc-body">
						<div className="desc-title">
							Antal
						</div>
						<div className="desc-content">
							14
						</div>
					</div>
				</div>

				<div className="desc">
					<div className="desc-icon icon chair"></div>
					<div className="desc-body">
						<div className="desc-title">
							Sittnings alternativ
						</div>
						<div className="desc-content">
							Bio, Skolsittning, Styrelse sittning, Ö
						</div>
					</div>
				</div>

				<a href="#" className="show-room-button btn btn-success">Visa Rum</a>
			</div>
    );
  }
}
