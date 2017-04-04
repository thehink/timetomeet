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

					<div className="col-md-12">

						<h2>Utrustning</h2>

						<p>Anteckningsmaterial Blädderblock Internet (Wi Fi) ProjektorProjektorduk Whiteboard </p>

					</div>

					<hr />

					<div className="col-md-12">

						<h2>Mat & Dryck</h2>

						<p>Eftermiddagsfika, inkl. kaffe/te (standard)
							Enbart kaffe/te
							Förmiddagsfika, inkl. kaffe/te (standard)
							FruktLunch i restaurang/annan (standard)</p>

					</div>

				</div>

			</div>
    );
  }
}
