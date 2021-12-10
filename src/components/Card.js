// src/components/Card.js

import React from 'react';
import SmallTile from './smallTile.js';
import HeadTile from './headTile.js';

function Card({person}) {
    let width = window.innerWidth;
    if (width < 946){
        return(
            <HeadTile>
            <div className="grid">
            {/* <div style={{backgroundImage: 'url("'+ person.image +'")'}} className="topCar"> */}
           
            {/* </div> */}
            <div className="bottomCar">
                {person.name}<br></br>
                {person.email}<br></br>
                <div className="carDivider"></div>
                <div className="subBottomCar">
                    {person.company.name}<br></br> 
                    
                </div>
                
            </div>
            </div>
            
        </HeadTile>
        );
    } else {
        return(
            <SmallTile>
            <div className="grid">
            {/* <div style={{backgroundImage: 'url("'+ person.image +'")'}} className="topCar"> */}
           
            {/* </div> */}
            <div className="cover">
                <b>Username:</b> {person.username}<br></br>
                <b>Phone:</b> {person.phone}<br></br>
                <b>City:</b> {person.address.city}
            </div>
            <div className="bottomCar">
                {person.name}<br></br>
                {person.email}<br></br>
                <div className="carDivider"></div>
                <div className="subBottomCar">
                    {person.company.name}<br></br> 
                    
                </div>
                
            </div>
            </div>
            
        </SmallTile>
        );
    }
  
}

export default Card;