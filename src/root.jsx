import React from 'react';

import './styles/style.scss';
import './styles/venue.scss';
import './styles/content.scss';
import './styles/default.scss';
import './styles/header.scss';
import './styles/footer.scss';
import './styles/search.scss';
import './styles/chosen.scss';
import './styles/additions.scss';
import './styles/booking.scss';
import './styles/widgets.scss';

import './styles/icons.scss';
import './styles/globals.scss';

import Header from './components/Header';
import Venue from './components/Venue';
import Partners from './components/Partners';
import Footer from './components/Footer';

export default class Root extends React.Component {

	state = {

	}

	render () {
		return (
			<app>
				<Header />
				<div className="content">
					<Venue />
					<Partners />
				</div>
				<Footer />
			</app>
		);
	}
}
