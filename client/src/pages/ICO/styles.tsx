import { makeStyles } from '@material-ui/core/styles';
import { bgHeaderHome } from 'src/constant';

export default makeStyles((theme) => ({
    container: {
        position:'relative',
    },
    gridContainer: {
        alignItems: 'stretch',
        justifyContent: 'space-around',
        marginTop: '36px',
        backgroundColor: bgHeaderHome,
        borderRadius: '8px'
    },
}));
