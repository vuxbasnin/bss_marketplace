export const AddressType = {
    97: String,
    56: String
}

export const CHAIN_ID = {
    TESTNET: 97,
    MAINNET: 56
}

export default function getChainIdFromEnv() {
    const env = process.env.PUBLIC_CHAIN_ID;
    if (!env) { return 97 };
    return parseInt(env)
};

export const getRPC = () => {
    if (getChainIdFromEnv() === CHAIN_ID.MAINNET)
        return process.env.PUBLIC_RPC_MAINNET;
    return process.env.PUBLIC_RPC_TESTNET;
}

export const SMART_CONTRACT_ADDRESS = {
    CROWD_SALE: {
        97: '0xc0fa1dee29d5169b47b036adc217364cedb578a7',
        56: '',
    },
    USDT: {
        97: '0xE062545592CC02C90F0C3c6120807DD8cA8461E5',
        56: ''
    },
};
