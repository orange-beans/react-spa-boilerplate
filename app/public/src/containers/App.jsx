import React, { Component } from 'react';

import { Router, Route, IndexRoute } from 'react-router';

// Overall Page Layout Components
import { NavBarTop } from '../components/NavBar';
import { Footer }    from '../components/Footer';

// Top Navbar route Components
import IntroPage from '../components/IntroPage';

const App = (props) => {
  return (
  <div>
		<NavBarTop />
    <img style={{ width: 1, height: 1 }} src="./src/static/2BeansLogo180x180.svg"/>
    { props.children }
    <Footer />
	</div>
  );
};


export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={IntroPage} />
      <Route path="/intro" component={IntroPage} />
      <Route path="/page1" component={IntroPage} />
      <Route path="/page2" component={IntroPage} />
      <Route path="/page3" component={IntroPage} />
      <Route path="/signin" component={IntroPage} />
      <Route path="/register" component={IntroPage} />
    </Route>
  </Router>
);
