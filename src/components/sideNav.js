import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Typography from '@material-ui/core/Typography';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Button, Drawer, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { navContent } from './navContent';
import { createTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import NavButtons from './navButtons';
import clsx from 'clsx';

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
        },
        sectionTitle: {
            color: '#FFFFFF',
            fontSize: 20,
            marginLeft: 10,
            paddingTop:14,
        },
        sideNav:{
                // position: 'fixed',
                height: '100%',
                direction:'column',
        },
        title:{
                fontSize:25,
                fontFamily: 'Poppins',
                color: '#fff',
                marginTop:20,
                marginLeft: 10,
                fontWeight:500
        },
        subHeading:{
                fontSize:11,
                fontFamily: 'Poppins',
                marginTop:50,
                marginBottom:15,
                marginLeft: 15,
                color: '#808191',
                fontWeight: 500
        },
        navDivider:{
                backgroundColor:'#2c2e35',
                width:'60%',
                height:1
        },
        sideNavNoScroll:{
                flexGrow: 1,
                overflow: 'hidden',
                backgroundColor: '#1f1d2b',
                // borderRight: `5px solid blue`,
        },
        sideButton: {
                backgroundColor: "#353440", 
                marginTop: '25px', 
                marginLeft: '25px', 
                position: 'absolute', 
                color: '#fff'
        }
        // paperAnchorLeft:{
        //         border: 'none',
        //         backgroundColor: 'black',
        //         width:drawerWidth
        // }


      }));


      const testStyles = makeStyles((theme) => ({
        drawer:{
                border: 'none',
                width:drawerWidth
        },
        root: {
                // width:drawerWidth,
        },
        // paperAnchorLeft: {
        //         borderRight: `1px solid blue`,
        // },
        // paperAnchorDockedLeft:{
        //         borderRight: `1px solid blue`,
        // }
}));

export default function SideButton(props){
        

        const theme = createTheme({
                palette: {
                  primary: {
                    light: '#757ce8',
                    main: '#353440',
                    dark: '#FF7551',
                    contrastText: '#808191',
                  },
                  secondary: {
                    light: '#ff7961',
                    main: '#f44336',
                    dark: '#ba000d',
                    contrastText: '#000',
                  },
                },
              });

        const classes = useStyles();
        const sideNav = testStyles();
        let width = window.innerWidth;

        const { screen } = props;
        const [mobileOpen, setMobileOpen] = React.useState(false);

        const container = screen !== undefined ? () => screen().document.body : undefined;

        const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        };

        const drawer = (
                <ThemeProvider theme={theme}>
                <Grid item className={classes.sideNavNoScroll}>
                        <Typography className={classes.title} variant="h2">
                        oliver smith
                        </Typography>
                        <Typography className={classes.subHeading}>
                        MENU
                        </Typography>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

                        <NavButtons section='0'></NavButtons>
                <Divider variant='middle' className={classes.navDivider} light></Divider>
                <Typography className={classes.subHeading}>
                        LEARNING
                </Typography>
                <NavButtons section='1'></NavButtons>
                </Grid>
                </ThemeProvider>

               
        );

        
    if (width < 946){
        return(
        <ThemeProvider>
                <Button className={classes.sideButton} onClick={handleDrawerToggle}><Icon>menu</Icon></Button>
                {/* <Typography onClick={handleDrawerToggle}>TESTING</Typography> */}
                <Drawer
                style={{borderRight: 'none'}}
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
                {/* <Drawer
                style={{borderRight: 'none'}}
                variant="permanent"
                sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer> */}
        </ThemeProvider>
        );
    }else{
            return(
        <ThemeProvider>
                {/* <Typography onClick={handleDrawerToggle}>TESTING</Typography> */}
                <Drawer
                style={{borderRight: 'none'}}
                PaperProps={{classes: {root: sideNav.drawer}}}
                variant="permanent"
                sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                {drawer}
                </Drawer>
        </ThemeProvider>
            );
    }

        // return (
                
                
        //         // <Grid
        //         //         item
        //         //         direction="column"
        //         //         justifyContent="flex-start"
        //         //         alignItems="flex-start"
        //         //         flexGrow='1'
        //         //         xs={2}
        //         //         className={classes.sideNav}
        //         // >
        
        // );
}