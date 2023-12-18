import { ethers } from 'ethers';

export const convertStringToEther = (balance) => {
    return ethers.utils.formatEther(balance);
};

export const convertStringAddress = (address) => {
    return(address.substr(0, 5) + '...' + address.substr(-5, address.length))
}
