import React from 'React';

import "./RoomCard.scss";

export default class RoomCard extends React.Component {

	render() {
		return (

			<div className="row">
				<div className="col-md-4">
					<RoomIMage />
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
