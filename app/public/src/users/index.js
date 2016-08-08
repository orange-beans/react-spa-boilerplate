import _UserList from './UserList.jsx';
import _UserListContainer from './UserListContainer.jsx';

import reducer from './reducer';
import * as actions from './actions';

export class UserList extends _UserList {}
export class UserListContainer extends _UserListContainer {}

console.log(actions.USER_FETCH_SUCCESS);

export default { reducer, actions };
