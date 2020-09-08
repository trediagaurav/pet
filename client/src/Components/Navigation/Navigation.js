import React from 'react';
import NavBar from '../NavBar';
import { Row } from "react-bootstrap";

//Recieve the onRouteChange Prop from App.js and isSignedIn
const Navigation = ({ onRouteChange, isSignedIn }) => {

        //If we are signedIn display the sign out navigation
        if (isSignedIn) {

            return(

                <nav>
                    
                    <NavBar />
                   <p onClick={() => onRouteChange('signout')} className='signout'>Sign Out</p>
                   
                </nav>
            );

        } else { //else if the user is not signedIn display 2 navigations: signin and register

            return(

               <nav className="Nav">

                 <p onClick={() => onRouteChange('signin')} className='f4 link dim black pa3 pointer'>Sign In</p>

                 <p onClick={() => onRouteChange('register')} className='f4 link dim black pa3 pointer'>Register</p>

               </nav>

            );
        }
        
}

export default Navigation;