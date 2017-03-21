import React from 'react'

export default class PersonsPicker extends React.Component {

	state = {
		value: getParams.persons ? getParams.persons.replace("+", " ") : ""
	}

	componentDidMount(){
		$("[name=persons]").change(function() {
            createSearch()
            if($(this).val()) $(this).removeClass('error');
            if($("[name=date]").val() && $("[name=persons]").val()) $(".venue .venue_filters .ok").hide();
        })
	}

	changeHandle(event){
		this.setState({
        value: event.target.value
    })
	}

  render () {

		let value = this.state.value;

    return (
      <div className="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-0 col-xs-6 col-xs-offset-0 date">
				<input
            tabIndex = "1"
            type = "number"
						min = {0}
						max = {500}
            defaultValue = { value }
            autoComplete = "off"
            name = "persons"
            placeholder = { lang.searchPersons }
					/>
      </div>
    );
  }
}
