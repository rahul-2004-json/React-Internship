//Types of accordian menu
//Single Selection
//Multiple Selection : Means we can select other accordian without closing current is selected 

import data from "./data";
import { useState } from 'react';
import "./styles.css"

export default function Accordian(){
    const [selected,setSelected]=useState(null);
    const [enablemultiselect,setEnableMultiselect]=useState(false);
    //Whenever we select multiple items we will have to store multiple ID's
    const [multiple,setMultiple]=useState([]);


    function handleSingleClick(currentID){
        //The below condition closes the menu if we again select it
       setSelected(currentID===selected ? null : currentID)
    }

    function handleMultiClick(currentID){
        let cpyMulti = [...multiple];   // ...spread operator
        const findindexof = cpyMulti.indexOf(currentID)
        if(findindexof === -1){ cpyMulti.push(currentID)}
        else{
            cpyMulti.splice(findindexof,1)
        }
        setMultiple(cpyMulti)
        console.log(multiple)
    }



    return (
    <div className="wrapper">
    <button className="btn" onClick={()=> setEnableMultiselect(!enablemultiselect)} >Enable MultiSelection</button>
    <div className="accordian">
    {/* Whenever we need to write javascript we write it inside {} braces only*/}
        {
            //This data && data.length > 0 is written to handle case of empty data recieved
            data && data.length > 0 ? 
            data.map(dataitem => <div key={dataitem.id} className="item">
                <div onClick={enablemultiselect 
                             ?()=> handleMultiClick(dataitem.id)
                             :()=> handleSingleClick(dataitem.id)} className="title">
                    <h1>{dataitem.question}</h1>
                    <span>+</span>
                </div>
                {
                    enablemultiselect ? multiple.indexOf(dataitem.id) !==-1 && <div className="content">{dataitem.answer}</div>
                    : selected === dataitem.id && <div className="content">{dataitem.answer}</div>

                }
                {/* {selected === dataitem.id ? <div className="content">{dataitem.answer}</div> :null} */}
            </div>)
            :<div>No Data Found !</div>
        }
    </div>
    </div>
   
    )
};