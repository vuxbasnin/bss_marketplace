import { createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction.type;
};

export const getDemo = createActions({
    getDemoRequest: undefined,
    getDemoSuccess: (payload) => payload,
    getDemoFailure: (error) => error,
});