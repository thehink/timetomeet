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
			<div className="row room-cards">
				{ this.state.rooms.map(this.renderItem) }
			</div>
		);
	}
}
