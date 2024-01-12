import useStyle from './styles'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { IItemIco } from 'src/_types_';

export default function ItemIco({ item }: { item: IItemIco }) {
    const classes = useStyle()

    return (
        <Card sx={{ maxWidth: 345, margin: "18px"}}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={item.thumb}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
            </CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {item.price}
            </Typography>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
};
