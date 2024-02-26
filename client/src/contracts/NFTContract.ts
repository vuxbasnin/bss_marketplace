import { BigNumber, ethers, providers } from 'ethers';
import Erc721 from './interfaces/Erc721Interface';
import { getRPC } from './utils/common';
import { getNFTAddress } from './utils/getAddress';
import { getNFTAbi } from './utils/getAbis';
import { INFTItem } from 'src/_types_';

export default class NFTContract extends Erc721 {
    constructor(provider?: ethers.providers.Web3Provider) {
        const rpcProvider = new ethers.providers.JsonRpcProvider(getRPC());
        super(provider || rpcProvider, getNFTAddress(), getNFTAbi());
        if (!provider) {
            this._contract = new ethers.Contract(
                this._contractAddress,
                this._abis,
                rpcProvider
            );
        }
    }

    private listTokenIds = async (address: string) => {
        const urls: BigNumber[] = await this._contract.listTokenIds(address);
        const ids = urls.map((id) => this._toNumber(id));
        return ids;
    };

    getListNFT = async (address: string): Promise<INFTItem[]> => {
        const ids = await this.listTokenIds(address);
        return Promise.all(
            ids.map(async (id) => {
                const tokenUrl = await this._contract.tokenURI(id);
                const obj = await (await fetch(tokenUrl)).json();
                const item: INFTItem = { ...obj, id };
                return item;
            })
        );
    };

    getNFTInfo = async (nfts: Array<any>) => {
        return Promise.all(
            nfts.map(async (o: any) => {
                const tokenUrl = await this._contract.tokenURI(o.tokenId);
                const obj = await (await fetch(tokenUrl)).json();
                const item: INFTItem = {
                    ...obj,
                    id: o.tokenId,
                    author: o.author,
                    price: o.price,
                };
                return item;
            })
        );
    };
}
