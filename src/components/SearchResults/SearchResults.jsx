import React from 'react'


export default class SearchResults extends React.Component {

	componentDidMount(){
		$("#options_nearby").removeClass("hidden-div");
    $(".loading").fadeOut("slow");
	}

	bookingLinkHandle(event){
		event.preventDefault();
	}

	calculatePriceType(e, t, a){
		e = e.split(":"),
    t = t.split(":"),
    e = e[0],
    t = t[0];
    var r;
    parseInt(t) - parseInt(e);
    return r = 10 >= e && t >= 14 ? "fullDayPrice" : e > 12 ? "afterNoonPrice" : "preNoonPrice"
	}

	plantToArray(e){
		var t = [];
        for (var a in e)
            t[t.length] = e[a];
        return t
	}

	bookingHandleClick(e){
		e.preventDefault();
    var t = $("[name=persons]").val(),
        a = $("[name=date]").val();

    if(t && a) {
      document.location.href = e.currentTarget.href
    } else {
      !a ? $(".venue_filters [name=date]").addClass("error") : $(".venue_filters [name=date]").removeClass("error");
      !t ? $(".venue_filters [name=persons]").addClass("error") : $(".venue_filters [name=persons]").removeClass("error");

      !a || !t ? $(".venue .venue_filters .ok").show() : $(".venue .venue_filters .ok").hide();

      if(!t) $("[name=persons]").focus();
      else if(!a) $("[name=date]").focus();
    }
	}

	renderNoRooms(){
		return (
			<div id="venue_rooms">
				<div className="venue_rooms v_info">
					<div className="heading">
						<h2 className="name">{ lang.venueAvailableRooms }</h2>
					</div>
					<div className="row">
						<div className="alert alert-danger">
							{ lang.venueNoRooms }
						</div>
					</div>
				</div>
			</div>
		);
	}

	renderRoom(room){
		var strFrom = lang.searchFrom.toLowerCase(),
		pre=false,
		aft=false,
		full=false,
		preUrl="",
		aftUrl="",
		fullUrl="",
		generalClass="",
		roomClass="",
		preClass="",
		aftClass="",
		fullClass="",
		preBookNow=lang.bookNow,
		aftBookNow=lang.bookNow,
		fullBookNow=lang.bookNow,
		preText=!dateVal?lang.venuePreNoon+" "+strFrom:lang.venuePreNoon,
		aftText=!dateVal?lang.venueAfterNoon+" "+strFrom:lang.venueAfterNoon,
		fullText=!dateVal?lang.venueFullDay+" "+strFrom:lang.venueFullDay,
		prePrice=Math.round(room.preNoonPrice) + " kr",
		aftPrice=Math.round(room.afterNoonPrice) + " kr",
		fullPrice=Math.round(room.fullDayPrice) + " kr",
		fullStart=room.preNoonAvailabilityHourStart,
		fullEnd=room.preNoonAvailabilityHourEnd,
		fullPriceTmp="",
		preTime=room.preNoonAvailabilityHourStart.slice(0, -3)+"-"+room.preNoonAvailabilityHourEnd.slice(0, -3),
		aftTime=room.afterNoonAvailabilityHourStart.slice(0, -3)+"-"+room.afterNoonAvailabilityHourEnd.slice(0, -3),
		fullTime=room.preNoonAvailabilityHourStart.slice(0, -3)+"-"+room.afterNoonAvailabilityHourEnd.slice(0, -3);

		if(dateVal){
			preClass="disabled",
			aftClass="disabled",
			fullClass="disabled";
		}

		if($("[name=persons]").val()>e.maxSeats){
			roomClass="hidden";
		}

	}

  render () {

		let rooms = [];
		let t = $("[name=persons]").val(),
            dateVal = $("[name=date]").val();
    rooms = this.plantToArray(venueRooms);
    console.log(this.props.preNoon);

		if ((!this.props.preNoon.conferenceRoomAvailability && !this.props.afterNoon.conferenceRoomAvailability && dateVal) || !rooms.length){
			return this.renderNoRooms();
		}

		var a = {
            venue: getParams.venue
        };

    return (
			<div id="venue_rooms">
				<div className="venue_rooms v_info">
					<div className="heading">
						<div className="pull-right">{ lang.exVAT }</div>
						<h2 className="name">{ lang.venueAvailableRooms }</h2>
					</div>
					<div>Deng!</div>
					<div className="row">
						{ rooms.map(this.renderRoom) }
					</div>
				</div>
			</div>
    );
  }
}
