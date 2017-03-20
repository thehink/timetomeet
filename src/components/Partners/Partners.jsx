import React from 'react'

function getMaxWidth(width){
  return {
    maxWidth: width
  }
}

export default class Partners extends React.Component {
  render () {
    return (
      <div className="partners">
        <div className="container">
          <div className="row">
            <div className="col-md-2 col-md-offset-0 col-xs-4 col-xs-offset-0">
              <div className="partner_logo">
                <img style={getMaxWidth('140px')} alt="" src="assets/images/partners/profil-hotels.png"/>
              </div>
            </div>
            <div className="col-md-2 col-md-offset-0 col-xs-4 col-xs-offset-0">
              <div className="partner_logo">
                <a href="https://timetomeet.se/venue/7a_centralen_15" target="_blank">
                  <img style={getMaxWidth('90px')} alt="" src="assets/images/partners/7A-kontor-konferens.png"/>
                </a>
              </div>
            </div>
            <div className="col-md-2 col-md-offset-0 col-xs-4 col-xs-offset-0">
              <div className="partner_logo">

                <img style={getMaxWidth('90px')} alt="" src="assets/images/partners/elite-hotels.png"/>

              </div>
            </div>
            <div className="col-md-2 col-md-offset-0 col-xs-4 col-xs-offset-0">
              <div className="partner_logo">
                <a href="https://timetomeet.se/venue/stora_teatern_13" target="_blank">
                  <img style={getMaxWidth('100px')} alt="" src="assets/images/partners/stora-teatern.png"/>
                </a>
              </div>
            </div>
            <div className="col-md-2 col-md-offset-0 col-xs-4 col-xs-offset-0">
              <div className="partner_logo">
                <a href="https://timetomeet.se/venue/hotel_kung_carl_14" target="_blank">
                  <img style={getMaxWidth('120px')} alt="" src="assets/images/partners/hotel-kung-carl.png"/>
                </a>
              </div>
            </div>
            <div className="col-md-2 col-md-offset-0 col-xs-4 col-xs-offset-0">
              <div className="partner_logo">

                <img style={getMaxWidth('100px')} alt="" src="assets/images/partners/sweden-hotels-2.png"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
