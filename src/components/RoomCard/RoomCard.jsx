import React from "React";

import RoomImage from "../RoomImage";
import RoomInfo from "../RoomInfo";
import RoomSelect from "../RoomSelect";

import "./RoomCard.scss";

export default class RoomCard extends React.Component {

	render() {

		return (

			<div className="row room-card">
				<div className="col-md-4 col-sm-6 col-xs-12">
					<RoomImage image={this.props.room.imgUrl} />
				</div>
				<div className="col-md-5 col-sm-6 col-xs-12">
					<RoomInfo info={this.props.room} />
				</div>
				<div className="col-md-3 col-sm-12 col-xs-12">
					<RoomSelect room={ this.props.room } />
				</div>
			</div>
		)
	}


}
