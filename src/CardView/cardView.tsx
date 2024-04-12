import React, { useEffect } from 'react';
import './CardView.css';

interface Props {
    image?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}


const CardView: React.FC<Props> = (props) => {
    return (
        <div className='cardViewContainer'>
            <img className='profilePic' src={props?.image} />
            <div className='nameStyle'>{props?.firstName}</div>
            <div className='nameStyle'>{props?.lastName}</div>
            <div className='emailStyle'>{props?.email}</div>
        </div>
    );
}

export default CardView;