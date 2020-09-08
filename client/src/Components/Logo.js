import React from 'react';
import Image from 'react-bootstrap/Image';
import pic2 from '../Images/pic2.png';

export default function Logo() {
    return (
        <div>
            <Image src={pic2} alt="Logo" width= '300' height= '300' fluid />            
        </div>
    )
}
