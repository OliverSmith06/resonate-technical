import React, { useState } from 'react';
// import Scroll from './Scroll';
import SearchList from './SearchList';
import contactList from './contactList.js' ;
import SmallTile from './smallTile.js';
import { Button, Grid, TextField, Paper, Box, Typography, Icon } from '@material-ui/core';

function Search({ }) {

  const [searchField, setSearchField] = useState("");

  

  const filteredPersons = contactList.filter(
    person => {
      return (
        person
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase()) ||
        person
        .email
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
    //   <Scroll>
        <SearchList filteredPersons={filteredPersons} />
    //   </Scroll>
    );
  }

  return (


        <Grid item xs={12}>
            <TextField onChange={handleChange} style={{marginRight: '30px'}} color="primary" InputLabelProps={{className: 'textfield__label'}} className="filterBox" id="filtered" label="Search" variant="outlined" />
            {/* <TextField color="primary" InputLabelProps={{className: 'textfield__label'}} className="filterBox" id="filtered" label="Brand" variant="outlined" /> */}
        

        {/* <input 
          className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
          type = "search" 
          placeholder = "Search People" 
          onChange = {handleChange}
        /> */}

      {searchList()}
      </Grid>

  );
}

export default Search;