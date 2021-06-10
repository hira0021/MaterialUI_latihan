import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
    typographyStyle: {
        flex: 1
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <MenuIcon/>
                <Typography className={classes.typographyStyle}>This is our Header</Typography>
                <AcUnitIcon/>
            </Toolbar>
        </AppBar>
    )
}

export default Header;