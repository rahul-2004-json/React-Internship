import { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import './styles.css';

export default function StarRating({noOfStars = 5}){
    const [rating,setRating]=useState(0);
    const [hover,setHover]=useState(0);

    function handleClick(getCurrentIndex){
        setRating(getCurrentIndex);
    }

    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex);
    }

    function handleMouseLeave(getCurrentIndex){
        setHover(rating);
    }

    return (
        <div className="star-rating">
        {
            //Below we are creating an array of stars based on the noOfStars , currently they are undefined
            [...Array(noOfStars)].map((_,index) => {
                index += 1; //since the index will start from 0
                return <FaStar 
                    key={index}
                    className={index <= (hover || rating) ? 'active' : 'inactive'}
                    onClick={()=>handleClick(index)}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}
                    size={40}
                />
            })
        }
        </div>
        );
    
}



/*
How It Works
When the user hovers over a star:

hover is set to the index of the star being hovered over.
Stars with an index less than or equal to hover will have the className set to 'active'.
This makes the stars up to the one being hovered over highlighted (active).
When the user is not hovering over a star:

hover is 0, so the condition uses rating.
Stars with an index less than or equal to rating will have the className set to 'active'.
This makes the stars up to the current rating highlighted (active).
All other stars will have the className set to 'inactive', making them appear unhighlighted.

*/