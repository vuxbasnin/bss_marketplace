import { getBssCrowdSaleAbi } from './utils/getAbis';
import { ethers } from 'ethers';
import { BaseInterface } from './interfaces';
import { getRPC } from './utils/common';
import { getBssCrowdSaleAddress } from './utils/getAddress';

export default class CrowdSaleContract extends BaseInterface {
    constructor(provider?: ethers.providers.Web3Provider) {
        const rpcProvider = new ethers.providers.JsonRpcProvider(getRPC());
        console.log(rpcProvider + ' --- ' + getRPC());
        super(
            provider || rpcProvider,
            getBssCrowdSaleAddress(),
            getBssCrowdSaleAbi()
        );
        if (!provider) {
            this._contract = new ethers.Contract(
                this._contractAddress,
                this._abis,
                rpcProvider
            );
        }
    }

    async getBnbRate(): Promise<number> {
        const rate = await this._contract.BNB_rate();
        return this._toNumber(rate);
    }

    async getUsdtRate(): Promise<number> {
        const rate = await this._contract.USDT_rate();
        return this._toNumber(rate);
    }

    async buyTokenByBNB(amount: number) {
        const rate = await this.getBnbRate();
        const tx = await this._contract.buyTokenByBNB({
            ...this._option,
            value: this._numberToEth(amount / rate),
        });
        return this._handleTransactionResponse(tx);
    }

    async buyTokenByUSDT(amount: number) {
        const rate = await this.getUsdtRate();
        const tx = await this._contract.buyTokenByUSDT(
            this._numberToEth(amount / rate),
            this._option
        );
        return this._handleTransactionResponse(tx);
    }
}
