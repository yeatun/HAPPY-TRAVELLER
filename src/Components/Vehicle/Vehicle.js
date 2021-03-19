import React from 'react';
import { Link } from 'react-router-dom';

const Vehicles = (props) => {
 
  
    const {id,image,name} =props.vehicle;

   
    return (
        <di className="col-sm-3 text-center border ">
            <Link  to ={`/book/${id}`}>
            <img style={{weight:"50px",height:"100px"}} src={image} alt=""/>
            <h1>{name}</h1>
            </Link>
        
        </di>
    );
};

export default Vehicles;