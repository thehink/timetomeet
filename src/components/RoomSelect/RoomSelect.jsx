import React from 'React';

import { Select, Option } from '../SimpleSelect';

import "./RoomSelect.scss";

export default class RoomSelect extends React.Component {

	render() {
		return (
			<div className="room-select">
				<Select name="time_period" selected={ 1 }>
					<Option value="0">Förmiddag från 8:00 - 12:00</Option>
					<Option value="1">Eftermiddag från 12:00 - 16:00</Option>
					<Option value="2">Heldag från 8:00 - 16:00</Option>
				</Select>

				<h3 className="price">3 600 kr</h3>
				<a className="btn btn-success">Gå till bokning</a>
			</div>
		)
	}


}
