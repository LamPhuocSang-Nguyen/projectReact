import React from 'react'
import {Box } from '@mui/material';



export default function Product(props) {

    const {id, flavorName, description, imageUrl} = props;

    return (
        <div>
            {
                <Box component="img" key={id}
                sx={{
                    width: '350px',
                    height: "300px",
                }}
                src={imageUrl}
                alt="candy"
                />
            }
        </div >
    )
}
