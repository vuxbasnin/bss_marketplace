import { Button } from '@material-ui/core';
import Grid from '@mui/material/Unstable_Grid2';
import useStyles from './style';
import LoginIcon from '@mui/icons-material/Login';

function Header() {
    const classes = useStyles();
    return (
        <Grid className={classes.header} container>
            <Grid className={classes.logo} xs={4}>
                <h3>BSS Marketplace</h3>
            </Grid>

            <Button
                className={classes.btnLogin}
                startIcon={<LoginIcon />}
                xs={2}
                variant="contained"
            >
                Log in
            </Button>
        </Grid>
    );
}

export default Header;
