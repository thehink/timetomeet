import React from 'react'

export default class Header extends React.Component {
	render () {
		return (
			<header data-venue="2">
				<div className="header_upper dark">
					<div className="container">
						<div className="row">
							<div className="col-sm-3 col-md-2 col-xs-12">
								<a className="logo" href="/"><img alt="" src="assets/images/logo.png"/></a>
							</div>
							<div className="col-sm-9 col-md-10 col-xs-12  header_links">
								<div className="header-support-text">
									Kundtj&auml;nst  (m&aring;n - fre, kl. 9-17):<br /><a href="mailto:support@timetomeet.se">support@timetomeet.se</a> &middot; <span className="nowrap header-support-phone">010 - 410 79 00</span>							</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
