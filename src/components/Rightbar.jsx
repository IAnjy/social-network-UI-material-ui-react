import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar alt="IAnjy Martial" src="/image/ianjy.jpg" />
          <Avatar alt="IAnjy Martial" src="/image/ianjy.jpg" />
          <Avatar alt="IAnjy Martial" src="" />
          <Avatar alt="IAnjy Martial" src="/image/ianjy.jpg" />
          <Avatar alt="IAnjy Martial" src="" />
          <Avatar alt="IAnjy Martial" src="/image/ianjy.jpg" />
          <Avatar alt="IAnjy Martial" src="/image/ianjy.jpg" />
          <Avatar alt="IAnjy Martial" src="/image/ianjy.jpg" />
          <Avatar alt="IAnjy Martial" src="/image/ianjy.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="/image/ianjy.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/image/paris.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img src="/image/ianjy.jpg" alt="" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'Background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Zazah Martial" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Zazah Martial"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Maitre be le Haaland a? ain Pep tsara ny mitondra anazy{' '}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Ianjy Martial" src="/image/ianjy.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="IAnjy Martial"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {' '}
                    ahona? andeh irevy ihany ve zoma e ?{' '}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Martial Andrihertse" src="" />
            </ListItemAvatar>
            <ListItemText
              primary="Martial Andrihertse"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {' '}
                    to Scott, Alex, Jennifer - Wish I could come, but I'm out of
                    town this...
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
