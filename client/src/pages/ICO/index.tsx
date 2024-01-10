import useStyle from './styles';
import Box from '@mui/system/Box';
import * as React from 'react';
import { IRate } from '../../interfaces';
import CrowdSaleContract from '../../contracts/CrowdSaleContract';

export default function ICO() {
    const classes = useStyle();
    const [rate, setRate] = React.useState<IRate>({ usdtRate: 0, bnbRate: 0 });

    console.log(process.env.PUBLIC_CHAIN_ID);
    

    const getRate = React.useCallback(async () => {
        const crowdSaleContract = new CrowdSaleContract();
        const bnbRate = await crowdSaleContract.getBnbRate();
        const usdtRate = await crowdSaleContract.getUsdtRate();
        console.log({bnbRate, usdtRate});
        setRate({usdtRate, bnbRate})
    }, [])

    React.useEffect(() => {
        getRate()
    }, [getRate])

    return (
        <Box m={10}>
            <h1>ICO</h1>
            <h1>USDT rate {rate.usdtRate}</h1>
            <h1>BNB rate {rate.bnbRate}</h1>
        </Box>
    );
}
