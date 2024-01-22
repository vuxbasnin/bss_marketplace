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
import CancelIcon from '@mui/icons-material/Cancel';

import { IItemIco } from 'src/_types_';
import { bgHeaderHome, clTextMainChoose } from 'src/constant';
import * as utils from '../../../utils';
import { KEY_LOGIN } from '../../../preference'
import useStyle from './styles'
import { loginMetamaskState$ } from '../../../redux/selectors';
import CrowdSaleContract from 'src/contracts/CrowdSaleContract';
import UsdtContract from 'src/contracts/UsdtContract';
import getChainIdFromEnv from 'src/contracts/utils/common';

declare var window: any;

export default function ItemIco({ item }: { item: IItemIco }) {
    const classes = useStyle()
    const loginResponse = useSelector(loginMetamaskState$);

    const [loginSuccess, setLogin] = React.useState(utils.getSessionsPref(KEY_LOGIN));
    const [web3Provider, setWeb3Provider] = React.useState<ethers.providers.Web3Provider>()
    const [isLoading, setLoading] = React.useState(false)
    const [isOpenModal, setModal] = React.useState(false);
    const [hash, setHash] = React.useState('');

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
        try {
            if (hash !== '') {
                setHash(hash)
                setLoading(false)
                setModal(true)
            }
        } catch (error) {

        }
    }

    const handleClickClose = () => {
        setModal(false)
    }

    const handleClickViewInBscScan = () => {
        try {
            if (getChainIdFromEnv() === 97) {
                window.open(`https://testnet.bscscan.com/tx/${hash}`)
            } else {
                window.open(`https://bscscan.com/tx/${hash}`)
            }
        } catch (error) {
            
        }
    }

    const modalStyles = {
        position: 'absolute' as 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: bgHeaderHome,
        border: '2px solid yellow',
        boxShadow: 24,
        p: 4,
        color: clTextMainChoose,
        wordBreak: 'break-word',
        borderRadius: '8px',
    }

    return (
        <Card className={classes.container} sx={{ backgroundColor: bgHeaderHome }}>
            <Modal
                open={isOpenModal}
                onClose={handleClickClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyles}>
                    <Button endIcon={<CancelIcon />} className={classes.icCancel} onClick={handleClickClose}>

                    </Button>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Transaction hash:
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {hash}
                    </Typography>
                    <Button className={classes.btnViewBscScan} onClick={handleClickViewInBscScan}>
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
                    className={loginSuccess === null ? (classes.btnBuyDisable) : classes.btnBuyEnable}
                    disableRipple={loginSuccess === null}
                    size="medium"
                    variant='outlined'
                    loading={isLoading}
                    onClick={handleBuyIco}
                    sx={{ backgroundColor: !isLoading ? '' : clTextMainChoose }}>
                    Buy now
                </LoadingButton>
            </CardActions>
        </Card>
    )
};
