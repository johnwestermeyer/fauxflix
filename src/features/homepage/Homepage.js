import React, {useEffect, useState} from "react";
import Row from '../../components/Row/Row'
import VideoPreview from "../../components/VideoPreview/VideoPreview";

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
    const [rowLength, setRowLength] = useState(8);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        const returnValue = Math.round((width * 0.80) / 80);
        if(returnValue <= 8){          
          setRowLength(returnValue);
        }
    },[width])

    return (
        <>
        <p style={{color: "white"}}>PlaceHolder</p>
            
            <VideoPreview title={showPreview.title} trailer={showPreview.trailer} overview={showPreview.overview} setShowPreview={setShowPreview} showPreview={showPreview}/>
            <Row rowLength={rowLength} genre={"35"} name={"Comedy"} setShowPreview={setShowPreview}/>
            <Row rowLength={rowLength} genre={"16"} name={"Animation"} setShowPreview={setShowPreview}/>
        </>
    )
};

export default Homepage;