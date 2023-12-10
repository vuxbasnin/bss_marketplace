import { createActions } from "redux-actions";

export const loginMetamask = createActions({
    loginMetamaskRequest: undefined,
    loginMetamaskSuccess: (payload) => payload,
    loginMetamaskFailure: (error) => error,
});