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

		let iconUrl;

		switch(item.name) {
			case "Projektor":
			iconUrl = "assets/images/new_icons/projektor.svg";
			break;
		}



		return (



			 <li key={item.id}>{item.name} <div className="facility-icon" style={{backgroundImage: `url(${iconUrl}`}}></div></li>
		)
	}


	render() {




		return (

			<div className="room-info">

				<Projector />

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
