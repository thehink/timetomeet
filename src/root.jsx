import React from 'react';

import './styles/style.css';
import './styles/venue.css';
import './styles/content.css';
import './styles/default.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/search.css';
import './styles/chosen.css';
import './styles/additions.css';
import './styles/booking.css';
import './styles/widgets.css';

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
