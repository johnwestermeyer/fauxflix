import React, {useEffect, useState} from "react";
import Row from '../../components/Row/Row'

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  
function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    );
  
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
  
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return windowDimensions;
  }

const Homepage = () => {    
    const {height, width} = useWindowDimensions();    
    const [rowLength, setRowLength] = useState(9);

    useEffect(() => {
        const returnValue = Math.round((width * 0.85) / 80);
        if(returnValue <= 9)
        setRowLength(returnValue);
    },[width])

    return (
        <>
            <Row rowLength={rowLength}/>
            <Row rowLength={rowLength}/>
        </>
    )
};

export default Homepage;