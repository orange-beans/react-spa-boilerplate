import React from 'react';
import { Layout } from '../Layout';
import CSSModules from 'react-css-modules';
import styles from './styles.css';

const Footer = () => {
  return (
    <footer className="container" styleName="container-fluid-mystyle">
      <Layout layout={{col:4}}>
        <div className="">
          <ul className="list-group">
            <li className="list-group-item" styleName="Footer1">Footers</li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
          </ul>
        </div>
      </Layout>
      <Layout layout={{col:4}}>
        <div className="">
          <ul className="list-group">
            <li className="list-group-item" styleName="Footer1">Footers</li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
          </ul>
        </div>
      </Layout>
      <Layout layout={{col:4}}>
        <div className="">
          <ul className="list-group">
            <li className="list-group-item" styleName="Footer1">Footers</li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
            <li className="list-group-item" styleName="Footer1"><a href='#'>info</a></li>
          </ul>
        </div>
      </Layout>
    </footer>
  );
};

export default CSSModules(Footer, styles);
