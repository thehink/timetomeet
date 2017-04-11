import React from 'React';

import { Select, Option } from '../SimpleSelect';

import "./RoomSelect.scss";

export default class RoomSelect extends React.Component {

	state = {
		prices: [
			this.props.room.preNoonPrice,
			this.props.room.afterNoonPrice,
			this.props.room.fullDayPrice
		],
		selected: 0,
		selVal: '',
	}

	handleBookingClick(event){
		event.preventDefault();

		var persons = $("[name=persons]").val(),
				date = $("[name=date]").val();

		if(persons && date) {
      //document.location.href = event.currentTarget.href
    } else {
      !date ? $("[name=date]").addClass("error") : $("[name=date]").removeClass("error");
      !persons ? $("[name=persons]").addClass("error") : $("[name=persons]").removeClass("error");

      !date || !persons ? $(".venue .venue_filters .ok").show() : $(".venue .venue_filters .ok").hide();

			if(!persons) $("[name=persons]").focus();
			else if(!date) $("[name=date]").focus();

/*
			let offsetTop = $(event.target).offset().top;
			let offsetLeft = $(event.target).offset().left;

			$(".venue-filters").addClass('asfsafs').css('position', 'absolute').css('top', offsetTop).css('left', offsetLeft);*/
    }
	}

	handleChange(sel, val){
		this.setState({
			selected: sel,
			selVal: val,
		});
	}

	niceTime(time){
		return time.split(':').slice(0,2).join(':');
	}

	render() {

		const {
			preNoonAvailabilityHourStart,
			preNoonAvailabilityHourEnd,
			afterNoonAvailabilityHourStart,
			afterNoonAvailabilityHourEnd
		} = this.props.room;


		return (
			<div className="room-select">
				<hr className="hidden-sm hidden-md hidden-lg" />

				<Select onChange={ this.handleChange.bind(this) } className="room-select_dropdown" name="time_period" selected={ this.state.selected }>
					<Option value="0">Förmiddag <small>{ this.niceTime(preNoonAvailabilityHourStart) } - { this.niceTime(preNoonAvailabilityHourEnd) }</small></Option>
					<Option value="1">Eftermiddag <small>{ this.niceTime(afterNoonAvailabilityHourStart) } - { this.niceTime(afterNoonAvailabilityHourEnd) }</small></Option>
					<Option value="2">Heldag <small>{ this.niceTime(preNoonAvailabilityHourStart) } - { this.niceTime(afterNoonAvailabilityHourEnd) }</small></Option>
				</Select>

				<div className="booking-wrapper">
					<h3 className="price">{ this.state.prices[this.state.selected] } kr</h3>
					<a className="booking-button btn btn-success" href="#" onClick={ this.handleBookingClick.bind(this) }>Boka</a>
				</div>
			</div>
		)
	}


}
