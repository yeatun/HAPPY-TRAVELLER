import React from 'react';

const BookingPage = () => {
    
    return (
        <div>
            <p>this is booking page</p>
        </div>
    );
};

export default BookingPage;






// import React, {  useEffect, useState } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// // import Book from '../Book/Book';


// const BookingPage=()=>{
//     //     const [books , setBooks] = useState([]);
//     // useEffect(()=>{
//     //     setBooks(booksData);
//     // },[])
      
//     return (
//         <div>
//            <div>
//            <p>this is book</p>
//            <h1>Date</h1>
//            <input type="date"/>
//            <h1>pick from</h1>
//            <input type="text"/>
//            <h1>pick To</h1>
//            <input type="text"/>
//            <br/>
           
//            <button>Search</button>
//            </div>
//            {/* <div>
//                {
//                      books.map(book => <Book book={book} ></Book>)
//                }
//            </div> */}

//            <Map google={this.props.google} zoom={14}>
 
//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//         </div>
//     );
// };
// export default BookingPage;

// // export default GoogleApiWrapper({
// //     apiKey: ("AIzaSyA31xTggTwUc8BSoeIBRDRL7OrJINYEjhQ")
// //   })(BookingPage)