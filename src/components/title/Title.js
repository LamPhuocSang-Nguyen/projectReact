import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Title() {
  return (
    <Container maxWidth="false" disableGutters>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              overflow: "hidden",
              width: "100%",
              height: "auto",
            }}
            src="https://cdn-tp1.mozu.com/9046-m1/cms/files/082eb4ad-ff20-4b97-bb07-cde8ba0715f2"
            alt="title"
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: { xs: "center", md: "right" },
            padding: { xs: "16px", md: "32px" },
          }}
        >
          <Typography
            variant="h1"
            component="h2"
            sx={{
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              lineHeight: { xs: "36px", sm: "44px", md: "50px" },
              fontWeight: "900",
              color: "#232323",
              textTransform: "uppercase",
              letterSpacing: "-2px",
            }}
          >
            THE ORIGINAL GOURMET JELLY BEAN
          </Typography>
          <Typography
            variant="h3"
            component="h4"
            sx={{
              fontSize: { xs: "16px", sm: "18px", md: "21px" },
              lineHeight: { xs: "22px", sm: "24px", md: "25px" },
              color: "#999898",
              letterSpacing: "-1px",
              marginTop: "16px",
              maxWidth: { xs: "100%", md: "280px" },
              marginLeft: { xs: "auto", md: "inherit" },
              marginRight: { xs: "auto", md: "inherit" },
            }}
          >
            Everyone has a favourite, come explore all the ways we can brighten
            everyone's day.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
