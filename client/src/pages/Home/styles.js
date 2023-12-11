import { makeStyles } from '@material-ui/core/styles';

import { bgModal } from '../../constant';

export default makeStyles((theme) => ({
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
