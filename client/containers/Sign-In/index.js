import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { signInWithGithub, signInWithGoogle, signInWithTwitter, signInWithFacebook } from 'client/auth';
import Button from '../../components/Button';
import styles from './styles.scss';


function SignInPage({signInWithGithub, signInWithGoogle, signInWithTwitter, signInWithFacebook}) {
  return (
    <div>
      <h3 className={styles.signInHeading}>Sign in</h3>
      <Button onClick={signInWithGithub}>GitHub</Button>
      <Button onClick={signInWithGoogle}>Google</Button>
      <Button onClick={signInWithTwitter}>Twitter</Button>
      <Button onClick={signInWithFacebook}>Facebook</Button>
    </div>
  );
}

SignInPage.propTypes = {
  signInWithFacebook: PropTypes.func.isRequired,
  signInWithGithub: PropTypes.func.isRequired,
  signInWithGoogle: PropTypes.func.isRequired,
  signInWithTwitter: PropTypes.func.isRequired
};

const mapDispatchToProps = {
  signInWithGithub,
  signInWithGoogle,
  signInWithTwitter,
  signInWithFacebook
};

export default connect(
  null,
  mapDispatchToProps
)(SignInPage);
