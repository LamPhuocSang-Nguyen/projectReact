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
    <div>
      {/* {
                <Box component="img" key={id}
                sx={{
                    width: '350px',
                    height: "300px",
                }}
                src={imageUrl}
                alt="candy"
                />
            } */}
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <Box
          component="img"
          key={id}
          sx={{ width: "350px", height: "300px" }}
          src={imageUrl}
          alt="candy"
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
        <Typography sx={{ p: 1 }}>{flavorName}</Typography>
      </Popover>
    </div>
  );
}
