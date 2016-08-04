import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const NavBarTop = () => {
  return (
    <nav className="navbar navbar-default navbar-fixed-top" styleName="navbar1">
      <div className="container">
        <div className="container-fluid">
          <div className="nav-header" styleName="navstyle">
            <button className="navbar-toggle collapsed">
              <span className="sr-only"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a href="/" styleName="brand1" className="nav-brand pull-left">
              <span>
                Your logo here
                <div style={{width: 64, height: 64}}>
                  <img src="./src/static/favicon.ico"/>
                </div>
              </span>
            </a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/intro">Intro</Link></li>
              <li><Link to="/page1">Page1</Link></li>
              <li><Link to="/page2">Page2</Link></li>
              <li><Link to="/page3">Page3</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="/signin">Sign In</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CSSModules(NavBarTop, styles);
