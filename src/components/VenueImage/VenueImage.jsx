import React from 'react'

import './VenueImage.scss';

export default class VenueImage extends React.Component {

	state = {
		images: venueData.plantImages
	}

	componentDidMount(){

	}

	renderItem(item){
    return (
      <li key={`slide_${item.id}`} style={{backgroundImage: `url(${item.url})`}}></li>
    );
  }

  render () {

		//${this.state.images[0].url}
    return (
      <div className="venue-image">
				<div className="venue-image_image" style={ {backgroundImage: `url(https://be.timetomeet.se/static/crb/media/20160913/BjorkbackeFotografi_-_Matsal.jpg)`} }>
				</div>
      </div>
    );
  }
}
