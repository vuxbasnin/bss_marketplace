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
        setRate({ usdtRate, bnbRate })
    }, [])

    React.useEffect(() => {
        getRate()
    }, [getRate])

    let listItem: Array<IItemIco> = [];

    for (let i = 0; i < 6; i++) {
        if (i <= 2) {
            listItem.push({
                thumb: require("../../asset/images/img_thumb_bnb_ico.jpg"),
                logo: require("../../asset/images/img_bnb_icon.png"),
                price: (i + 1),
                isBnb: true,
                rate: rate.bnbRate
            });
        } else {
            listItem.push({
                thumb: require("../../asset/images/img_thumb_usdt.jpg"),
                logo: require("../../asset/images/img_usdt_icon.png"),
                price: (i - 2),
                isBnb: false,
                rate: rate.usdtRate
            });
        }
    }

    return (
        <Container maxWidth="lg" fixed>
            <Grid container className={classes.gridContainer}>
                {listItem.map((item, index) => {
                    return (
                        <Grid item key={index} >
                            <ItemIco item={item} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
}