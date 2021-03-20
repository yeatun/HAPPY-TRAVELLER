import React from 'react';
import { Link } from 'react-router-dom';



const Vehicles = (props) => {
 
  
    const {id,image,name} =props.vehicle;

   
    return (
        <div  className="col-sm-3 " >
            
          <div  className ="border m-2">
          <Link style={{color:'black'}}  to ={`/book/${id}`}>
          <img  style={{height:"200px"}} src={image} alt=""/>
            <h1>{name}</h1>
         </Link>
          </div>
           
        
        </div>
    );
};

export default Vehicles;
