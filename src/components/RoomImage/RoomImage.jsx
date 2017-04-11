import React from 'React';

import "./RoomImage.scss";

export default class RoomImage extends React.Component {

constructor(props) {
	super(props)

this.imageRender = this.imageRender.bind(this);
}


	imageRender() {


		if(this.props.image == null) {
			return "https://dev-be.timetomeet.se/static/crb/media/20160929/ladda_ned.jpeg";
		} else {
			return this.props.image;
		}
	}

	render() {


		return (

			<div className="room-image" style={{backgroundImage: `url(${this.imageRender()}`}}>

			</div>
		)
	}


}
