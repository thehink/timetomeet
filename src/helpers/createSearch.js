import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from '../components/SearchResults';


var firstSearch = !1;

const converDateTime = function(e, t, a) {
    var r = {
        Jan: 1,
        Feb: 2,
        Mar: 3,
        Apr: 4,
        May: 5,
        Maj: 5,
        Jun: 6,
        Jul: 7,
        Aug: 8,
        Sep: 9,
        Oct: 10,
        Okt: 10,
        Nov: 11,
        Dec: 12
    };
    if (e) {
        e = e.split(" "),
        e[1] = r[e[1]],
        e.reverse(),
        e = e.join("-");
        var n = t.split(":");
        n = parseInt(n[0]);
        var l = a.split(":");
        if (l = parseInt(l[0]),
        t && (l > n || !l))
            var c = e + " " + t + ":00";
        else
            c = e + " 09:00:00";
        return a = a && (l > n || !n) ? e + " " + a + ":00" : e + " 16:00:00",
        [c, a]
    }
    return [null , null ]
}

const makeSearchUrl = function() {
    var e = options.venuePageUrl + "/" + venueData.nameForUrl + "_" + venueData.plantId + "?";
    $("#second_search_form input,#second_search_form select").each(function() {
        $(this).attr("name") && (e += $(this).attr("name") + "=" + $(this).val() + "&")
    })
    //,window.history.pushState({}, "", e.slice(0, -1))  // split('#')[0]  slice(0, -1)
}
const createSearch = function() {
  // only query API when date is set
  if( $("[name=date]").val() ){
    var filterQuery = {
        page: 1,
        pageSize: 20,
        seats: 1,
        dateTimeFrom: null,
        dateTimeTo: null,
        plantId: venueData.plantId,
        priceFrom: null,
        priceTo: null,
        foodBeverageList: null,
        technologyList: null,
        rating: null,
        orderBy: null,
        orderDirection: null,
        cityId: null
    };

    if ( $("[name=persons]").val()) {
        var e = $("[name=persons]").val().replace("persons", "");
        e = e.replace("person", ""),
        filterQuery.seats = e.trim(" ")
    }

    var filterQuery2=filterQuery;

    // prepare query x2
    var t = converDateTime($("[name=date]").val(), "09:00", "10:00");
    filterQuery.dateTimeFrom = t[0],
    filterQuery.dateTimeTo = t[1];

    t = converDateTime($("[name=date]").val(), "14:00", "15:00");
    filterQuery2.dateTimeFrom = t[0],
    filterQuery2.dateTimeTo = t[1];

    $.when(
      // Get prenoon availability
      $.post(options.restURL + "conferenceroomavailability/search/", filterQuery, "json"),

      // Get afternoon availability
      $.post(options.restURL + "conferenceroomavailability/search/", filterQuery2, "json")

    ).then(function(prenoon, afternoon) {
       console.log("data loaded");
			 ReactDOM.render(<SearchResults
	 			preNoon={prenoon[0]}
	 			afterNoon={afternoon[0]}
	 			/>, document.getElementById("venue_rooms"))
    });

  } else {
    ReactDOM.render(<SearchResults
			preNoon={[]}
			afterNoon={[]}
			/>, document.getElementById("venue_rooms"))
  }

  firstSearch ? makeSearchUrl() : firstSearch = !0

}

export default createSearch;
