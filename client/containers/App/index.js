import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { signOut, getAuth } from 'client/auth';
import styles from './styles.scss';


function App({authenticated, children, signOut}) {
  return (
    <main className={styles.appContainer}>
      <h1>React-Redux-Firebase To-Do Boilerplate</h1>
      {children}
    </main>
  );
}

App.propTypes = {
  authenticated: PropTypes.bool.isRequired,
  children: PropTypes.element,
  signOut: PropTypes.func.isRequired
};


//=====================================
//  CONNECT
//-------------------------------------

const mapStateToProps = getAuth;

const mapDispatchToProps = {
  signOut
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
