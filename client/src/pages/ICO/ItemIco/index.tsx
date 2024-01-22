import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useSelector, useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import { LoadingButton } from '@mui/lab';
import { Container, Grid, Box, Typography } from '@mui/material';
import { Button, Modal } from '@material-ui/core';

import { IItemIco } from 'src/_types_';
import { bgHeaderHome, clTextMainChoose } from 'src/constant';
import * as utils from '../../../utils';
import { KEY_LOGIN } from '../../../preference'
import useStyle from './styles'
import { loginMetamaskState$ } from '../../../redux/selectors';
import CrowdSaleContract from 'src/contracts/CrowdSaleContract';
import UsdtContract from 'src/contracts/UsdtContract';

declare var window: any;

export default function ItemIco({ item }: { item: IItemIco }) {
    const classes = useStyle()
    const loginResponse = useSelector(loginMetamaskState$);

    const [loginSuccess, setLogin] = React.useState(utils.getSessionsPref(KEY_LOGIN));
    const [web3Provider, setWeb3Provider] = React.useState<ethers.providers.Web3Provider>()
    const [isLoading, setLoading] = React.useState(false)
    const [isOpenModal, setModal] = React.useState(false);
    const [hash, setHash] = React.useState("");

    React.useEffect(() => {
        if (loginResponse.length !== 0 && window.ethereum || loginSuccess) {
            setLogin(true)
            const provider = new ethers.providers.Web3Provider(window.ethereum, undefined)
            console.log("provider", provider);
            setWeb3Provider(provider)
        }
    }, [loginResponse])

    React.useEffect(() => {
        console.log("web3Provider", web3Provider);
    }, [web3Provider])

    const handleBuyIco = async () => {
        if (!web3Provider) return;
        setLoading(true)
        let hash = '';
        const crowdContract = new CrowdSaleContract(web3Provider);
        if (item.isBnb) {
            hash = await crowdContract.buyTokenByBNB(item.price * 1000);
        } else {
            const usdtContract = new UsdtContract(web3Provider);
            await usdtContract.approve(crowdContract._contractAddress, item.price * 100)
            hash = await crowdContract.buyTokenByUSDT(item.price * 1000)
        }
        console.log("hash " + hash + "item bnb " + item.isBnb);
        setHash(hash)
        try {

        } catch (error) {

        }
    }

    const handlerClose = () => {
        setModal(false)
    }

    const handlerOpenModal = () => {
        setModal(true)
    }

    return (
        <Card className={classes.container} sx={{ backgroundColor: bgHeaderHome }}>
            <Modal open={isOpenModal} onClose={handlerClose} className={classes.modalContainer}>
                <Box className={classes.modal} >
                    <Typography variant='body2' className={classes.txtHash}>
                        0x123123asdasd23123asdasd123
                    </Typography>
                    <Button
                        className={classes.btnOpenBscScan}
                        variant="contained"
                        onClick={handlerOpenModal}
                    >
                        View on BscScan
                    </Button>
                </Box>
            </Modal>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.thumb}
                className={classes.imgThumb}
            />
            <CardContent>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image={item.logo}
                    className={classes.imgLogo}
                />
                <Typography variant="h5" marginTop={'16px'} color={'white'}>
                    {item.isBnb ? `BNB PACKAGE 0${item.price}` : `USDT PACKAGE 0${item.price}`}
                </Typography>
            </CardContent>
            <Typography gutterBottom variant="h5" className={classes.imgPackage}>
                {item.price * 1000} BSS
            </Typography>
            <Typography gutterBottom variant="h5" className={classes.imgAmount}>
                {item.isBnb ? `Amount of coins to pay: ${item.price / 10} BNB` : `Amount of coins to pay: ${item.price * 100} USDT`}
            </Typography>
            <CardActions disableSpacing >
                <LoadingButton
                    className={loginSuccess === null ? classes.btnBuyDisable : classes.btnBuyEnable}
                    disableRipple={loginSuccess === null}
                    size="medium"
                    variant='outlined'
                    loading={isLoading}
                    onClick={handlerOpenModal}
                    sx={{ backgroundColor: !isLoading ? '' : clTextMainChoose }}>
                    Buy now
                </LoadingButton>
            </CardActions>
        </Card>
    )
};
