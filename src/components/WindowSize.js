import { useState, useEffect } from "react";


function useWindowSize(){
        
    const [windowSize, setWindowSize] = useState({

        width: undefined,
        heigth : undefined,
        });


        useEffect(()=>{

        function handleResize(){

            setWindowSize({

                width: window.innerWidth,
                heigth: window.innerHeight,
            });

        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);

        }, []);

        return windowSize;
    }


export default useWindowSize;