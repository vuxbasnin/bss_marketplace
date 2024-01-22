import { makeStyles } from "@material-ui/core";
import { bgHeaderHome, clBgHoverItemSidebar, clTextMainChoose } from "src/constant";

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
        pointerEvents: 'none',
    },
    btnViewBscScan: {
        display: 'flex',
        margin: 'auto !important',
        width: "50% !important",
        marginTop: '16px !important',
        color: 'white !important',
        backgroundColor: clTextMainChoose,
        '&.MuiButton-root:hover': {
            backgroundColor: clTextMainChoose,
            color: 'white',
        }
    },
    icCancel: {
        position: 'absolute',
        top: '20px',
        right: '20px',
        color: clTextMainChoose
    }
}))