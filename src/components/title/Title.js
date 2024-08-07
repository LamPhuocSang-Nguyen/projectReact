import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Title() {
  return (
    <Container maxWidth="false" disableGutters>
      <Grid container>
        <Grid item xl={6}>
          <Box
            component="img"
            sx={{
              overflow: "hidden",
              width: "100%",
            }}
            src="https://cdn-tp1.mozu.com/9046-m1/cms/files/082eb4ad-ff20-4b97-bb07-cde8ba0715f2"
            alt="title"
          />
        </Grid>

        <Grid item xl={6} sx={{textAlign:"right"}}>
          <Typography variant="h1" component="h2"
           sx={{ 
            // width: "100%",
            fontSize: "42px", 
            lineHeight: "50px",
            fontWeight: "900", 
            color: "#232323",
            textTransform: "uppercase",
            letterSpacing: "-3px",
            width:"100%",
            display:"block",
            }}>
            THE ORIGINAL GOURMET JELLY BEAN
            <Typography variant="h3" component="h4"
             sx={{
                fontSize: "21px",
                lineHeight: "25px",
                color: "#999898",
                letterSpacing: "-1px",
                maxWidth: "280px",
                width:"100%",
                display:"block",
                }}>
              Everyone has a favourite, come explore all the ways we can
              brighten everyone's day.
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
