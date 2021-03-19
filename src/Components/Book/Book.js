import React, { useState } from 'react';
import { useHistory } from 'react-router';

const Book = () => {
    const history = useHistory();
    const [ride, setRide] = useState({
        pick:'',
        dest:''
    })
    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'pick'){
            isFieldValid = e.target.value;
        }
        if(e.target.name === 'dest'){
            isFieldValid = e.target.value;
        }
        if(isFieldValid){
            const updateField = {...ride}
            updateField[e.target.name] = e.target.value;
            setRide(updateField);
        }
    }
    const showRides = () => {
        if(ride.pick && ride.dest){
            history.push('/booking')
        } 
        
    }
    return (
        <div>
            <form onSubmit={showRides}>
                <div className="form-group">
                <input className="form-control" onBlur={handleBlur} type="date" name="date" required />
                </div>
                <br />
                <div className="form-group">
                <input className="form-control" onBlur={handleBlur} type="text" name="pick" required />
                </div>
                <br />
                <div className="form-group">
                <input className="form-control" onBlur={handleBlur} type="text" name="dest" required />
                </div>
                <br />
                <div className="form-group">
                <input className="form-control" className="btn btn-success btn-lg " type="submit" value="Search ride" />
                </div>
            </form>
        </div>
    );
};

export default Book;