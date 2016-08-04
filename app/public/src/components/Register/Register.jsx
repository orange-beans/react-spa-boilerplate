/**
 * Created by linwei on 2016/5/12.
 */
import React from 'react';
import { Link } from 'react-router';
import CSSModules from 'react-css-modules';
import { LayoutRow } from '../Layout';
import styles from './styles.css';


let Register = React.createClass({

  render() {

    return (
      <LayoutRow>
        <form role='form'>
          <h1>Register Page</h1>
          <div className='form-group'>
            <input type='text' onChange={this.handleUserNameChange} placeholder='Username'/>
            <input type='text' onChange={this.handleEmailChange} placeholder='Email'/>

            <input type='password' onChange={this.handlePasswordChange}
                   placeholder='Password'/>
            <input type='password' onChange={this.handleRePasswordChange}
                   placeholder='Confirm Password'/>
            <button type='submit' onClick={this.handleUserRegister}>Submit</button>
          </div>
        </form>
      </LayoutRow>
    );
  }
});

export default CSSModules(Register, styles);
