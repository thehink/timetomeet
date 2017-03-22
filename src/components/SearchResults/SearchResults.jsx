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

	renderRoom(e){

		let t = $("[name=persons]").val(),
        dateVal = $("[name=date]").val();

		let a = {
        venue: getParams.venue
    };

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
		prePrice=Math.round(e.preNoonPrice) + " kr",
		aftPrice=Math.round(e.afterNoonPrice) + " kr",
		fullPrice=Math.round(e.fullDayPrice) + " kr",
		fullStart=e.preNoonAvailabilityHourStart,
		fullEnd=e.preNoonAvailabilityHourEnd,
		fullPriceTmp="",
		preTime=e.preNoonAvailabilityHourStart.slice(0, -3)+"-"+e.preNoonAvailabilityHourEnd.slice(0, -3),
		aftTime=e.afterNoonAvailabilityHourStart.slice(0, -3)+"-"+e.afterNoonAvailabilityHourEnd.slice(0, -3),
		fullTime=e.preNoonAvailabilityHourStart.slice(0, -3)+"-"+e.afterNoonAvailabilityHourEnd.slice(0, -3);


		if(dateVal){
			preClass="disabled",
			aftClass="disabled",
			fullClass="disabled";
		}

		if($("[name=persons]").val()>e.maxSeats){
			roomClass="hidden";
		}


		if(this.props.preNoon.conferenceRoomAvailability){

			this.props.preNoon.conferenceRoomAvailability.map(function(r) {
				if(r.conferenceRoom==e.id){

					pre=r.id;
					a.from = r.hoursAvailableFrom.slice(0, -3);
					a.to = r.hoursAvailableTo.slice(0, -3);
					a.id = r.block;
					a.price = Math.round(r.preNoonPrice);
					a.room = r.conferenceRoom;
					a.booking = r.id;
					a.date = r.start;
					a.persons = $("[name=persons]").val();

					var url = "";
					for (var v in a) url += "&" + v + "=" + a[v];

					preUrl= options.bookingPageUrl + "?" + url.substring(1);
					preClass="";

					prePrice=a.price + " kr"

					fullPriceTmp= Math.round(r.fullDayPrice);
					fullStart=a.from;
					full=r.block;

				}
			})
		}

		// Afternoon
		if(this.props.afterNoon.conferenceRoomAvailability){
			this.props.afterNoon.conferenceRoomAvailability.map(function(r) {
				if(r.conferenceRoom==e.id){
					aft=r.id;

					a.from = r.hoursAvailableFrom.slice(0, -3);
					a.to = r.hoursAvailableTo.slice(0, -3);
					a.id = r.block;
					a.price = Math.round(r.afterNoonPrice);
					a.room = r.conferenceRoom;
					a.booking = r.id;
					a.date = r.start;
					a.persons = $("[name=persons]").val();

					var url = "";
					for (var v in a) url += "&" + v + "=" + a[v];

					aftUrl= options.bookingPageUrl + "?" + url.substring(1);
					aftClass="";

					aftPrice=a.price + " kr"


					fullEnd=a.to;

				}
			})
		}


		// Full day
		if(pre && aft){
			a.from = fullStart;
			a.to = fullEnd;
			a.id = full;
			a.price = fullPriceTmp;
			a.booking = pre+","+aft;
			a.persons = $("[name=persons]").val();

			var url = "";
			for (var v in a) url += "&" + v + "=" + a[v];

			fullUrl= options.bookingPageUrl + "?" + url.substring(1);
			fullClass="";
			fullPrice= a.price + " kr";

			fullBookNow=lang.bookNow;

		}

		if(pre || aft) roomClass="", generalClass="hidden-div";

		aftBookNow= dateVal && !aft ? lang.venueBooked:lang.bookNow;
		preBookNow= dateVal && !pre ? lang.venueBooked:lang.bookNow;
		fullBookNow= dateVal && !aft && !pre ? lang.venueBooked:lang.bookNow;

		if($("[name=persons]").val()>e.maxSeats || (dateVal && (!pre && !aft))){
			roomClass="hidden";
		}

		var l = e.imgUrl?e.imgUrl:"assets/images/noimg.gif";

		var i = [];

		for (var r in e.defaultSeating)
		i.push(e.defaultSeating[r].name);



		var u = e.description ? e.description : e.conferenceRoomDescription;

		var genText = lang.price + " " + Math.round(e.fullDayPrice) + " kr";
		//console.log(e);
		var roomId = e.conferenceRoomId ? e.conferenceRoomId : e.id;

		return (
			<div key={`room_${roomId}`} className={`col-xs-12 ${roomClass}`}>
				<div className="venue_room">
					<div className="appearance" style={{backgroundImage: "url('" + l + "')"}}>

					</div>
					<div className="description">
						<h2 className="name">
							{ e.name }
						</h2>
						<div className="room_details">
							<div className="room_data">
								<div className="data_persons">
									<div className="data_head">
										 { lang.maxNo }
									</div>
									<div className="data_val">
										{ e.maxSeats }
									</div>
								</div>
								<div className="room_seats">
									<div className="data_head">
										 { lang.venueSeat }
									</div>
									<div className="data_val">
										{ i.join(', ') }
									</div>
								</div>
							</div>
							<div className="room_prices">

								<div className={`vroom_bookslot ${preClass}`}>
									<div className="bookslot_description">
										<div className="description_group">
											<div className="description_text">
												{ preText }
											</div>
											<div className="description_price">
												{ prePrice }
											</div>
										</div>
										<div className="bookslot_time">
											{ preTime }
										</div>
									</div>
									<div className="bookslot_button">
										<a href={ preUrl } onClick={ this.bookingHandleClick }>
											{ preBookNow }
										</a>
									</div>
								</div>

								<div className={`vroom_bookslot ${aftClass}`}>
									<div className="bookslot_description">
										<div className="description_group">
											<div className="description_text">
												{ aftText }
											</div>
											<div className="description_price">
												{ aftPrice }
											</div>
										</div>
										<div className="bookslot_time">
											{ aftTime }
										</div>
									</div>
									<div className="bookslot_button">
										<a href={ aftUrl } onClick={ this.bookingHandleClick }>
											{ aftBookNow }
										</a>
									</div>
								</div>

								<div className={`vroom_bookslot ${fullClass}`}>
									<div className="bookslot_description">
										<div className="description_group">
											<div className="description_text">
												{ fullText }
											</div>
											<div className="description_price">
												{ fullPrice }
											</div>
										</div>
										<div className="bookslot_time">
											{ fullTime }
										</div>
									</div>
									<div className="bookslot_button">
										<a href={ fullUrl } onClick={ this.bookingHandleClick }>
											{ fullBookNow }
										</a>
									</div>
								</div>

							</div>
						</div>
					</div>
				</div>
			</div>
		);

	}

  render () {

		let rooms = [];
		let t = $("[name=persons]").val(),
        dateVal = $("[name=date]").val();
    rooms = this.plantToArray(venueRooms);
    //console.log(this.props.preNoon);

		if ((!this.props.preNoon.conferenceRoomAvailability && !this.props.afterNoon.conferenceRoomAvailability && dateVal) || !rooms.length){
			return this.renderNoRooms();
		}

    return (
				<div className="venue_rooms v_info">
					<div className="heading">
						<div className="pull-right">{ lang.exVAT }</div>
						<h2 className="name">{ lang.venueAvailableRooms }</h2>
						<div dangerouslySetInnerHTML={{__html: lang.addonsNext}}></div>
					</div>
					<div className="row">
						{ rooms.map(this.renderRoom.bind(this)) }
					</div>
				</div>
    );
  }
}
