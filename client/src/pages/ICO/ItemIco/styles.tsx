import { makeStyles } from "@material-ui/core";
import { bgHeaderHome, clTextMainChoose } from "src/constant";

export default makeStyles((theme) => ({
    container: {
        maxWidth: 324,
        margin: 16,
        border: '1px solid yellow',
        padding: 4,
        borderRadius: 8,
        textAlign: 'center',
        justifyContent: 'center'
    },
    imgLogo: {
        maxWidth: 64,
        maxHeight: 64,
        background: "white",
        display: 'flex',
        marginRight: "auto",
        marginLeft: "auto",
        width: "50%",
        backgroundColor: bgHeaderHome
    },
    imgThumb: {
        borderRadius: 8
    },
    imgPackage: {
        border: '1px solid white',
        borderRadius: 8,
        margin: 'auto !important',
        width: "50% !important",
        color: "white",
        fontSize: '18px !important',
    },
    imgAmount: {
        margin: 'auto !important',
        width: "100% !important",
        color: "white",
        marginTop: '16px !important',
        fontSize: '12px !important',
    },
    btnBuyEnable: {
        display: 'flex',
        margin: 'auto !important',
        width: "100% !important",
        marginTop: '16px !important',
        '&.MuiButton-root:hover': {
            backgroundColor: clTextMainChoose,
            color: 'white',
        }
    },
    btnBuyDisable: {
        display: 'flex',
        color: 'white !important',
        margin: 'auto !important',
        width: "100% !important",
        marginTop: '16px !important',
        backgroundColor: 'gray !important',
    },
    modalContainer: {
        display: 'flex',
        justifyContent: 'center !important',
        alignItems: 'center',
    },
    modal: {
        position: 'absolute',
        top: '30%',
        left: '50%',
        width: 400,
        height: 200,
        transform: 'translate(-50%, -50%)',
        backgroundColor: bgHeaderHome,
        border: '2px solid red',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    btnOpenBscScan: {
        display: 'flex',
        position: 'absolute',
        bottom: '10%',
    },
    txtHash: {
        color: clTextMainChoose,
        fontSize: '14px !important',
    }
}))