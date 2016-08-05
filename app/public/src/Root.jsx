import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Overall Page Layout Components
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Overall Page Layout Components
import { NavBarTop } from './components/NavBar';
import { Footer }    from './components/Footer';

// Top Navbar route Components
import IntroPage from './components/IntroPage';
import ContentPage from './components/ContentPage';
import SignIn from './components/SignIn';
import Register from './components/Register';

import ContainerDemo from './components/ContainerDemo';

const Page1 = (props) => {
  return (
    <ContentPage>
      <h1>Put your Contents for Page1 here</h1>
      {props.children}
    </ContentPage>
  );
};

const Page2 = (props) => {
  return (
    <ContentPage>
      <h1>Put your Contents for Page2 here</h1>
    </ContentPage>
  );
};

const Page3 = (props) => {
  return (
    <ContentPage>
      <h1>Put your Contents for Page3 here</h1>
    </ContentPage>
  );
};

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

export default class Root extends React.Component {

  static propTypes = {
    store: React.PropTypes.object.isRequired,
  };

  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={IntroPage} />
            <Route path="intro" component={IntroPage} />
            <Route path="page1" component={Page1}>
            </Route>
            <Route path="page2" component={Page2} />
            <Route path="page3" component={Page3} />
            <Route path="signin" component={SignIn} />
            <Route path="register" component={Register} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
