import React from 'React';

import "./RoomImage.scss";

export default class RoomImage extends React.Component {

	render() {

		let image = this.props.image || '/assets/images/noimg.gif';

		return (


			<div className="room-image" style={{backgroundImage: `url(${image}`}}>


			</div>
		)
	}


}
