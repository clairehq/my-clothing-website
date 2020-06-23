import { UserActionTypes } from './user.types';

/* An action will be create and a flow will start */
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})