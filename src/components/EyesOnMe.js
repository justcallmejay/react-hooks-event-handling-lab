// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function eyes() {
        console.log('Good!')
    }
    function heyYou() {
        console.log('Hey! Eyes on me!')
    }

    
    return <button type="submit" onFocus={eyes} onBlur={heyYou}>Eyes on me</button>
}

export default EyesOnMe