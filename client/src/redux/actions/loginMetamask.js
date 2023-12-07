import { createAction } from "redux-actions";

export const loginMetamask = createAction({
    loginMetamaskRequest: undefined,
    loginMetamaskSuccess: (payload) => payload,
    loginMetamaskFailure: (error) => error,
});