import useStyle from './styles'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IItemIco } from 'src/_types_';
import { Box } from '@material-ui/core';
import { bgHeaderHome } from 'src/constant';

export default function ItemIco({ item }: { item: IItemIco }) {
    const classes = useStyle()

    return (
        <Card className={classes.container} sx={{ backgroundColor: bgHeaderHome }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.thumb}
                className={classes.imgThumb}
            />
            <CardContent>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    image={item.logo}
                    className={classes.imgLogo}
                />
                <Typography variant="h5" marginTop={'16px'} color={'white'}>
                    {item.isBnb ? `BNB PACKAGE 0${item.price / 1000}` : `USDT PACKAGE 0${item.price / 1000}`}
                </Typography>
            </CardContent>
            <Typography gutterBottom variant="h5" className={classes.imgPackage}>
                {item.price} BSS
            </Typography>
            <CardActions disableSpacing className={classes.btnBuy}>
                <Button sx={{width: '100%'}} size="medium" variant='contained'>Buy now</Button>
            </CardActions>
        </Card>
    )
};
