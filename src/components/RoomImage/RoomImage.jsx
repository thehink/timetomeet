import React from 'React';

import "./RoomImage.scss";

export default class RoomImage extends React.Component {

	render() {
		console.log(this.props.image);

		return (

			<div className="room-image" style={{backgroundImage: `url(${this.props.image}`}}>

			</div>
		)
	}


}
