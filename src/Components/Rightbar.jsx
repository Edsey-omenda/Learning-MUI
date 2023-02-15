import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react';

const Rightbar = () => {
    return (
        <Box sx={{ 
        display: {xs: "none", sm: "block"}}} 
        flex={2} p={2} >
        <Box position="fixed" >
            <Typography variant="h6" fontWeight="100">
                Online friends
            </Typography>
            <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
            <Avatar alt="Travis Howard" src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
            <Avatar alt="Cindy Baker" src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
            <Avatar alt="Agnes Walker" src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
            <Avatar alt="Trevor Henderson" src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
            <Avatar alt="Trevor Henderson" src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
            <Avatar alt="Trevor Henderson" src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
            </AvatarGroup>
            <Typography variant="h6" fontWeight="100" mt={2} mb={2}>
                Latest photos
            </Typography>
            <ImageList  
            variant="quilted"
            rowHeight={100}
            >
                <ImageListItem sx={{rows: 2,
                cols: 2,}}>
                    <img
                   src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
                   alt='Breakfast'
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                   src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
                   alt='Burger'
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                   src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
                   alt='Camera'
                    />
                </ImageListItem>
                <ImageListItem sx={{ cols: 2}}>
                    <img
                   src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c'
                   alt='Coffee'
                    />
                </ImageListItem>
                {/* <ImageListItem>
                    <img
                   src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'
                   alt='Basketball'
                    />
                </ImageListItem> */}
                {/* <ImageListItem>
                    <img
                   src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f'
                   alt='Fern'
                    />
                </ImageListItem>
                <ImageListItem sx={{rows: 2,
                cols: 2,}}>
                    <img
                   src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25'
                   alt='Mushrooms'
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                   src='https://images.unsplash.com/photo-1567306301408-9b74779a11af'
                   alt='Tomato basil'
                    />
                </ImageListItem>
                <ImageListItem>
                    <img
                   src='https://images.unsplash.com/photo-1471357674240-e1a485acb3e1'
                   alt='Sea star'
                    />
                </ImageListItem>
                <ImageListItem sx={{
                cols: 2}}>
                    <img
                   src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'
                   alt='Bike'
                    />
                </ImageListItem> */}
            </ImageList>
            <Typography variant="h6" fontWeight="100" mt={2}>
                Latest converstions
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" 
          src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard"
           src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" 
          src="https://lh3.googleusercontent.com/a/AEdFTp7bWMdUfulW3MqVLHPh6zoK5BmeqajJjKv0JrPS=s40-p" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
        </Box>
        </Box>
    );
}

export default Rightbar;
