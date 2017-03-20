import React from 'react'

import venueData from '../../data/venue_data.json';

export default class MainSlider extends React.Component {

  state = {
    slides: venueData.plantImages
  }

  componentDidMount(){
    $(".venue_slider .bxslider").bxSlider({
                slideMargin: 0,
                speed: 500,
                pager: !1,
                controls: !0,
                randomStart: !1,
                preloadImages: "all",
                adaptiveHeight: false,
                responsive: !0,
                touchEnabled: true,
                nextText: "",
                prevText: "",
                onSliderLoad: function(e) {}
            });
  }

  renderItem(item){
    return (
      <li key={`slide_${item.id}`} style={{backgroundImage: `url(${item.url})`}}></li>
    );
  }

  render () {

    if(this.state.slides.length == 0){
      return (
        <div className="cleafix" style={{height: '180px'}}></div>
      );
    }

    return (
      <div className="venue_slider container">
        <ul className="bxslider">
          {this.state.slides.map(this.renderItem)}
        </ul>
      </div>
    );
  }
}
