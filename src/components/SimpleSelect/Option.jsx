import React from 'React';

export default class Option extends React.Component {

	render() {
		return (
			<li className={`${this.props.selected && 'selected' || ''}`}>
				<a onClick={ this.props.handleClick } href="">{ this.props.children }</a>
			</li>
		)
	}

}
