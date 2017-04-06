import React from 'react';

import RoomCard from '../RoomCard';

export default class RoomList extends React.Component{

	state = {
		rooms: venueRooms
	}
	componentDidMount(){

	}

	renderItem(room){
		return (
			<RoomCard
				room = { room }
			/>
		)
	}

	render(){
		return (
			<div className="col-sm-12 col-md-12 col-lg-12 room-cards">
				{ this.state.rooms.map(this.renderItem) }
			</div>
		);
	}
}
