import { makeStyles } from '@material-ui/core/styles';

const bgColor = '#f5b5b5';

export default makeStyles((theme) => ({
    modal: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: bgColor,
        boxShadow: theme.shadows[10],
        outline: 'none',
        borderRadius: 100,
    },
    button: {
        width: '100%',
        height: '100%',
        backgroundColor: bgColor,
        outline: 'none !important',
        padding: theme.spacing(2, 4, 2),
        borderRadius: 100,
    },
}));
