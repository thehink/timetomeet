import React from 'react'

export default class Footer extends React.Component {
	render () {
		return (
			<footer>
				<div className="container" id="footer">
					<div className="row">
						<div className="col-sm-2 col-sm-offset-0 col-xs-10 col-xs-offset-1">
							<div className="copyright"><a href="/">
								<img alt="TimeToMeet" src="assets/images/logo.png" /></a>
								<p>
									Conferencia AB<br />
								Ingenjörsgatan 8<br />
							411 19 Göteborg<br />
						Org.nr.: 559015-1626<br />
					Tel: 010-410 79 00<br />
				<a href="mailto:info@timetomeet.se">info@timetomeet.se</a><br />

			</p>
			<p>Copyright © 2016-2017</p>
		</div>
	</div>
	<div className="col-sm-6 col-sm-offset-4 col-xs-10 col-xs-offset-1">
		<div className="footer_menu">
			<div className="row">
				<div className="col-xs-4 col-xs-offset-0" id="footer-1">
					<p className="section_title">FÖRETAGET</p>
					<ul>
						<li><a href="/page/about">Om oss</a></li>
						<li><a href="/page/faq">FAQ</a></li>
						<li><a href="/page/contact">Kontakt</a></li>
						<li><a href="/venue-benefits" target="_blank">Anslut anläggning</a></li>
					</ul>
				</div>
				<div className="col-xs-4 col-xs-offset-0" id="footer-2">
					<p className="section_title">LEGALT</p>
					<ul>
						<li><a href="/page/terms">Allmänna villkor</a></li>
						<li><a href="/page/privacy">Integritetspolicy</a></li>
						<li><a href="/page/press">Press</a></li>
					</ul>
				</div>
				<div className="col-xs-4 col-xs-offset-0" id="footer-3">
					<p className="section_title">SOCIALT</p>
					<ul>
						<li><a href="https://www.linkedin.com/company/timetomeet" target="_blank">LinkedIn</a></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
</footer>
);
}
}
