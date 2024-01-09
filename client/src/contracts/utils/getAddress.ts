import getChainIdFromEnv, { AddressType, SMART_CONTRACT_ADDRESS } from './common';

const getAddress = (address: AddressType) => {
    const CHAIN_ID = getChainIdFromEnv() as keyof AddressType;
    return address[CHAIN_ID];
};

export const getUsdtAddress = () => getAddress(SMART_CONTRACT_ADDRESS.USDT)
export const getBssCrowdSaleAddress = () => getAddress(SMART_CONTRACT_ADDRESS.CROWD_SALE)