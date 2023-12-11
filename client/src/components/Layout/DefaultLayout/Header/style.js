import { makeStyles } from '@material-ui/core/styles';

import { bgHeaderHome } from '../../../../constant';

export default makeStyles((theme) => ({
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: bgHeaderHome,
    },
    logo: {
        position: 'relative',
        color: 'white',
        justifyContent: 'center',
    },
    btnLogin: {
        position: 'relative',
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
