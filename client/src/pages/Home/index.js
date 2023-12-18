import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Container } from '@material-ui/core';
import { Modal, Box, Button } from '@material-ui/core';
import WalletIcon from '@mui/icons-material/Wallet';
import MenuIcon from '@mui/icons-material/Menu';
import { ethers } from 'ethers';
import { useSelector, useDispatch } from 'react-redux';

import { loginMetamaskState$ } from '../../redux/selectors/index';
import useStyles from './styles';
import { loginMetamask } from '../../redux/actions/loginMetamask';
import { convertStringToEther } from '../../utils';
import { KEY_FIRST_LOGIN, KEY_LOGIN } from '../../preference';

export default function Home() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isLogin = localStorage.getItem(KEY_LOGIN, 'false');
    const isFirstLogin = localStorage.getItem(KEY_FIRST_LOGIN, 'true');
    const loginResponse = useSelector(loginMetamaskState$);
    const [open, setOpen] = useState(true);

    const handleLogin = useCallback(() => {
        dispatch(loginMetamask.loginMetamaskRequest());
        if (open) setOpen(false);
    }, [dispatch, open]);

    useEffect(() => {
        if (loginResponse.length !== 0) {
            localStorage.setItem(KEY_LOGIN, 'true');
        }
        window.ethereum.on('accountsChanged', handleLogin);
        return () => {
            window.ethereum.removeListener('accountsChanged', handleLogin);
        };
    }, [handleLogin, loginResponse]);

    const handlerClose = () => {
        setOpen(false);
        localStorage.setItem(KEY_FIRST_LOGIN, false);
    };

    return (
        <Container maxWidth="lg">
            (
            {isLogin === 'false' && isFirstLogin === 'true' && (
                <Modal open={open} onClose={handlerClose}>
                    <Box className={classes.modal}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            endIcon={<WalletIcon />}
                            onClick={handleLogin}
                        >
                            Login with MetaMask
                        </Button>
                    </Box>
                </Modal>
            )}
            )<h1>{loginResponse.address}</h1>
            <h2>{loginResponse.balance}</h2>
        </Container>
    );
}
