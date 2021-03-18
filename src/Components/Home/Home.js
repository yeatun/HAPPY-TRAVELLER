import React, { useEffect, useState } from 'react';
import vehiclesData from '../../Data/data.json';
import Vehicle from '../Vehicle/Vehicle';

const Home = (props) => {
    const [vehicles , setVehicles] = useState([]);
    useEffect(()=>{
        setVehicles(vehiclesData);
    },[])
    return (
        <div>
            
            {
                vehicles.map(vehicle => <Vehicle vehicle={vehicle} ></Vehicle>)
            }
           
        </div>
    );
};

export default Home;