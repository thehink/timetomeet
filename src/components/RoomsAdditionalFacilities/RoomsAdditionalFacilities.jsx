import React from 'react';

export default class RoomsAdditionalFacilities extends React.Component {

	state = {
		tags: venueData.technologies
	}

	componentDidMount(){
		$(".venue_about .btn").click(function() {
        totalHeight = 0
        $el = $(this);
        $p  = $el.parent();
        $up = $p.parent();
        $ps = $up.find("div.v_info");

        // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
        $ps.each(function() {
          totalHeight += $(this).outerHeight();
        });

        $up.css({
        // Set height to prevent instant jumpdown when max height is removed
        "height": $up.height(),
        "max-height": 9999
        })
        .animate({
        "height": totalHeight
        })

        // fade out read-more
        $p.fadeOut();

        // prevent jump-down
        return false;
      });
	}

	renderItem(item){
		return (<li key={`equip_${item.id}`}>{ item.name }</li>);
	}

  render () {

		if(!this.state.tags.length){
			return (<div></div>);
		}

    return (
      <div className="facility">
				<p className="name">{ lang.venueMeetingEquipment }</p>
				<ul>
					{ this.state.tags.map(this.renderItem) }
				</ul>
      </div>
    );
  }
}
