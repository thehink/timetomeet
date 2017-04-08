import React from 'React';

import { Select, Option } from '../SimpleSelect';

import "./RoomSelect.scss";

export default class RoomSelect extends React.Component {

	render() {
		return (
			<div className="room-select">
				<Select className="room-select_dropdown" name="time_period" selected={ 1 }>
					<Option value="0">Förmiddag från <small>8:00 - 12:00</small></Option>
					<Option value="1">Eftermiddag från <small>12:00 - 16:00</small></Option>
					<Option value="2">Heldag från <small>8:00 - 16:00</small></Option>
				</Select>

				<div className="booking-wrapper">
					<h3 className="price">3 600 kr</h3>
					<a className="booking-button btn btn-success">Boka</a>
				</div>
			</div>
		)
	}


}
