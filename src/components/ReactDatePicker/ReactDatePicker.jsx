import React from 'react'

export default class ReactDatePicker extends React.Component {

	componentDidMount(){
		$("#date").datepicker({
					 showOtherMonths: !0,
					 selectOtherMonths: !0,
					 dateFormat: "d M yy",
					 firstDay: 1,
					 minDate: 0
			 }),
			 $("[name=date]").change(function() {

					 console.log($("[name=date]").val());
					 if($(this).val()) $(this).removeClass('error');
					 if($("[name=date]").val() && $("[name=persons]").val()) $(".venue .venue_filters .ok").hide();
					 $("[name=date]").val() || $("[name=date]").datepicker("show"),
					 createSearch()
			 });
	}

  render () {

		let e = getParams.date ? getParams.date.replace(/%20/g, " ") : "";
		e = getParams.date ? e.replace(/\+/g, " ") : "";
		$("#date[value='']").datepicker("setDate", "+2d");

		if(!getParams.date){

		}

    return (
      <div className="col-sm-6 col-sm-offset-0 col-md-5 col-md-offset-0 col-xs-6 col-xs-offset-0 date">
				<input
					  readOnly = "true"
            tabIndex = "2"
            type = "text"
            defaultValue = {e}
            autoComplete = "off"
            name = "date"
            id = "date"
            placeholder = {lang.searchDate}
					/>
      </div>
    );
  }
}
