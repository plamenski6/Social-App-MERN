import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'

import memories from './images/memories.png'

const App = () => {
    return (
        <Container maxWidth='lg'>
            <AppBar position='static' color='inherit'>
                <Typography variant='h2' align='center'>
                    Social App
                </Typography>
                <img src={memories} alt='memories' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify='space-between' alignItems='stretch' spacing={3}>

                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App