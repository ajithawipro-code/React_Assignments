import React from "react";
import { useRef } from "react";


function UseRefVideo(){

    const videoRef=useRef(null);

    const handleRefPlay=()=>{

        videoRef.current.play();
    }

    const handleRefPause=()=>{
        videoRef.current.pause();
    }

    const handleRefForward=()=>{
        videoRef.current.currentTime +=2;
    }

    const handleRefRewind=()=>{
        videoRef.current.currentTime -=2;
    }
    


    return(

        <div>
            <video src="https://www.w3schools.com/html/mov_bbb.mp4" ref={videoRef} />

            <button onClick={handleRefPlay}>Play</button>
            <button onClick={handleRefPause}>Pause</button>
            <button onClick={handleRefForward}>Forward</button>
            <button onClick={handleRefRewind}>Rewind</button>


        </div>
    )
    
}

export default UseRefVideo