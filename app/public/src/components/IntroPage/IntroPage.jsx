import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import Slideshow from '../Slideshow';

import { LayoutRow } from '../Layout';

import styles from './styles.css';

export const IntroPage = () => {
  return (
    <LayoutRow>
      <Slideshow />
      <div className="container">
        <h1>
          Put your introduction here.
        </h1>
      </div>
    </LayoutRow>
  );
};

export default CSSModules(IntroPage, styles);
