import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import { Button, Modal, Container } from '@material-ui/core';
import WalletIcon from '@mui/icons-material/Wallet';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Grid from '@mui/material/Unstable_Grid2';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import MarketplaceIcon from '@mui/icons-material/LocalGroceryStore';
import EventsIcon from '@mui/icons-material/EmojiEvents';
import LogoutIcon from '@mui/icons-material/Logout';

import useStyles from './styles';
import {
    bgHeaderHome,
    clTextMainChoose,
    clTextMainNoChoose,
    clBgHoverItemSidebar,
} from '../../../../../constant';
import { loginMetamaskState$ } from '../../../../../redux/selectors';
import { loginMetamask } from '../../../../../redux/actions/loginMetamask';
import { KEY_ADDRESS, KEY_LOGIN } from '../../../../../preference';
import { convertStringAddress, getPref, getSessionsPref, setPref, setSessionsPref } from '../../../../../utils';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
}));

const linkChildSideBar = {
    Home: '/',
    Marketplace: '/marketplace',
    Events: '/events',
};

const listChildSideBar = ['Home', 'Marketplace', 'Events'];

const linkContactSideBar = {
    'Support Center': '/support-center',
    'Follow Us': '/follow-us',
    'Join Our Community': '/join-us-community',
};

const listContactSideBar = [
    'Support Center',
    'Follow Us',
    'Join Our Community',
];

function Side() {
    const theme = useTheme();
    const classes = useStyles();
    const dispatch = useDispatch();
    const loginResponse = useSelector(loginMetamaskState$);
    const [open, setOpen] = React.useState(true);
    const [openModal, setOpenModal] = React.useState(false);
    const [loginSuccess, setLoginSuccess] = React.useState(getSessionsPref(KEY_LOGIN));
    const [userAddress, setUserAddress] = React.useState(
        getSessionsPref(KEY_ADDRESS)
    );

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    console.log(loginSuccess);

    const handleLogin = React.useCallback(() => {
        dispatch(loginMetamask.loginMetamaskRequest());
        if (openModal) setOpenModal(false);
    }, [dispatch, openModal]);

    const handleClickButtonLogin = () => {
        if (loginSuccess) return;
        setOpenModal(true);
    };

    const handlerClose = () => {
        setOpenModal(false);
    };

    React.useEffect(() => {
        if (loginResponse.length !== 0) {
            setSessionsPref(KEY_LOGIN, true);
            setSessionsPref(KEY_ADDRESS, loginResponse.address);
            setLoginSuccess(true);
            setUserAddress(loginResponse.address);
        }
        window.ethereum.on('accountsChanged', handleLogin);
        return () => {
            window.ethereum.removeListener('accountsChanged', handleLogin);
        };
    }, [handleLogin, loginResponse]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Container maxWidth="lg">
                <Modal children open={openModal} onClose={handlerClose}>
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
            </Container>

            <AppBar position="fixed" open={open}>
                <Toolbar className={classes.header}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon sx={{ color: clTextMainChoose }} />
                    </IconButton>

                    <Button
                        className={classes.btnLogin}
                        startIcon={!loginSuccess ? <LoginIcon /> : null}
                        endIcon={loginSuccess ? <LogoutIcon /> : null}
                        variant="contained"
                        onClick={handleClickButtonLogin}
                    >
                        {!loginSuccess
                            ? 'Login'
                            : convertStringAddress(
                                  String(userAddress || loginResponse.address)
                              )}
                    </Button>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                open={open}
                sx={{
                    '& .MuiPaper-root': {
                        background: bgHeaderHome,
                    },
                }}
            >
                <DrawerHeader>
                    <Grid className={classes.logo}>
                        <h3>BSS Marketplace</h3>
                    </Grid>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? (
                            <ChevronRightIcon
                                sx={{ color: clTextMainChoose }}
                            />
                        ) : (
                            <ChevronLeftIcon sx={{ color: clTextMainChoose }} />
                        )}
                    </IconButton>
                </DrawerHeader>
                <List>
                    {listChildSideBar.map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{
                                display: 'block',
                                color: clTextMainNoChoose,
                                '&:hover': {
                                    backgroundColor: clBgHoverItemSidebar,
                                    color: clTextMainChoose,
                                },
                            }}
                        >
                            <ListItemButton
                                href={linkChildSideBar[text]}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    color: 'inherit',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: 'inherit',
                                    }}
                                >
                                    {index === 0 ? <HomeIcon /> : null}
                                    {index === 1 ? <MarketplaceIcon /> : null}
                                    {index === 2 ? <EventsIcon /> : null}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        color: 'inherit',
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <List
                    sx={{
                        position: 'absolute',
                        left: 0,
                        bottom: 0,
                    }}
                >
                    {listContactSideBar.map((text, index) => (
                        <ListItem
                            key={text}
                            disablePadding
                            sx={{
                                display: 'block',
                                color: clTextMainNoChoose,
                                '&:hover': {
                                    backgroundColor:
                                        clBgHoverItemSidebar + '!important',
                                    color: clTextMainChoose + '!important',
                                },
                            }}
                        >
                            {index === 0 || index === 1 ? (
                                <Divider sx={{ backgroundColor: '#434543' }} />
                            ) : null}
                            <ListItemButton
                                href={linkContactSideBar[text]}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    color: 'inherit',
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: 'inherit',
                                    }}
                                >
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{
                                        opacity: open ? 1 : 0,
                                        color: 'inherit',
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
        </Box>
    );
}

export default Side;
