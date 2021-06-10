import React from 'react';
import Header from 'src/containers/Header';
import SearchBar from 'src/containers/SearchBar';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './home.scss';

const Home = ({ searchInputValue }) => (
  <div>
    <Header />
    <div className={classNames('home', { 'home--noResearch': searchInputValue.length === 0, 'home--research': searchInputValue.length > 0})}>
      <div className="home__searchBar">
        <p className="home__searchBar__presentation">Le moteur de recherche pour vos moments devant la TV</p>
        <SearchBar className="home__searchBar__input" />
        <p className="home__searchBar__suggestion">Suggestion: Jurassic Park, Friends</p>
      </div>
      <div className="home__pickyMood">
        <p>Vous ne savez pas quoi regarder? Faites nous confiance!</p>
        <a>Picky Mood</a>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  searchInputValue: PropTypes.string.isRequired,
};

export default Home;
