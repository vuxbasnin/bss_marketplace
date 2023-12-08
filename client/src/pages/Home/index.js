import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux'
import { Container } from '@material-ui/core';
import { Modal, Box, Button, Typography } from '@material-ui/core';
import WalletIcon from '@mui/icons-material/Wallet';
import { ethers } from 'ethers';

import useStyles from './styles';
import { loginMetamask } from '../../redux/actions/loginMetamask';

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const [open, setOpen] = useState(true);
    const address = useSelector((state) => state.loginMetamask.address)
    const balance = useSelector((state) => state.loginMetamask.balance);

    useEffect(() => {
        dispatch(loginMetamask.loginMetamaskRequest())
     }, [])

    const handlerClose = () => setOpen(false);

    const onClickLogin = () => {
        //Asking if metamask is already present or not
        if (window.ethereum) {
            window.ethereum
                .request({
                    method: 'eth_requestAccounts',
                })
                .then((res) => {
                    console.log(res);
                    getBalance(res[0]);
                });
        } else {
            console.log('Install Metamask extension!');
        }
    };

    const getBalance = (address) => {
        window.ethereum
            .request({
                method: 'eth_getBalance',
                params: [address, 'latest'],
            })
            .then((balance) => {
                setData({
                    address: address,
                    Balance: ethers.utils.formatEther(balance),
                });
                setOpen(false);
            });
    };

    return (
        <Container maxWidth="lg">
            <Modal open={open} onClose={handlerClose}>
                <Box className={classes.modal}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        endIcon={<WalletIcon />}
                        onClick={onClickLogin}
                    >
                        Login with MetaMask
                    </Button>
                </Box>
            </Modal>
            <h1>{address}</h1>
            <h2>{balance}</h2>
        </Container>
    );
}
