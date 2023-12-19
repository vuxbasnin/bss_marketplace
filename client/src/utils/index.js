import { ethers } from 'ethers';

export const getPref = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

export const setPref = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getSessionsPref = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
};

export const setSessionsPref = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
};

export const convertStringToEther = (balance) => {
    return ethers.utils.formatEther(balance);
};

export const convertStringAddress = (address) => {
    return address.substr(0, 5) + '...' + address.substr(-5, address.length);
};
