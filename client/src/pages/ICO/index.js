import { Box, Grid, Paper, styled } from '@material-ui/core';
import useStyle from './styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ICO() {
    const classes = useStyle();
    return (
        <Box m={10}>
            <h1>ICO</h1>
        </Box>
    );
}
