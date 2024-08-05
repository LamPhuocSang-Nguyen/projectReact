import React, { useEffect, useState } from 'react'
import {Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';



export default function Product(props) {

    const {id, flavorName, description, imageUrl} = props;

    return (
        <div>
            {
                <Card key={id} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageUrl}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {flavorName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            }
        </div >
    )
}
