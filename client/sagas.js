import { authSagas } from './auth';
import { taskSagas } from './containers/Tasks/sagas';


export default function* sagas() {
  yield [
    ...authSagas,
    ...taskSagas
  ];
}
