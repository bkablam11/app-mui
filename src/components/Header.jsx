import { Badge, Divider, IconButton, makeStyles, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//import classes from "*.module.css";
// import "./module.css";

// const useStyles = makeStyles((theme) => ({
//     title: {
//         flexGrow: 1,
//     },
// }));

const Header = () => {
    //const classes = useStyles();
    return (
        <div>
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon></MenuIcon>
                </IconButton>
                <Typography
                    variant="h6"
                //className={classes.title}
                >Blogging Website
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <NotificationsIcon></NotificationsIcon>
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <AccountCircleIcon></AccountCircleIcon>
                </IconButton>

            </Toolbar>

            <Divider>
            </Divider>
            <Toolbar
            //className={classes.tagline}
            >
                Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.

            </Toolbar>
        </div>
    )
}

export default Header
