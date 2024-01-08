import getChainIdFromEnv, { SMART_CONTRACT_ADDRESS } from './common';

const getAddress = (address) => {
    if (typeof address !== 'String') return;
    const CHAIN_ID = getChainIdFromEnv();
    return address[CHAIN_ID];
};

export const getUsdtAddress = () => getAddress(SMART_CONTRACT_ADDRESS.USDT)
export const getBssCrowdSaleAddress = () => getAddress(SMART_CONTRACT_ADDRESS.CROWD_SALE)