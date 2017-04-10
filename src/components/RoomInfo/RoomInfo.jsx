import React from 'React';

import "./RoomInfo.scss";


import Projector from "../../../public/assets/images/new_icons/inlineIcons.jsx";

export default class RoomInfo extends React.Component {

	renderItem(item) {
		return (
			 <li key={item.id}>{item.name}</li>
		)
	}
	renderFacilities(item) {

		let icon;

		switch(item.name) {
			case "Projektor":
			icon = Projector;
			break;
		}



		return (



			 <li key={item.id}>{item.name} Projector</li>
		)
	}


	render() {




		return (

			<div className="room-info">

				<Projector class="projector"/>

				<h1>{this.props.info.name}</h1>

				<h6>Här kommer addressen från adress_data-objecktet</h6>

				<h2>Faciliteter</h2>

				<ul className="tech-list">
					{this.props.info.tech.map(this.renderFacilities)}
				</ul>

				<hr />

				<h5>Max antal</h5>
				<li>{this.props.info.maxSeats}</li>

				<h5>Sittningsalternativ</h5>
					<ul>
						{this.props.info.defaultSeating.map(this.renderItem)}
					</ul>

			</div>
		)
	}


}
