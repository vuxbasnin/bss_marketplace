import { makeStyles } from "@material-ui/core";
import { bgHeaderHome } from "src/constant";

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
    btnBuy: {
        display: 'flex',
        margin: 'auto !important',
        width: "100% !important",
    },
}))