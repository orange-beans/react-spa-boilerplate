import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';

import { LayoutRow } from '../Layout';
import styles from './styles.css';

let SignIn = React.createClass({

  render() {
    return (
      <LayoutRow>
       <form role='form'>
          <h1>SignIn Page</h1>
          <div className='form-group'>
            <input type='text' placeholder='Username/email' />
            <input type='password' placeholder='Password' />
            <button type='submit' onClick={this.handleUserLogin}>Submit</button>
          </div>
        </form>
      </LayoutRow>

    );
  }
});

export default CSSModules(SignIn, styles);
