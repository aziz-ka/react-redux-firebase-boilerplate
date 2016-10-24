import { firebaseAuth } from 'client/firebase';
import { signInFulfilled } from './actions';


export function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    firebaseAuth.onAuthStateChanged(
      user => {
        if (user) {
          dispatch(signInFulfilled(user));
        }
        resolve();
        unsubscribe(); // eslint-disable-line no-undef
      },

      error => reject(error)
    );
  });
}
