import React from "react";
import { Container, Grid, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Container maxWidth="false" disableGutters
      sx={{
        width: "100%",
        backgroundColor: "#252525",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="false" disableGutters>
        <Grid container justifyContent="flex-end">
          <Grid item xs={12} xl={3} sx={{color:"#fff", fontSize:"12px", fontFamily:"merel,sans-serif", marginBottom:"30px"}}>
            <Typography variant="h5" sx={{marginBottom:"20px"}}>ABOUT JELLY BELLY</Typography>
            <Typography sx={{marginBottom:"20px"}}>Principles & Practices</Typography>
            <Typography sx={{marginBottom:"20px"}}>Terms of Use</Typography>
            <Typography sx={{marginBottom:"20px"}}>Privacy Policy</Typography>
          </Grid>
          <Grid item xs={12} xl={3} sx={{color:"#fff", fontSize:"12px", fontFamily:"merel,sans-serif", marginBottom:"30px"}}>
            <Typography variant="subtitle1" sx={{marginBottom:"20px"}}>GOT QUESTIONS?</Typography>
            <Typography sx={{marginBottom:"20px"}}>Contact Us</Typography>
            <Typography sx={{marginBottom:"20px"}}>FAQ</Typography>
          </Grid>
          <Grid item xs={12} xl={3} sx={{color:"#fff", fontSize:"12px", fontFamily:"merel,sans-serif", marginBottom:"30px"}}>
            <Typography variant="h5" sx={{marginBottom:"20px"}}>FIND US</Typography>
            <Typography sx={{marginBottom:"20px"}}>Facebook</Typography>
            <Typography sx={{marginBottom:"20px"}}>YouTube</Typography>
            <Typography sx={{marginBottom:"20px"}}>Pinterest</Typography>
            <Typography sx={{marginBottom:"20px"}}>Instagram</Typography>
            <Typography sx={{marginBottom:"20px"}}>LinkedIn</Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center">
          <Grid item xs={12} xl ={12}>
            <Typography sx={{textAlign:"center", color:"#fff", fontSize:"12px", fontFamily:"merel,sans-serif"}}>Created by Nguyen Lam Phuoc Sang</Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};