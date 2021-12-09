import React, { Component } from "react";
import { navContent } from './navContent';
import { Grid, Button, Icon, Paper, Select, Box } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ReactMarkdown from 'react-markdown';
import './smallTile.css';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles((theme) => ({
        root: {
          backgroundColor: '#252836',
          height: '250px',
          width: '100%',
          borderRadius: '20px',
        //   backgroundImage: 'url("")',
        backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        //   backgroundPositionY: '-100%',
        //   backgroundPositionX: '50%',

        },


      }));


export default function NavButtons(props){
        const [age, setAge] = React.useState('');

        const handleChange = (event) => {
          setAge(event.target.value);
        };
        
        const classes = useStyles();
        return(
            // <Box sx={{ minWidth: 120 }}>
            <FormControl id='filter'>
              <InputLabel id="demo-simple-select-label">{props.children}</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
        //   </Box>
        )

}