// defining customHooks with the name of useCounter

import {useState, useEffect} from 'react'

// we are adding if condition to make sure that the cutsom hook works fine for the BackwardCounter
const useCounter = (forwards = true) =>{
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if(forwards){
                setCounter((prevCounter) => prevCounter + 1);
            }
            else{
                setCounter((prevCounter) => prevCounter - 1);
            }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [forwards]);
      return counter; // returning the counter so that the Hook can be used in other files/component, we can return an array or an obejct or a number
}

export default useCounter