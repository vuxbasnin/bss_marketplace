import { makeStyles } from '@material-ui/core/styles';

import { bgHeaderHome } from '../../../../../constant';

export default makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: bgHeaderHome,
        alignItems: 'center',
    },
    iconMenu: {
        display: 'flex',
        position: 'absolute',
    },
    logo: {
        position: 'relative',
        color: 'black',
        alignItems: 'center',
        marginLeft: 20,
    },
    btnLogin: {
        position: 'absolute',
        right: 0,
        margin: theme.spacing(2, 4, 2),
        backgroundImage: 'linear-gradient(to right, #FAA442, #EB6F3A)',
        borderRadius: 10,
        color: 'white',
        textTransform: 'none',
        '&:hover': {
            backgroundImage: 'linear-gradient(to right, #EB6F3A, #EB6F3A)',
        },
    },
}));
