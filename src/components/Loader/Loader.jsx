import React from "react";
import { DotSpinner } from "@uiball/loaders";
import "./loader.css"

function Loader(){

    return (
        <>
        <div className="loader">
        <DotSpinner 
                    size={200}
                    speed={0.8}
                    color = "rgb(255, 235, 123)"
                />  
        </div>
            
        </>
    )
}

export default Loader;