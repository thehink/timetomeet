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
    }
	}

	handleChange(sel, val){
		this.setState({
			selected: sel,
			selVal: val,
		});
	}

	render() {
		return (
			<div className="room-select">
				<Select onChange={ this.handleChange.bind(this) } className="room-select_dropdown" name="time_period" selected={ this.state.selected }>
					<Option value="0">Förmiddag från <small>8:00 - 12:00</small></Option>
					<Option value="1">Eftermiddag från <small>12:00 - 16:00</small></Option>
					<Option value="2">Heldag från <small>8:00 - 16:00</small></Option>
				</Select>

				<div className="booking-wrapper">
					<h3 className="price">{ this.state.prices[this.state.selected] } kr</h3>
					<a className="booking-button btn btn-success" href="#" onClick={ this.handleBookingClick.bind(this) }>Boka</a>
				</div>
			</div>
		)
	}


}
