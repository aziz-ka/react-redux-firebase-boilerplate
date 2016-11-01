import { firebaseAuth } from 'client/firebase';
import { signInFulfilled } from './actions';


export function initAuth(dispatch) {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      user => {
        if (user) {
          dispatch(signInFulfilled(user));
        }
        resolve();
        unsubscribe();
      },

      error => reject(error)
    );
  });
}
