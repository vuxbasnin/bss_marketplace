import * as React from 'react';
import { Container, Grid } from '@mui/material';

import useStyle from './styles';
import { IItemIco, IRate } from '../../_types_';
import CrowdSaleContract from '../../contracts/CrowdSaleContract';
import ItemIco from './ItemIco';

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
        thumb: require("../../asset/images/img_thumb_bnb_ico.jpg"),
        logo: require("../../asset/images/img_bnb_icon.png"),
        price: 1000
    },
    {
        thumb: require("../../asset/images/img_thumb_bnb_ico.jpg"),
        logo: require("../../asset/images/img_bnb_icon.png"),
        price: 2000
    },
    {
        thumb: require("../../asset/images/img_thumb_bnb_ico.jpg"),
        logo: require("../../asset/images/img_bnb_icon.png"),
        price: 3000
    },
    {
        thumb: require("../../asset/images/img_thumb_usdt.jpg"),
        logo: require("../../asset/images/img_usdt_icon.png"),
        price: 1000
    },
    {
        thumb: require("../../asset/images/img_thumb_usdt.jpg"),
        logo: require("../../asset/images/img_usdt_icon.png"),
        price: 2000
    },
    {
        thumb: require("../../asset/images/img_thumb_usdt.jpg"),
        logo: require("../../asset/images/img_usdt_icon.png"),
        price: 3000
    }]

    return (
        <Container maxWidth="lg">
            <Grid container  alignItems="stretch" justifyContent={'space-between'} marginTop={"10px"} bgcolor="#000">
                {listItem.map((item, index) => {
                    return (
                        <Grid item  key={index} >
                            <ItemIco item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
}