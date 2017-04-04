import React from 'react'

import "./Facilities.scss";
export default class Facilities extends React.Component
{
  render () {
    return (
			<div className="facilities">

				<div className="row">

					<div className="col-md-12"><h1>FACILITETER</h1></div>

					<div className="col-md-12">

						<h2>Sittningsalternativ</h2>

						<p>Bio  Skolsittning  Styrelsesittning  U-Bord</p>

					</div>

					<hr />

					<div className="col-md-12"><h2>Utrustning</h2></div>

					<div className="col-md-12"><h2>Mat & Dryck</h2></div>

				</div>

			</div>
    );
  }
}
