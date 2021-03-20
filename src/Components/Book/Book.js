import React, { useState } from 'react';
import { useParams } from 'react-router';
import data from "../../Data/data.json";

const Book = () => {
   
  const {id} = useParams();
  const ridersAvailable = data.find (ride => ride.id === parseInt(id));
  const [click,setClick] =useState(false);
  const showRides =(e) =>{
    setClick(!click);
    e.preventDefault()
  }

   
    return (
        <div >
            <div className="row">
            <form className="col-sm-3 m-5" onSubmit={showRides}>
                <div  className="border-0 m-5">
                <div className="form-group">
                  
                <input className="form-control" type="date" name="date" required />
                </div>
                <br />
                <div className="form-group">
                <p><b>pick from</b></p>
                <input className="form-control"  type="text" name="pick" required />
                </div>
                <br />
                <div className="form-group">
                <p><b>pick to</b></p>
                <input className="form-control"  type="text" name="dest" required />
                </div>
                <br />
                <div className="form-group">
                <input className="form-control" className="btn btn-success btn-lg " type="submit" value="Search" />
                </div>
                </div>
            </form>
            
        
              
                 
                <div>
            </div>
                <div className="col-sm-6 bg-light">
                <iframe width="500" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20dhaka+(Map)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

            </div>
                </div>
           <div className ="border col-sm-3 m-5" >
           { click &&   ( <div>
                <div className ="col-sm-3" > 
                <div className ="border-0" >
                  <div style={{display:'flex'}}>
                  <img style ={{width:"80px"}} src={ridersAvailable.image} alt=""/>  
                   <p>{ridersAvailable.name}</p>
                <img style ={{width:"80px"}}  src={ridersAvailable.images} alt=""/>
                <p>{ridersAvailable.price}$</p>
                  </div>
                </div>
                
                </div>
                <div className ="col-sm-3" > 
                <div className ="border-0" >
                  <div style={{display:'flex'}}>
                  <img style ={{width:"80px"}} src={ridersAvailable.image} alt=""/>  
                   <p>{ridersAvailable.name}</p>
                <img style ={{width:"80px"}}  src={ridersAvailable.images} alt=""/>
                <p>{ridersAvailable.price}$</p>
                  </div>
                </div>
                
                </div>
                <div className ="col-sm" > 
                <div className ="border-0" >
                  <div style={{display:'flex'}}>
                  <img style ={{width:"80px"}} src={ridersAvailable.image} alt=""/>  
                   <p>{ridersAvailable.name}</p>
                <img style ={{width:"80px"}}  src={ridersAvailable.images} alt=""/>
                <p>{ridersAvailable.price}$</p>
                  </div>
                </div>
                
                </div>
                </div>)}
           </div>
       
        </div>
    );
};

export default Book;
