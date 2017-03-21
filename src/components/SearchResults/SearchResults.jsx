import React from 'react'


export default class SearchResults extends React.Component {

	componentDidMount(){
		$("#options_nearby").removeClass("hidden-div");
    $(".loading").fadeOut("slow");
	}

  render () {
    return (
			<div id="venue_rooms">
			</div>
    );
  }
}
