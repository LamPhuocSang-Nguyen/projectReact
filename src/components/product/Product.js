import React from "react";
import { Box } from "@mui/material";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

export default function Product(props) {
  const { id, flavorName, description, imageUrl } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Box
          component="img"
          key={id}
          sx={{
            width: {
              xs: "100%", // 100% width on extra small screens (mobile)
              sm: "200px", // 200px width on small screens (tablet)
              md: "250px", // 250px width on medium screens (small laptops)
              lg: "290px", // 290px width on large screens (desktops)
            },
            height: "auto", // Maintain aspect ratio
            maxHeight: "300px", // Max height for larger screens
          }}
          src={imageUrl}
          alt={flavorName}
        />
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        disableScrollLock
      >
        <Typography sx={{ p: 1, fontSize: "14px" }}>{flavorName}</Typography>
      </Popover>
    </Box>
  );
}
