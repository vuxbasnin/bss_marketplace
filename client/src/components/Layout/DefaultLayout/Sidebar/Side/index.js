import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Button } from '@material-ui/core';
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

import useStyles from './style';
import {
    bgHeaderHome,
    clTextMainChoose,
    clTextMainNoChoose,
    clBgHoverItemSidebar,
} from '../../../../../constant';

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

    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

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
                        <MenuIcon />
                    </IconButton>

                    <Button
                        className={classes.btnLogin}
                        startIcon={<LoginIcon />}
                        variant="contained"
                    >
                        Log in
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
                            <ChevronRightIcon sx={{ color: 'white' }} />
                        ) : (
                            <ChevronLeftIcon sx={{ color: 'white' }} />
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
                            }}
                        >
                            <ListItemButton
                                href={linkChildSideBar[text]}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    '&:hover': {
                                        backgroundColor: clBgHoverItemSidebar,
                                        color: clTextMainChoose,
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: clTextMainNoChoose,
                                    }}
                                >
                                    {index === 0 ? <HomeIcon /> : null}
                                    {index === 1 ? <MarketplaceIcon /> : null}
                                    {index === 2 ? <EventsIcon /> : null}
                                </ListItemIcon>
                                <ListItemText
                                    primary={text}
                                    sx={{ opacity: open ? 1 : 0 }}
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
                            sx={{ display: 'block' }}
                        >
                            {index === 0 || index === 1 ? <Divider /> : null}
                            <ListItemButton
                                href={linkContactSideBar[text]}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                    color: clTextMainNoChoose,
                                    '&:hover': {
                                        backgroundColor: clBgHoverItemSidebar,
                                        color: clTextMainChoose,
                                    },
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: clTextMainNoChoose,
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
                                    sx={{ opacity: open ? 1 : 0 }}
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
