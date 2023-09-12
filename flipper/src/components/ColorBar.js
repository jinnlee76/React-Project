import React, {useState} from "react";
import styled from "styled-components";

const ColorBox = styled.h2`
    background-color: ${(props) => props.boxColor};
`;

const ColorBar = () => { 
    const [colorValue, setColorState] = useState("#f1f5f8");

    function changeColorValue(){
        const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexColor ="#";
        for(let i=0; i < 6;i++){
            hexColor += hex[Math.floor(Math.random() * hex.length)];
        }
        setColorState(hexColor);
    };
    
    return(
        <main>
            <div className="container">
                <ColorBox boxColor={colorValue}>background color : <span className="color">{colorValue}</span></ColorBox>
                <button className="btn btn-hero" id="btn" 
                        onClick={changeColorValue}>click me</button>
            </div>
        </main>
    )
};

export default ColorBar;