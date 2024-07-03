import { useEffect, useState } from 'react';

export default function RandomColor(){
    const [color,setColor]=useState("#FFFFFF");
    const [typeofColor,setTypeofColor] = useState("hex");
    
    const handleHexColorChange = ()=> {

        const hex =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexcolor = "#";

        for(let i=0;i<6;i++){
            hexcolor += hex[Math.floor(Math.random()*hex.length)];
        }
        setColor(hexcolor);
    };

    const handleRGBColorChange = ()=>{
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        setColor(`rgb(${r},${g},${b})`);
    }

    useEffect(()=>{
        typeofColor === "hex"?handleHexColorChange():handleRGBColorChange();
    },typeofColor)
    
    return (
        <div style={{
            width:"100vw",
            height:"100vh",
            backgroundColor:color,
        }}>
            <button onClick={()=>setTypeofColor("hex")}>Hex Color</button>
            <button onClick={()=>setTypeofColor("rgb")}>RGB Color</button>
            <button onClick={typeofColor === "hex"? handleHexColorChange:handleRGBColorChange }>GenerateColor</button>
            <div>
                {typeofColor === "hex"? <h2>Hex Color :{color}</h2>: <h2> {color}</h2>}
            </div>
        </div>
    );
};