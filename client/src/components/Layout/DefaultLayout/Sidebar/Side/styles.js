import { makeStyles } from '@material-ui/core/styles';

import { bgHeaderHome, clTextMainChoose, bgModal } from '../../../../../constant';

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
        color: clTextMainChoose,
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
    modal: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: bgModal,
        boxShadow: theme.shadows[10],
        outline: 'none',
        borderRadius: 100,
    },
    button: {
        width: '100%',
        height: '100%',
        backgroundColor: bgModal,
        outline: 'none !important',
        padding: theme.spacing(2, 4, 2),
        borderRadius: 100,
    },
}));
