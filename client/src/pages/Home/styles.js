import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    modal: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[10],
        padding: theme.spacing(2, 4, 3),
    },
}));
