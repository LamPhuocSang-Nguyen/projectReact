import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';


export default function Title() {
    return (
        <Container maxWidth="false" disableGutters>
            <Box maxWidth="false" disableGutters
                component="img"
                sx={{
                    overflow: 'hidden',
                    width: '100%',
                }}
                src='https://cdn-tp1.mozu.com/9046-m1/cms/files/082eb4ad-ff20-4b97-bb07-cde8ba0715f2'
                alt="title" />
        </Container>
    )
}
