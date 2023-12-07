import React, { useState, useCallback } from 'react';
import { Container, Fab } from '@material-ui/core';
import { Modal, Box, Typography } from '@material-ui/core';

import useStyles from './styles'

export default function Home() {
    const classes = useStyles()
    const [open, setOpen] = useState(true);
    const handlerClose = () => setOpen(false);

    return (
        <Container maxWidth="lg">
            <Modal open={open} onClose={handlerClose}>
                <Box className={classes.modal}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                    </Typography>
                </Box>
            </Modal>
        </Container>
    );
}
