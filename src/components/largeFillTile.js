import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import './largeTile.css'

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: '#26abbd',
          height: '400px',
          width: '50%',
          borderRadius: '20px',
          textAlign:'left',
          margin: 'auto',
        //   backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPositionY: '70%',
          backgroundPositionX: '50%',
        },
        outer: {
        width: '100%',
        backgroundColor: '#26abbd',
        height: '350px',
        width: '50%',
        borderRadius: '20px',
          textAlign:'left',
          margin: 'auto',
        }
        


      }));

const outer = makeStyles((theme) => ({
        root: {
          width: '100%',
          
        },
      }));


export default function NavButtons(props){

        
        const classes = useStyles();
        const outer = useStyles();
        return(
                <Grid item xs={12} style={{maxWidth: '100%'}}>
                        <Grid item xs = {8} style={{width: '100%', maxWidth: '100%'}}>
                                <Paper
                                style={{backgroundImage: 'url("'+ props.image +'")'}} classes={{root: classes.root}} className="largeTile">
                                        <div id="largeText" className="text">
                                        
                                                        {props.children}
                                
                                        </div>
                                </Paper>
                        </Grid> 
                </Grid>
        )

}