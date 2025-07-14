import { useState, useRef, useEffect } from "react";

const SecondsCounter = ({ onTimeout = () => {}, resetTrigger }) => {
    
    const [time, setTime] = useState(15); 
    const intervalRef = useRef(null); 

    useEffect(() => {
        clearInterval(intervalRef.current); 
        intervalRef.current  = null;
        setTime(15);
        handleStart();
    }, [resetTrigger]);

    const handleStart = () => {
        if (intervalRef.current !== null) return;
        
        intervalRef.current = setInterval(() => {
            setTime((prevTime) => {
                if (prevTime === 1) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    onTimeout();
                    return 0;
                }
            return prevTime - 1;
            });
        }, 1000);
    }

    const handleStop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null; 
        setTime(15); 
    }

   return (
    <div className="row d-flex align-items-center justify-content-center">
        <h1 className="col-9 display-1"> {time} </h1>
        <div className="col-9 m-3">
            <button className="button-combat btn btn-primary p-2 fs-4 m-3" onClick= {handleStart}> Iniciar  turno </button>
            <button className="button-combat btn btn-primary p-2 fs-4 m-3" onClick= {handleStop}> Pasar turno </button>
        </div>
        
    </div>
    );
}; 

export default SecondsCounter; 