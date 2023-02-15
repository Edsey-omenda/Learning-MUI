import { Mail, Notifications, Pets} from '@mui/icons-material';
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const Search = styled("div")(({theme}) =>({
    backgroundColor: "white",
    p: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "30%"
}));

const Icons = styled(Box)(({theme}) =>({
    display: "none",
    alignItems: "center",
     gap: "20px",
     [theme.breakpoints.up("sm")]:{
        display: "flex"
     }
}));

const UserBox = styled(Box)(({theme}) =>({
    display: "flex",
     alignItems: "center",
      gap: "10px",
      [theme.breakpoints.up("sm")]:{
        display: "none"
     }
}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant="h6"
                 sx={{display: {xs: "none", sm: "block"}}}>
                MY MUI
                </Typography>
                <Pets sx={{display: {xs: "block", sm: "none"}}}/>
                <Search><InputBase placeholder="search..." /></Search>
                <Icons>
                <Badge badgeContent={4} color="error">
                <Mail/>
                </Badge>
                <Badge badgeContent={2} color="error">
                <Notifications/>
                </Badge>
                <Avatar alt="James Omenda" 
                sx={{width: 30, height: 30}} 
                src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" 
                onClick={e=> setOpen(true)}/>
                </Icons>
                <UserBox  onClick={e=> setOpen(true)}>
                <Avatar alt="James Omenda" 
                sx={{width: 30, height: 30}} 
                src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" 
               />
                <Typography>
                    James Omenda
                </Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
        </AppBar>
    );
}

export default Navbar;




