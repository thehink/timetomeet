import React from 'React';

import "./RoomInfo.scss";

export default class RoomInfo extends React.Component {

	render() {

		let tech = this.props.info.tech;

		let techList = tech.map((item) => {
			return <li key={item.id}>{item.name}</li>
		});

		return (

			<div className="room-info">

				<h1>{this.props.info.name}</h1>
				<h6>Här kommer addressen från adress_data-objecktet</h6>
				<h2>Faciliteter</h2>
				<ul>
					{techList}
				</ul>
			</div>
		)
	}


}
