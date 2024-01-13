export interface IWalletInfo {
    address: string;
    bnb: number;
}

export interface IRate {
    usdtRate: number,
    bnbRate: number
}

export enum TOKEN {
    BNB = "BNB",
    USDT = "USDT"
}

export interface IItemIco {
    thumb: string,
    logo: string,
    price: number,
    isBnb: boolean
}