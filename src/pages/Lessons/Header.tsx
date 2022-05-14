import {
    AppBar,
    IconButton,
    Stack,
    Toolbar,
    Typography,
  } from "@mui/material";
  import MenuIcon from "@mui/icons-material/Menu";
  import React from "react";
  
  type Props = {};
  
  const LessonsHeader: React.FC<Props> = () => {
    return (
      <AppBar position="static">
        <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{flexGrow: 1}}
        >
          <Typography variant="h6" component="div">
            Уроки
          </Typography>
          <IconButton size="large" edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Stack>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default LessonsHeader;