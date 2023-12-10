import React, { useState, useEffect, useCallback } from 'react';
import { Container } from '@material-ui/core';
import { Modal, Box, Button } from '@material-ui/core';
import WalletIcon from '@mui/icons-material/Wallet';
import { ethers } from 'ethers';
import { useSelector, useDispatch } from 'react-redux';

import { loginMetamaskState$ } from '../../redux/selectors/index';
import useStyles from './styles';
import { loginMetamask } from '../../redux/actions/loginMetamask';
import { convertStringToEther } from '../../utils';

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(true);
    const loginResponse = useSelector(loginMetamaskState$);
    console.log(loginResponse);

    const handlerClose = () => setOpen(false);

    const onClickLogin = useCallback(() => {
        dispatch(loginMetamask.loginMetamaskRequest());
        setOpen(false);
    }, [dispatch]);

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
            <h1>{loginResponse.address}</h1>
            <h2>{loginResponse.balance}</h2>
        </Container>
    );
}
