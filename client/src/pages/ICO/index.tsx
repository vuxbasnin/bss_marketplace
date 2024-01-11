
import Box from '@mui/system/Box';
import * as React from 'react';

import useStyle from './styles';
import { IItemIco, IRate } from '../../_types_';
import CrowdSaleContract from '../../contracts/CrowdSaleContract';
import ItemIco from './ItemIco';
import Grid from '@mui/material/Grid';

export default function ICO() {
    const classes = useStyle();
    const [rate, setRate] = React.useState<IRate>({ usdtRate: 0, bnbRate: 0 });

    const getRate = React.useCallback(async () => {
        const crowdSaleContract = new CrowdSaleContract();
        const bnbRate = await crowdSaleContract.getBnbRate();
        const usdtRate = await crowdSaleContract.getUsdtRate();
        console.log({ bnbRate, usdtRate });
        setRate({ usdtRate, bnbRate })
    }, [])

    React.useEffect(() => {
        getRate()
    }, [getRate])



    const listItem: Array<IItemIco> = [{
        thumb: "/client/src/asset/images/img_thumb_bnb_ico.jpg",
        logo: "/client/src/asset/images/img_bnb_icon.png",
    },
    {
        thumb: "/client/src/asset/images/img_thumb_bnb_ico.jpg",
        logo: "/client/src/asset/images/img_bnb_icon.png",
    },
    {
        thumb: "/client/src/asset/images/img_thumb_bnb_ico.jpg",
        logo: "/client/src/asset/images/img_bnb_icon.png",
    },
    {
        thumb: "/client/src/asset/images/img_thumb_usdt.jpg",
        logo: "/client/src/asset/images/img_usdt_icon.png"
    },
    {
        thumb: "/client/src/asset/images/img_thumb_usdt.jpg",
        logo: "/client/src/asset/images/img_usdt_icon.png"
    },
    {
        thumb: "/client/src/asset/images/img_thumb_usdt.jpg",
        logo: "/client/src/asset/images/img_usdt_icon.png"
    }]

    return (
        <Grid className={classes.box} container spacing={{ xs: 4, md: 6 }} columns={{ xs: 4, sm: 8, md: 12 }} >

        </Grid>
    );
}
