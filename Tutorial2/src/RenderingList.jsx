import React from 'react'
import { people } from './components/Data';
import imageUtils from './utils/imageUtils';


function RenderingList() {
    const chemist = people.filter(person =>
        person.profession === "chemist"
    );
    console.log(chemist);

    //Arrow function implicitly return the expression right after => so no return statement required
    // if we are writing with =>{ return <li></li> } will be required
    const listItems = chemist.map(person=>
            //This key uniquely identifies array item
            <li key={person.id}>
               <img 
               src={imageUtils(person)}
               ></img>
               <b>{person.name}</b>
               { " was known for"+ person.profession}
            </li>
    )

    return <ul>{listItems}</ul>;

}

export default RenderingList;
