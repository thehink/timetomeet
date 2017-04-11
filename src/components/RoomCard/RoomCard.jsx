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
		this.handleResize();
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleResize);
	}

	handleResize() {

		let cardHeight = this.room_card.clientHeight;

		let imgHeight = window.innerWidth < 768 ? '200px' : `${cardHeight}px`;
		let buttonDivHeight = window.innerWidth < 992 ? 'auto' : `${cardHeight}px`;

		this.setState({
			imgHeight,
			buttonDivHeight
		});


	}

	render() {

		console.log(this.state.parentHeight);

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
