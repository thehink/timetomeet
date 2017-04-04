import React from 'react';

import './Lista.scss';

export default class Lista extends React.Component{

	state = {
		data: [1,2,3,4]
	}

	componentDidMount(){
		setTimeout(() => {
			this.setState({data: [5,6,7,8]});
		}, 5000);
	}

	renderItem(item){
		return (<li key={item}>{ item }</li>)
	}

	render(){

		let data = this.state.data;

		return (
		<div className="lista">
			<ul>
				{ data.map(this.renderItem) }
			</ul>
		</div>)
	}
}
