import { makeStyles } from '@material-ui/core/styles';
import { bgHeaderHome, bgModal } from 'src/constant';

export default makeStyles((theme) => ({
    container: {
        position:'relative'
    },
    gridContainer: {
        alignItems: 'stretch',
        justifyContent: 'space-around',
        marginTop: '36px',
        backgroundColor: bgHeaderHome,
        borderRadius: '8px'
    },
    modalContainer: {
        justifyContent: 'center',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        top: '30%',
        left: '50%'
    },
    modal: {

    },
    btnOpenBscScan: {
        
    }
}));
