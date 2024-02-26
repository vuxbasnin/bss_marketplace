export interface IWalletInfo {
    address: string;
    bnb: number;
}

export interface IRate {
    usdtRate: number;
    bnbRate: number;
}

export enum TOKEN {
    BNB = 'BNB',
    USDT = 'USDT',
}

export interface IItemIco {
    thumb: string;
    logo: string;
    price: number;
    isBnb: boolean;
    rate: number;
}

export interface IAttribute {
    trait_type: string;
    value: string | number;
}

export interface INFTItem {
    id: number;
    name?: string;
    description?: string;
    image: string;
    attribute?: IAttribute[];
    price?: number;
    author?: string;
}
