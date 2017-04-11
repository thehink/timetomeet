import React from "React";

import RoomImage from "../RoomImage";
import RoomInfo from "../RoomInfo";
import RoomSelect from "../RoomSelect";

import "./RoomCard.scss";

export default class RoomCard extends React.Component {

constructor(props) {
	super(props)

	this.handleResize = this.handleResize.bind(this);
}
state = {imgHeight: "auto", buttonDivHeight: "auto"}

	componentDidMount() {

		this.setState({buttonDivHeight: (this.room_card.clientHeight + 28).toString() + "px"});

		if(window.innerWidth > 500) {
			this.setState({
				imgHeight: (this.room_card.clientHeight + 28).toString() + "px",
				initialHeight: (this.room_card.clientHeight + 28).toString() + "px"
			});
		} else {
			this.setState({
				imgHeight: "200px",
				initialHeight: this.room_card.clientHeight.toString() + "px"
			});
		}

		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize() {

		if(window.innerWidth < 500) {
			this.setState({imgHeight: "200px"});
		} else {
			this.setState({parentHeight: window.getComputedStyle(this.room_card, null).getPropertyValue("height"), imgHeight: this.state.parentHeight})
			this.setState({imgHeight: this.state.parentHeight});
		}

		console.log(this.state.parentHeight);
	}

	render() {

		return (

			<div className="row room-card">
				<div className="col-md-4 col-sm-6 col-xs-12" style={{padding: "0", height: this.state.imgHeight}}>
					<RoomImage image={this.props.room.imgUrl} />
				</div>
				<div ref={input => this.room_card = input} className="col-md-5 col-sm-6 col-xs-12">
					<RoomInfo info={this.props.room} />
				</div>
				<div className="col-md-3 col-sm-12 col-xs-12" style={{height: this.state.buttonDivHeight}}>
					<RoomSelect room={ this.props.room } />
				</div>
			</div>
		)
	}


}
