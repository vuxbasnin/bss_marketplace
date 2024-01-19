import * as React from 'react';
import { Container, Grid, Box } from '@mui/material';
import { Button, Modal } from '@material-ui/core';

import useStyle from './styles';
import { IItemIco, IRate } from '../../_types_';
import CrowdSaleContract from '../../contracts/CrowdSaleContract';
import ItemIco from './ItemIco';

export default function ICO() {
    const classes = useStyle();
    const [rate, setRate] = React.useState<IRate>({ usdtRate: 0, bnbRate: 0 });
    const [isOpenModal, setModal] = React.useState(true);

    const getRate = React.useCallback(async () => {
        const crowdSaleContract = new CrowdSaleContract();
        const bnbRate = await crowdSaleContract.getBnbRate();
        const usdtRate = await crowdSaleContract.getUsdtRate();
        console.log({ bnbRate, usdtRate });
        setRate({ usdtRate, bnbRate })
    }, [])

    const handlerClose = () => {

    }

    const handleLogin = () => {

    }

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
        <Container maxWidth="lg" fixed className={classes.container}>
            <Modal open={isOpenModal} onClose={handlerClose} className={classes.modalContainer}>
                <Box >
                    <Button
                        className={classes.btnOpenBscScan}
                        variant="contained"
                        onClick={handleLogin}
                    >
                        View on BscScan
                    </Button>
                </Box>
            </Modal>
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