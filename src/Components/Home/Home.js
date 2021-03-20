import React, { useEffect, useState } from 'react';
import vehiclesData from '../../Data/data.json';
import Vehicle from '../Vehicle/Vehicle';
import "./Home.css";

const Home = () => {
    const [vehicles , setVehicles] = useState([]);
    useEffect(()=>{
        setVehicles(vehiclesData);
    },[])
    return (
        <div className ="HomeComponent ">
            
            <div  className="row ">
            {
                vehicles.map(vehicle => <Vehicle vehicle={vehicle} ></Vehicle>)
            }
            </div>
           
        </div>
    );
};

export default Home;