import {
    PUBLIC_CHAIN_ID,
    PUBLIC_RPC_MAINNET,
    PUBLIC_RPC_TESTNET,
} from '../../constant';

export type AddressType = {
    97: string;
    56: string;
};

export const CHAIN_ID = {
    TESTNET: 97,
    MAINNET: 56,
};

export default function getChainIdFromEnv(): number {
    const env = PUBLIC_CHAIN_ID;
    if (!env) {
        return 97;
    }
    return env;
}

export const getRPC = () => {
    console.log(getChainIdFromEnv() + ' --- ' + PUBLIC_RPC_TESTNET);
    if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
        return PUBLIC_RPC_MAINNET;
    return PUBLIC_RPC_TESTNET;
};

export const SMART_CONTRACT_ADDRESS = {
    CROWD_SALE: {
        97: '0xb3D6307f86b78057d2814b895E8f1D86001794b0',
        56: '',
    },
    USDT: {
        97: '0xE062545592CC02C90F0C3c6120807DD8cA8461E5',
        56: '',
    },
    NFT: {
        97: '0xbEafbb18140b37f56614e1821B23e0ef4b94bD62',
        56: '',
    },
    MARKETPLACE: {
        97: '0x8EC898bA95C0c680c2113B7fD5D94046CC757355',
        56: '',
    },
};
