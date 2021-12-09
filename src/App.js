import logo from './logo.svg';
import './App.css';
import React, { PureComponent, useState } from 'react';
import { Button, Grid, TextField, Paper, Box, Typography, Icon, Drawer } from '@material-ui/core';
// import EmojiResults from "./EmojiResults";
import SideNav from './components/sideNav';
import SearchInput from "./components/SearchInput";
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import LargeTile from './components/largeTile';
import MediumTile from './components/mediumTile';
import SmallTile from './components/smallTile';
import HeadTile from './components/headTile';
import ReactMarkdown from 'react-markdown';
import RecentItems from './components/recentItems';
import LargeFillTile from './components/largeFillTile';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { projectList } from './components/projectList';
import Contacts from './components/contacts';
import contactList from './components/contactList.js'
import Select from 'react-select';
import Search from './components/Search.js';


// import Icon from '@material-ui/core/Icon';
import { navContent } from './components/navContent';
import IconButton from '@material-ui/core/IconButton';
import NavButtons from './components/navButtons';

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

import Filter from './components/filter';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// // import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'lime',
  }
}));

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

export default class App extends PureComponent {



  render() {



    let width = window.innerWidth;
    if (width < 946){
      return (
      
        <Router>
          <div className="App">
          
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap" />
            <header className="App-header">
            {/* <NavButtons section='1'></NavButtons> */}
            <SideNav></SideNav>
    
              <Grid
                style={{marginLeft: '0px', width: '100%'}}
              className="landingContent"
                container 
                direction={'row'}
                justifyContent='flex-start'
                spacing={3}
              >
                  <ThemeProvider theme={theme}>
                  <Route exact={true} path="/">
    
                    <Search />
                    
                  </Route>
                  
                  </ThemeProvider>
                
              </Grid>
    
            </header>
          </div>
        </Router>
        );
    }else{
      return (
      
        <Router>
          <div className="App">
            <SideNav></SideNav>
          
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap" />
            <header className="App-header">
    
    
              <Grid
                style={{marginLeft: '240px', width: '87%'}}
              className="landingContent"
                container 
                direction={'row'}
                justifyContent='flex-start'
                spacing={3}
              >
                  <ThemeProvider theme={theme}>
                  <Route exact={true} path="/">
    
                    <Search />
                    
                  </Route>
                  
                  </ThemeProvider>
                
              </Grid>
    
            </header>
          </div>
        </Router>
        );
    }
    

  }
}

const Post = ({  post }) => (
    <ThemeProvider theme={theme}>
    <Link to='/' className="routeLink"><Icon>arrow_back</Icon> Back</Link><br></br>
    
    <HeadTile><span className="HeadTile pageHeader" >{post.title}</span></HeadTile>
    <HeadTile><span className="HeadTile pageSub">{post.subject}</span></HeadTile>
        {Object.keys(post.components).map(key => {
          if(post.components[key].type == 'largeTile'){
            return(<LargeTile>{post.components[key].content}</LargeTile>);
          } else if (post.components[key].type == 'mediumTile'){
            return(<MediumTile>{post.components[key].content}</MediumTile>);
          } else if (post.components[key].type == 'smallTile'){
            return(<SmallTile>{post.components[key].content}</SmallTile>);
          } else if (post.components[key].type == 'smallImg'){
            return(<SmallTile image={post.components[key].path}></SmallTile>);
          } else if (post.components[key].type == 'mediumImg'){
            return(<MediumTile image={post.components[key].path}></MediumTile>);
          } else if (post.components[key].type == 'normal'){
            return(<HeadTile><ReactMarkdown>{post.components[key].content}</ReactMarkdown></HeadTile>);
          }
        })}
    
    
    </ThemeProvider>
)

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]



const Garage = ({  garage}) => (
  
  <ThemeProvider theme={theme}>
  <Link to='/' className="routeLink"><Icon>arrow_back</Icon> Back</Link><br></br>
  <Grid item xs={12}>
    <TextField style={{marginRight: '30px'}} color="primary" InputLabelProps={{className: 'textfield__label'}} className="filterBox" id="filtered" label="Search" variant="outlined" />
    <TextField color="primary" InputLabelProps={{className: 'textfield__label'}} className="filterBox" id="filtered" label="Brand" variant="outlined" />
  </Grid>
  
  <Grid item xs={12}
  style={{marginLeft: '35px'}}
  // justifyContent='center'
  // spacing={10} 
  // direction={'row'}
  >
    <Filter>Class</Filter>
    <Filter>Make</Filter>
    <Filter>Colour</Filter>
    <Filter>Price Range</Filter>
  </Grid>
  <Grid item xs={3}>
  {/* <Filter></Filter> */}
  </Grid>
  {/* <Select options={options} /> */}

  

  {/* <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value="Class"
      label="Class"
      // onChange={handleChange}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select> */}
  <HeadTile><span className="HeadTile pageHeader" >GARAGE</span></HeadTile>
  <HeadTile><span className="HeadTile pageSub">CARS</span></HeadTile>
  <Contacts></Contacts>
  
  
  </ThemeProvider>
)

// const Showroom = ({  showroom}) => (
//   <ThemeProvider theme={theme}>
//   <Link to='/' className="routeLink"><Icon>arrow_back</Icon> Back</Link><br></br>
  
//   <HeadTile><span className="HeadTile pageHeader" >SHOWROOM</span></HeadTile>
//   <HeadTile><span className="HeadTile pageSub">CARS</span></HeadTile>
//   <RecentlySold section="0"></RecentlySold>
  
  
//   </ThemeProvider>
// )

// const Race = ({  race}) => (
//   <ThemeProvider theme={theme}>
//   <Link to='/' className="routeLink"><Icon>arrow_back</Icon> Back</Link><br></br>
  
//   <HeadTile><span className="HeadTile pageHeader" >RACES</span></HeadTile>
//   <HeadTile><span className="HeadTile pageSub">CARS</span></HeadTile>
  
  
//   </ThemeProvider>
// )

// const Research = ({  race}) => (
//   <ThemeProvider theme={theme}>
//   <Link to='/' className="routeLink"><Icon>arrow_back</Icon> Back</Link><br></br>
  
//   <HeadTile><span className="HeadTile pageHeader" >RESEARCH</span></HeadTile>
//   <HeadTile><span className="HeadTile pageSub">CARS</span></HeadTile>
  
  
//   </ThemeProvider>
// )