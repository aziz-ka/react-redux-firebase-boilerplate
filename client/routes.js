import { isAuthenticated } from 'client/auth';
import App from './containers/App';
import SignInPage from './containers/Sign-In';
import TasksPage from './containers/Tasks';


export const paths = {
  ROOT: '/',
  SIGN_IN: '/sign-in',
  TASKS: '/tasks'
};

export function requireAuth(state, redirectPath) {
  return (nextState, replace) => {
    const isSignIn = nextState.location.pathname === paths.SIGN_IN;

    if (isAuthenticated(state())) {
      redirectPath ? replace(redirectPath) : null;
    }
    else {
      isSignIn ? null : replace(paths.SIGN_IN);
    }
  };
}

export function getRoutes(state) {
  const {
    ROOT,
    SIGN_IN,
    TASKS
  } = paths;

  return {
    path: ROOT,
    component: App,
    indexRoute: {
      onEnter: requireAuth(state, TASKS)
    },
    childRoutes: [
      {
        path: SIGN_IN,
        component: SignInPage,
        onEnter: requireAuth(state, TASKS)
      },
      {
        path: TASKS,
        component: TasksPage,
        onEnter: requireAuth(state)
      }
    ]
  };
}
