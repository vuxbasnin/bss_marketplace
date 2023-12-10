import { ethers } from 'ethers';

export const convertStringToEther = (balance) => {
    return ethers.utils.formatEther(balance);
};
