import React, { Component } from "react";
import { contactList } from './contactList';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MediumTile from './mediumTile';
import SmallTile from './smallTile';
import '../App.css';

const useStyles = makeStyles((theme) => ({
        // root: {
        //   flexGrow: 1,
        // },
        // navButton:{
        //         marginLeft: 10,
        //         marginRight: 10,
        //         minWidth:0,
        //         paddingLeft:7,
        //         paddingRight:7,
        //         borderRadius:10,
        //         color: '#fff'
        // },
        // navTitle:{
        //         fontSize:14,
        //         marginLeft: 10,
        //         marginRight: 10,
        //         lineHeight:'48px',
        //         color: '#808191',
        //         fontFamily: 'Poppins'
        // },
        // navItem:{
        //         marginBottom:30
        // },


      }));


export default function RecentlySold(props){

        
        const classes = useStyles();
        return(
                <div></div>
            // <Grid
            // className="soldContent"
            //  container 
            //  direction={'row'}
            //  justifyContent='flex-start'
            //  spacing={3}
            // >
            //     {contactList.map(item => 
            //         // {item.title}
            //         <SmallTile>
            //             <div className="grid">
            //             <div style={{backgroundImage: 'url("'+ item.image +'")'}} className="topCar">
            //             {/* <div style={{backgroundImage: 'url("'+ item.image +'")'}} className="profilePic"></div> */}
            //             </div>
            //             <div className="bottomCar">
            //                 {item.name}<br></br>
            //                 {item.email}<br></br>
            //                 <div className="carDivider"></div>
            //                 <div className="subBottomCar">
            //                     {item.company.name}<br></br> 
                                
            //                 </div>
                            
            //             </div>
            //             </div>
                        
            //         </SmallTile>
            //         // <div>dgferiojgdfeijo</div>
            //             // <Grid
            //             // container
            //             // direction="row"
            //             // justifyContent="flex-start"
            //             // alignItems="center"
            //             // className={classes.navItem}>
            //             //         <Button variant="contained" className={classes.navButton} color="primary"><Icon>{item.icon}</Icon></Button>
            //             //         <span className={classes.navTitle}>{item.title}</span>
                                
            //             // </Grid>
            //             )}
            //    </Grid>
        )

}