import React from "React";

import RoomImage from "../RoomImage";
import RoomInfo from "../RoomInfo";
import RoomSelect from "../RoomSelect";

import "./RoomCard.scss";

export default class RoomCard extends React.Component {

	render() {

		return (

			<div className="row room-card">
				<div className="col-md-4">
					<RoomImage image={this.props.room.imgUrl} />
				</div>
				<div className="col-md-4">
					<RoomInfo info={this.props.room} />
				</div>
				<div className="col-md-4">
					<RoomSelect room={ this.props.room } />
				</div>
			</div>
		)
	}


}
