import React from 'React';

import './SimpleSelect.scss';

export default class Select extends React.Component {

	state = {
		selected: this.props.selected || 0,
		value: '',
		display: ''
	}

	constructor(props){
		super(props);

		if(this.props.children.length > 0){
			this.state.value = this.props.children[this.state.selected].props.value;
			this.state.display = this.props.children[this.state.selected].props.children;
		}
	}

	onItemClick(selected, props){
		this.setState({
			selected: selected,
			value: props.value,
			display: props.children
		})
		event.preventDefault();
	}

	render() {
		let children = React.Children.map(this.props.children, (child, index) => {
			return React.cloneElement(child, {
				selected: index == this.state.selected,
				handleClick: e => (this.onItemClick.bind(this))(index, child.props)
			});
		})

		return (
			<div className={`simple-select dropdown ${this.props.className}`}>
				<input type="hidden" name={ this.props.name } value={ this.state.value } />
				<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
			    { this.state.display }
			    <span className="glyphicon glyphicon-menu-down"></span>
			  </button>
				<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
					{ children }
			  </ul>
			</div>
		)
	}

}
