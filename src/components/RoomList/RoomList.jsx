import React from 'react';

import RoomCard from '../RoomCard';

export default class RoomList extends React.Component{

	state = {
		rooms: venueRooms,
		seats: 0,
		date: '',
		fetching: false
	}


	componentDidMount(){
		let _this = this;
		$("[name=date]").change(function() {
				if($(this).val()) $(this).removeClass('error');
				if($("[name=date]").val() && $("[name=persons]").val()) $(".venue .venue_filters .ok").hide();
				$("[name=date]").val() || $("[name=date]").datepicker("show");

				_this.doSearch();
		});

		$("[name=persons]").change(function() {
        if($(this).val()) $(this).removeClass('error');
        if($("[name=date]").val() && $("[name=persons]").val()) $(".venue .venue_filters .ok").hide();

				_this.setState({
					seats: parseInt($("[name=persons]").val()) || 0
				});
    })
	}

	doSearch(){
		let persons = parseInt($("[name=persons]").val()) || 0;
		let date = $("[name=date]").val();

		this.setState({
			date: date,
			seats: persons,
			fetching: true
		});

		let filterQuery = {
        page: 1,
        pageSize: 20,
        seats: 1,
        dateTimeFrom: null,
        dateTimeTo: null,
        plantId: venueData.plantId,
        priceFrom: null,
        priceTo: null,
        foodBeverageList: null,
        technologyList: null,
        rating: null,
        orderBy: null,
        orderDirection: null,
        cityId: null
    };

		let dateStr = new Date(date).toISOString().split('T')[0];

		filterQuery.dateTimeFrom = `${dateStr} 09:00:00`;
		filterQuery.dateTimeTo = `${dateStr} 15:00:00`;

		$.post(options.restURL + "conferenceroomavailability/search/", filterQuery, "json")
		.then(response => {

			let rooms = [];

			for(let room of response.rooms){

				let maxSeats = room.seats.map( el => el.numberOfSeat ).reduce((acc, cur) => Math.max(acc, cur));

				console.log(maxSeats);

				rooms.push({
					...room,
					name: room.conferenceRoomName,
					maxSeats: maxSeats,
					defaultSeating: room.seats.map(e => { return { ...e, name: e.seat_name }}),
					tech: venueRooms[0].tech, //this info is not returned from the api
				});
			}

			this.setState({
				fetching: false,
				rooms: rooms,
			});
		});
	}

	renderItem(room){
		return (
			<RoomCard
				room = { room }
				/>
		)
	}

	render(){

		let rooms = this.state.rooms.filter(room => room.maxSeats >= this.state.seats);

		return (
			<div className="col-sm-12 col-md-12 col-lg-12 room-cards">
				{ rooms.map(this.renderItem) }
			</div>
		);
	}
}
