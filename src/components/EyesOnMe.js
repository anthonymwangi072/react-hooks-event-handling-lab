// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function handleFocus(){
        console.log("Good")
    }

    function handleBlur(){
        console.log("Hey! All Eyes On Me")
    }
    return(
        <div>
            <button onClick={handleFocus} onBlur={handleBlur}>EyesOnMe</button>
        </div>
    )


}
export default EyesOnMe;