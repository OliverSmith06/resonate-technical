// src/components/SearchList.js

import React from 'react';
import Card from './Card';
import '../App.css';
import { Button, Grid, TextField, Paper, Box, Typography, Icon } from '@material-ui/core';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map(person =>  <Card key={person.id} person={person} />); 
  return (
    <Grid
        className="soldContent"
        container 
        direction={'row'}
        justifyContent='flex-start'
        spacing={3}
    >
      {filtered}
    </Grid>
  );
}

export default SearchList;