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
					<RoomImage />
				</div>
				<div className="col-md-4">
					<RoomInfo />
				</div>
				<div className="col-md-4">
					<RoomSelect />
				</div>
			</div>
		)
	}


}
