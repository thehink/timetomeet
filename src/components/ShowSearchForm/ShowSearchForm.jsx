import React from 'react'

import PersonsPicker from '../PersonsPicker';
import ReactDatePicker from '../ReactDatePicker';

export default class ShowSearchForm extends React.Component {

	componentDidMount(){
		$(".venue_filters .ok a").click(function(e) {
            e.preventDefault(),
            $(".content").removeClass("darker_nr"),
            $(".venue_filters .row .person, .venue_filters .row .date, .venue_filters .row .time").removeClass("col-md-6"),
            $(".venue_filters .row .person, .venue_filters .row .date, .venue_filters .row .time").addClass("col-md-5"),
            $(".venue_filters").removeClass("fill_it")
        })
	}

  render () {
    return (
			<div id="search_form">
				<form id="second_search_form">
					<PersonsPicker />
					<ReactDatePicker />
	      </form>
			</div>
    );
  }
}
