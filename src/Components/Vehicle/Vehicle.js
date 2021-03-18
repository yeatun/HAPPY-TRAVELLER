import React from 'react';

const Vehicles = (props) => {
    const {image,name} =props.vehicle;
    return (
        <div>
            <img style={{width:"200px"}} src={image} alt=""/>
            <h1>{name}</h1>
        </div>
    );
};

export default Vehicles;